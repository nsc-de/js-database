import * as fs from 'fs';
import * as path from 'path';

import { DatabaseAdapter, JSObject, SyncDatabaseAdapter } from './database';
import { mkdirs, mkdirsSync } from './fs_help';

export class JsonFileAdapter implements DatabaseAdapter {

  readonly settings: JsonAdapterSettings;

  constructor(
    readonly path: string,
    settings: JsonAdapterSettingsInput = {},
  ) {
    this.settings = createDefaultSettings(settings);
  }

  save(data: JSObject): Promise<void> {
    return new Promise((rs, rj) => 
      mkdirs(path.dirname(this.path)).then(() => 
        fs.writeFile(this.path, generateJson(data, this.settings), err => {
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

  readonly settings: JsonAdapterSettings;

  constructor(
    readonly path: string,
    settings: JsonAdapterSettingsInput = {},
  ) {
    this.settings = createDefaultSettings(settings);
  }

  save(data: JSObject): void {
    mkdirsSync(path.dirname(this.path));
    fs.writeFileSync(this.path, generateJson(data, this.settings));
  }
  
  load(): JSObject {
    if(fs.existsSync(this.path)) return JSON.parse(fs.readFileSync(this.path).toString());
    return {};
  } 
}

function generateJson(object: any, settings: JsonAdapterSettings): string {
  return settings.beautify ? 
    JSON.stringify(object, null, settings.beautify_space) : 
    JSON.stringify(object)
}

function createDefaultSettings(settings: JsonAdapterSettingsInput): JsonAdapterSettings {

  settings.beautify = settings.beautify || false;
  settings.beautify_space = settings.beautify_space || 2;

  return <JsonAdapterSettings> settings;

}

export interface JsonAdapterSettingsInput { 
  beautify?: false, 
  beautify_space?: 2
}

export interface JsonAdapterSettings { 
  beautify: false, 
  beautify_space: 2
}