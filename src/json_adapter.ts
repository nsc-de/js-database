import * as fs from 'fs';
import * as path from 'path';

import { DatabaseAdapter, JSObject, SyncDatabaseAdapter } from './database';
import { mkdirs, mkdirsSync } from './fs_help';

export class JsonFileAdapter implements DatabaseAdapter {

  constructor(
    readonly path: string
  ) {}

  save(data: JSObject): Promise<void> {
    return new Promise((rs, rj) => 
      mkdirs(path.dirname(this.path)).then(() => 
        fs.writeFile(this.path, JSON.stringify(data), err => {
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
            else rs(JSON.parse(data.toString()));
          });
        }
        else rs({});
      })
    });
  } 
}

export class SyncJsonFileAdapter implements SyncDatabaseAdapter {

  constructor(
    readonly path: string
  ) {}

  save(data: JSObject): void {
    mkdirsSync(path.dirname(this.path));
    fs.writeFileSync(this.path, JSON.stringify(data));
  }
  
  load(): JSObject {
    if(fs.existsSync(this.path)) return JSON.parse(fs.readFileSync(this.path).toString());
    return {};
  } 
}