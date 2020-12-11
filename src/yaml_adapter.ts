import * as fs from 'fs';
import * as path from 'path';

import { DatabaseAdapter, DatabaseValueAble, JSObject, SyncDatabaseAdapter } from './database';
import { mkdirs, mkdirsSync } from './fs_help';


// js-yaml import. Throw an error if it is not installed
let yaml: typeof import("js-yaml");
try {
  yaml = require('js-yaml');
} catch(e) {
  let err = new Error("You should have installed js-yaml if you want to use the yaml-adapter");
  err.stack += '\nCaused by: '+ err.message + err.stack;
  throw e;
}





/**
 * YamlFileAdapter is an async adapter for working with Yaml Files
 * 
 * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
 */
export class YamlFileAdapter implements DatabaseAdapter {


  /**
   * The constructor for [YamlFileAdapter](https://nsc-de.github.io/js-database/classes/_yaml_adapter_.yamlfileadapter.html)
   * 
   * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
   * @param path the path to a yaml file to save to and load from
   * 
   * @see [YamlFileAdapter](https://nsc-de.github.io/js-database/classes/_yaml_adapter_.yamlfileadapter.html) - 👩‍👦 the parent class
   */
  constructor(
    readonly path: string
  ) {}


  /**
   * Saves the given data to the file the adapter refers to
   * 
   * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
   * @param data The data to save
   * @returns ⌛ Promise (Ready when saved) >> ⛔ void
   * 
   * @see [YamlFileAdapter](https://nsc-de.github.io/js-database/classes/_yaml_adapter_.yamlfileadapter.html) - 👩‍👦 the parent class
   */
  save(data: JSObject<DatabaseValueAble>): Promise<void> {
    return new Promise((rs, rj) => 
      mkdirs(path.dirname(this.path)).then(() => 
        fs.writeFile(this.path, yaml.dump(data), err => {
          if(err) rj(err);
          else rs();
        })));
  }
  

  /**
   * Loads data from the file the adapter refers to
   * 
   * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
   * @returns ⌛ Promise (Ready when saved) >> Object
   * 
   * @see [YamlFileAdapter](https://nsc-de.github.io/js-database/classes/_yaml_adapter_.yamlfileadapter.html) - 👩‍👦 the parent class
   */
  load(): Promise<JSObject<DatabaseValueAble>> {
    return new Promise((rs, rj) => {
      fs.exists(this.path, exists => {
        if(exists) {
          fs.readFile(this.path, (err, data) => {
            if(err) rj(err);
            else rs(yaml.load(data.toString()));
          });
        }
        else rs({});
      })
    });
  }
}





/**
 * [SyncYamlFileAdapter](https://nsc-de.github.io/js-database/classes/_yaml_adapter_.syncyamlfileadapter.html) is an sync adapter for working with Yaml Files
 * 
 * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
 */
export class SyncYamlFileAdapter implements SyncDatabaseAdapter {


  /**
   * The constructor for [SyncYamlFileAdapter](https://nsc-de.github.io/js-database/classes/_yaml_adapter_.syncyamlfileadapter.html)
   * 
   * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
   * @param path the path to a yaml file to save to and load from
   * 
   * @see [SyncYamlFileAdapter](https://nsc-de.github.io/js-database/classes/_yaml_adapter_.syncyamlfileadapter.html) - 👩‍👦 the parent class
   */
  constructor(
    readonly path: string
  ) {}


  /**
   * Saves the given data to the file the adapter refers to
   * 
   * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
   * @param data The data to save
   * @returns ⌛ Promise (Ready when saved) >> ⛔ void
   * 
   * @see [SyncYamlFileAdapter](https://nsc-de.github.io/js-database/classes/_yaml_adapter_.syncyamlfileadapter.html) - 👩‍👦 the parent class
   */
  save(data: JSObject<DatabaseValueAble>): void {
    mkdirsSync(path.dirname(this.path));
    fs.writeFileSync(this.path, yaml.dump(data));
  }


  /**
   * Loads data from the file the adapter refers to
   * 
   * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
   * @returns ⌛ Promise (Ready when saved) >> Object
   * 
   * @see [SyncYamlFileAdapter](https://nsc-de.github.io/js-database/classes/_yaml_adapter_.syncyamlfileadapter.html) - 👩‍👦 the parent class
   */
  load(): JSObject<DatabaseValueAble> {
    if(fs.existsSync(this.path)) return yaml.load(fs.readFileSync(this.path).toString());
    return {};
  } 
}