import * as fs from 'fs';
import * as path from 'path';

import { DatabaseAdapter, JSObject, SyncDatabaseAdapter } from './database';
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
 * @author Nicolas Schmidt
 */
export class YamlFileAdapter implements DatabaseAdapter {


  /**
   * The constructor for YamlFileAdapter
   * 
   * @param path the path to a yaml file to save to and load from
   * 
   * @author Nicolas Schmidt
   * 
   * @see YamlFileAdapter - 👩‍👦 the parent class
   */
  constructor(
    readonly path: string
  ) {}


  /**
   * Saves the given data to the file the adapter refers to
   * 
   * @param data The data to save
   * @returns ⌛ Promise (Ready when saved) >> ⛔ void
   * 
   * @author Nicolas Schmidt
   * 
   * @see YamlFileAdapter - 👩‍👦 the parent class
   */
  save(data: JSObject): Promise<void> {
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
   * @returns ⌛ Promise (Ready when saved) >> Object
   * 
   * @author Nicolas Schmidt
   * 
   * @see YamlFileAdapter - 👩‍👦 the parent class
   */
  load(): Promise<JSObject> {
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
 * SyncYamlFileAdapter is an sync adapter for working with Yaml Files
 * 
 * @author Nicolas Schmidt
 */
export class SyncYamlFileAdapter implements SyncDatabaseAdapter {


  /**
   * The constructor for SyncYamlFileAdapter
   * 
   * @param path the path to a yaml file to save to and load from
   * 
   * @author Nicolas Schmidt
   * 
   * @see SyncYamlFileAdapter - 👩‍👦 the parent class
   */
  constructor(
    readonly path: string
  ) {}


  /**
   * Saves the given data to the file the adapter refers to
   * 
   * @param data The data to save
   * @returns ⌛ Promise (Ready when saved) >> ⛔ void
   * 
   * @author Nicolas Schmidt
   * 
   * @see SyncYamlFileAdapter - 👩‍👦 the parent class
   */
  save(data: JSObject): void {
    mkdirsSync(path.dirname(this.path));
    fs.writeFileSync(this.path, yaml.dump(data));
  }


  /**
   * Loads data from the file the adapter refers to
   * 
   * @returns ⌛ Promise (Ready when saved) >> Object
   * 
   * @author Nicolas Schmidt
   * 
   * @see SyncYamlFileAdapter - 👩‍👦 the parent class
   */
  load(): JSObject {
    if(fs.existsSync(this.path)) return yaml.load(fs.readFileSync(this.path).toString());
    return {};
  } 
}