import * as fs from 'fs';
import * as path from 'path';

import { DatabaseAdapter, JSObject, SyncDatabaseAdapter } from './database';
import { mkdirs, mkdirsSync } from './fs_help';





/**
 * JsonFileAdapter is an async adapter for working with Json Files
 * 
 * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
 */
export class JsonFileAdapter implements DatabaseAdapter {


  /**
   * The settings for the [JsonFileAdapter](https://nsc-de.github.io/js-database/classes/_json_adapter_.jsonfileadapter.html): <br/>
   *   beautify - should the generated json be beautified (default: false)<br/>
   *   beautify_space - the space to indent the json with (default: 2)
   * 
   * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
   * 
   * @see [JsonFileAdapter](https://nsc-de.github.io/js-database/classes/_json_adapter_.jsonfileadapter.html) - 👩‍👦 the parent class
   */
  readonly settings: JsonAdapterSettings;


  /**
   * The constructor for [JsonFileAdapter](https://nsc-de.github.io/js-database/classes/_json_adapter_.jsonfileadapter.html)
   * 
   * @param path the path to a json file to save to and load from
   * @param settings The settings for the [JsonFileAdapter](https://nsc-de.github.io/js-database/classes/_json_adapter_.jsonfileadapter.html):<br/>
   *   beautify - should the generated json be beautified (default: false)<br/>
   *   beautify_space - the space to indent the json with (default: 2)
   * 
   * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
   * 
   * @see [JsonFileAdapter](https://nsc-de.github.io/js-database/classes/_json_adapter_.jsonfileadapter.html) - 👩‍👦 the parent class
   */
  constructor(

    /**
     * The path of the [JsonFileAdapter](https://nsc-de.github.io/js-database/classes/_json_adapter_.jsonfileadapter.html)
     * 
     * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
     * 
     * @see [JsonFileAdapter](https://nsc-de.github.io/js-database/classes/_json_adapter_.jsonfileadapter.html) - 👩‍👦 the parent class
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
   * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
   * 
   * @see [JsonFileAdapter](https://nsc-de.github.io/js-database/classes/_json_adapter_.jsonfileadapter.html) - 👩‍👦 the parent class
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
   * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
   * 
   * @see [JsonFileAdapter](https://nsc-de.github.io/js-database/classes/_json_adapter_.jsonfileadapter.html) - 👩‍👦 the parent class
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
 * [SyncJsonFileAdapter](https://nsc-de.github.io/js-database/classes/_json_adapter_.syncjsonfileadapter.html) is an sync adapter for working with Json Files
 * 
 * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
 */
export class SyncJsonFileAdapter implements SyncDatabaseAdapter {


  /**
   * The settings for the [SyncJsonFileAdapter](https://nsc-de.github.io/js-database/classes/_json_adapter_.syncjsonfileadapter.html): <br/>
   *   beautify - should the generated json be beautified (default: false)<br/>
   *   beautify_space - the space to indent the json with (default: 2)
   * 
   * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
   * 
   * @see [SyncJsonFileAdapter](https://nsc-de.github.io/js-database/classes/_json_adapter_.syncjsonfileadapter.html) - 👩‍👦 the parent class
   */
  readonly settings: JsonAdapterSettings;


  /**
   * The constructor for [SyncJsonFileAdapter](https://nsc-de.github.io/js-database/classes/_json_adapter_.syncjsonfileadapter.html)
   * 
   * @param path the path to a json file to save to and load from
   * @param settings The settings for the [SyncJsonFileAdapter](https://nsc-de.github.io/js-database/classes/_json_adapter_.syncjsonfileadapter.html):<br/>
   *   beautify - should the generated json be beautified (default: false)<br/>
   *   beautify_space - the space to indent the json with (default: 2)
   * 
   * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
   * 
   * @see [SyncJsonFileAdapter](https://nsc-de.github.io/js-database/classes/_json_adapter_.syncjsonfileadapter.html) - 👩‍👦 the parent class
   */
  constructor(

    /**
     * The path of the [SyncJsonFileAdapter](https://nsc-de.github.io/js-database/classes/_json_adapter_.syncjsonfileadapter.html)
     * 
     * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
     * 
     * @see [SyncJsonFileAdapter](https://nsc-de.github.io/js-database/classes/_json_adapter_.syncjsonfileadapter.html) - 👩‍👦 the parent class
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
   * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
   * 
   * @see [SyncJsonFileAdapter](https://nsc-de.github.io/js-database/classes/_json_adapter_.syncjsonfileadapter.html) - 👩‍👦 the parent class
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
   * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
   * 
   * @see [SyncJsonFileAdapter](https://nsc-de.github.io/js-database/classes/_json_adapter_.syncjsonfileadapter.html) - 👩‍👦 the parent class
   */
  load(): JSObject {
    if(fs.existsSync(this.path)) return JSON.parse(fs.readFileSync(this.path).toString());
    return {};
  } 
}





/**
 * The settings for [JsonFileAdapter](https://nsc-de.github.io/js-database/classes/_json_adapter_.jsonfileadapter.html) or 
 * [SyncJsonFileAdapter](https://nsc-de.github.io/js-database/classes/_json_adapter_.syncjsonfileadapter.html):
 *   beautify - should the generated json be beautified (default: false)
 *   beautify_space - the space to indent the json with (default: 2)
 * 
 * This is the input version of the interface. It get's applied all default values when passed to a 
 * [JsonFileAdapter](https://nsc-de.github.io/js-database/classes/_json_adapter_.jsonfileadapter.html) or 
 * [SyncJsonFileAdapter](https://nsc-de.github.io/js-database/classes/_json_adapter_.syncjsonfileadapter.html)
 * 
 * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
 * 
 * @see [JsonFileAdapter](https://nsc-de.github.io/js-database/classes/_json_adapter_.jsonfileadapter.html)
 * @see [SyncJsonFileAdapter](https://nsc-de.github.io/js-database/classes/_json_adapter_.syncjsonfileadapter.html)
 */
export interface JsonAdapterSettingsInput {
  /**
   * Should the generated json be beautified?
   * 
   * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
   * 
   * @see [JsonAdapterSettingsInput](https://nsc-de.github.io/js-database/interfaces/_database_.jsonadaptersettingsinput.html) - 👩‍👦 the parent interface
   */
  beautify?: false,

  /**
   * How many spaces should be used to indent the generated json
   * 
   * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
   * 
   * @see [JsonAdapterSettingsInput](https://nsc-de.github.io/js-database/interfaces/_database_.jsonadaptersettingsinput.html) - 👩‍👦 the parent interface
   */
  beautify_space?: number
}


/**
 * The settings for [JsonFileAdapter](https://nsc-de.github.io/js-database/classes/_json_adapter_.jsonfileadapter.html) or 
 * [SyncJsonFileAdapter](https://nsc-de.github.io/js-database/classes/_json_adapter_.syncjsonfileadapter.html):
 *   beautify - should the generated json be beautified (default: false)
 *   beautify_space - the space to indent the json with (default: 2)
 * 
 * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
 * 
 * @see [JsonFileAdapter](https://nsc-de.github.io/js-database/classes/_json_adapter_.jsonfileadapter.html)
 * @see [SyncJsonFileAdapter](https://nsc-de.github.io/js-database/classes/_json_adapter_.syncjsonfileadapter.html)
 */
export interface JsonAdapterSettings {
  /**
   * Should the generated json be beautified?
   * 
   * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
   * 
   * @see [JsonAdapterSettings](https://nsc-de.github.io/js-database/interfaces/_database_.jsonadaptersettings.html) - 👩‍👦 the parent interface
   */
  beautify: false,

  /**
   * How many spaces should be used to indent the generated json
   * 
   * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
   * 
   * @see [JsonAdapterSettings](https://nsc-de.github.io/js-database/interfaces/_database_.jsonadaptersettings.html) - 👩‍👦 the parent interface
   */
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