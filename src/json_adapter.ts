import * as fs from 'fs';
import * as path from 'path';

import { DatabaseAdapter, JSObject, SyncDatabaseAdapter } from './database';
import { mkdirs, mkdirsSync } from './fs_help';





/**
 * JsonFileAdapter is an async adapter for working with Json Files
 * 
 * @author Nicolas Schmidt
 */
export class JsonFileAdapter implements DatabaseAdapter {


  /**
   * The settings for the JsonFileAdapter: <br/>
   *   beautify - should the generated json be beautified (default: false)<br/>
   *   beautify_space - the space to indent the json with (default: 2)
   * 
   * @author Nicolas Schmidt
   * 
   * @see JsonFileAdapter - 👩‍👦 the parent class
   */
  readonly settings: JsonAdapterSettings;


  /**
   * The constructor for JsonFileAdapter
   * 
   * @param path the path to a json file to save to and load from
   * @param settings The settings for the JsonFileAdapter:<br/>
   *   beautify - should the generated json be beautified (default: false)<br/>
   *   beautify_space - the space to indent the json with (default: 2)
   * 
   * @author Nicolas Schmidt
   * 
   * @see JsonFileAdapter - 👩‍👦 the parent class
   */
  constructor(

    /**
     * The path of the JsonFileAdapter
     * 
     * @author Nicolas Schmidt
     * 
     * @see JsonFileAdapter - 👩‍👦 the parent class
     */
    readonly path: string,

    settings: JsonAdapterSettingsInput = {},

  ) {
    this.settings = createDefaultSettings(settings);
  }


  /**
   * Saves the given data to the file the adapter refers to
   * 
   * @param data The data to save
   * @returns ⌛ Promise (Ready when saved) >> ⛔ void
   * 
   * @author Nicolas Schmidt
   * 
   * @see JsonFileAdapter - 👩‍👦 the parent class
   */
  save(data: JSObject): Promise<void> {
    return new Promise((rs, rj) => 
      mkdirs(path.dirname(this.path)).then(() => 
        fs.writeFile(this.path, generateJson(data, this.settings), err => {
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
   * @see JsonFileAdapter - 👩‍👦 the parent class
   */
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





/**
 * SyncJsonFileAdapter is an sync adapter for working with Json Files
 * 
 * @author Nicolas Schmidt
 */
export class SyncJsonFileAdapter implements SyncDatabaseAdapter {


  /**
   * The settings for the SyncJsonFileAdapter: <br/>
   *   beautify - should the generated json be beautified (default: false)<br/>
   *   beautify_space - the space to indent the json with (default: 2)
   * 
   * @author Nicolas Schmidt
   * 
   * @see SyncJsonFileAdapter - 👩‍👦 the parent class
   */
  readonly settings: JsonAdapterSettings;


  /**
   * The constructor for SyncJsonFileAdapter
   * 
   * @param path the path to a json file to save to and load from
   * @param settings The settings for the SyncJsonFileAdapter:<br/>
   *   beautify - should the generated json be beautified (default: false)<br/>
   *   beautify_space - the space to indent the json with (default: 2)
   * 
   * @author Nicolas Schmidt
   * 
   * @see SyncJsonFileAdapter - 👩‍👦 the parent class
   */
  constructor(

    /**
     * The path of the SyncJsonFileAdapter
     * 
     * @author Nicolas Schmidt
     * 
     * @see SyncJsonFileAdapter - 👩‍👦 the parent class
     */
    readonly path: string,

    settings: JsonAdapterSettingsInput = {},

  ) {
    this.settings = createDefaultSettings(settings);
  }


  /**
   * Saves the given data to the file the adapter refers to
   * 
   * @param data The data to save
   * @returns ⌛ Promise (Ready when saved) >> ⛔ void
   * 
   * @author Nicolas Schmidt
   * 
   * @see SyncJsonFileAdapter - 👩‍👦 the parent class
   */
  save(data: JSObject): void {
    mkdirsSync(path.dirname(this.path));
    fs.writeFileSync(this.path, generateJson(data, this.settings));
  }
  

  /**
   * Loads data from the file the adapter refers to
   * 
   * @returns ⌛ Promise (Ready when saved) >> Object
   * 
   * @author Nicolas Schmidt
   * 
   * @see SyncJsonFileAdapter - 👩‍👦 the parent class
   */
  load(): JSObject {
    if(fs.existsSync(this.path)) return JSON.parse(fs.readFileSync(this.path).toString());
    return {};
  } 
}





/**
 * The settings for JsonFileAdapter or SyncJsonFileAdapter:
 *   beautify - should the generated json be beautified (default: false)
 *   beautify_space - the space to indent the json with (default: 2)
 * 
 * This is the input version of the interface. It get's applied all default values when passed to a JsonFileAdapter or SyncJsonFileAdapter
 * 
 * @author Nicolas Schmidt
 * 
 * @see JsonFileAdapter
 * @see SyncJsonFileAdapter
 */
export interface JsonAdapterSettingsInput { 
  beautify?: false, 
  beautify_space?: number
}


/**
 * The settings for JsonFileAdapter or SyncJsonFileAdapter:
 *   beautify - should the generated json be beautified (default: false)
 *   beautify_space - the space to indent the json with (default: 2)
 * 
 * @author Nicolas Schmidt
 * 
 * @see JsonFileAdapter
 * @see SyncJsonFileAdapter
 */
export interface JsonAdapterSettings { 
  beautify: false, 
  beautify_space: number
}





// ----------------------------------------------------------
// Purely functional, not exported, just used by the adapters

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