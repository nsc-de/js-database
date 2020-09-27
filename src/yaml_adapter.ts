import * as fs from 'fs';
import * as yaml from 'js-yaml';
import * as path from 'path';

import { DatabaseAdapter, JSObject, SyncDatabaseAdapter } from './database';
import { mkdirs, mkdirsSync } from './fs_help';

export class YamlFileAdapter implements DatabaseAdapter {

  constructor(
    readonly path: string
  ) {}

  save(data: JSObject): Promise<void> {
    return new Promise((rs, rj) => 
      mkdirs(path.dirname(this.path)).then(() => 
        fs.writeFile(this.path, yaml.dump(data), err => {
          if(err) rj(err);
          else rs();
        })));
  }
  
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

export class SyncYamlFileAdapter implements SyncDatabaseAdapter {

  constructor(
    readonly path: string
  ) {}

  save(data: JSObject): void {
    mkdirsSync(path.dirname(this.path));
    fs.writeFileSync(this.path, yaml.dump(data));
  }
  
  load(): JSObject {
    if(fs.existsSync(this.path)) return yaml.load(fs.readFileSync(this.path).toString());
    return {};
  } 
}