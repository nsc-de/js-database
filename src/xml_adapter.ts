import * as fs from 'fs';
import * as path from 'path';

import { DatabaseAdapter, JSObject, SyncDatabaseAdapter } from './database';
import { mkdirs, mkdirsSync } from './fs_help';


// xml-js import. Throw an error if it is not installed
let xml: typeof import("xml-js");
try {
  xml = require('xml-js');
} catch(e) {
  let err = new Error("You should have installed xml-js if you want to use the xml-adapter");
  err.stack += '\nCaused by: '+ err.message + err.stack;
  throw e;
}





/**
 * XMLFileAdapter is an async adapter for working with XML Files
 * 
 * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
 */
export class XMLFileAdapter implements DatabaseAdapter {
  settings: XMLAdapterSettings;


  /**
   * The constructor for [XMLFileAdapter](https://nsc-de.github.io/js-database/classes/_xml_adapter_.xmlfileadapter.html)
   * 
   * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
   * @param path the path to a xml file to save to and load from
   * 
   * @see [XMLFileAdapter](https://nsc-de.github.io/js-database/classes/_xml_adapter_.xmlfileadapter.html) - 👩‍👦 the parent class
   */
  constructor(
    readonly path: string,
    settings: XMLAdapterSettingsInput = {},
  ) {
    this.settings = applyDefaults(settings);
  }


  /**
   * Saves the given data to the file the adapter refers to
   * 
   * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
   * @param data The data to save
   * @returns ⌛ Promise (Ready when saved) >> ⛔ void
   * 
   * @see [XMLFileAdapter](https://nsc-de.github.io/js-database/classes/_xml_adapter_.xmlfileadapter.html) - 👩‍👦 the parent class
   */
  save(data: JSObject): Promise<void> {
    return new Promise((rs, rj) => 
      mkdirs(path.dirname(this.path)).then(() => 
        fs.writeFile(this.path, generateXML(data, this.settings), err => {
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
   * @see [XMLFileAdapter](https://nsc-de.github.io/js-database/classes/_xml_adapter_.xmlfileadapter.html) - 👩‍👦 the parent class
   */
  load(): Promise<JSObject> {
    return new Promise((rs, rj) => {
      fs.exists(this.path, exists => {
        if(exists) {
          fs.readFile(this.path, (err, data) => {
            if(err) rj(err);
            else rs(parseXML(data.toString()));
          });
        }
        else rs({});
      })
    });
  }
}





/**
 * [SyncXMLFileAdapter](https://nsc-de.github.io/js-database/classes/_xml_adapter_.syncxmlfileadapter.html) is an sync adapter for working with XML Files
 * 
 * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
 */
export class SyncXMLFileAdapter implements SyncDatabaseAdapter {
  settings: XMLAdapterSettings;


  /**
   * The constructor for [SyncXMLFileAdapter](https://nsc-de.github.io/js-database/classes/_xml_adapter_.syncxmlfileadapter.html)
   * 
   * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
   * @param path the path to a xml file to save to and load from
   * 
   * @see [SyncXMLFileAdapter](https://nsc-de.github.io/js-database/classes/_xml_adapter_.syncxmlfileadapter.html) - 👩‍👦 the parent class
   */
  constructor(
    readonly path: string,
    settings: XMLAdapterSettingsInput = {},
  ) {
    this.settings = applyDefaults(settings);
  }


  /**
   * Saves the given data to the file the adapter refers to
   * 
   * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
   * @param data The data to save
   * @returns ⌛ Promise (Ready when saved) >> ⛔ void
   * 
   * @see [SyncXMLFileAdapter](https://nsc-de.github.io/js-database/classes/_xml_adapter_.syncxmlfileadapter.html) - 👩‍👦 the parent class
   */
  save(data: JSObject): void {
    mkdirsSync(path.dirname(this.path));
    fs.writeFileSync(this.path, generateXML(data, this.settings));
  }


  /**
   * Loads data from the file the adapter refers to
   * 
   * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
   * @returns ⌛ Promise (Ready when saved) >> Object
   * 
   * @see [SyncXMLFileAdapter](https://nsc-de.github.io/js-database/classes/_xml_adapter_.syncxmlfileadapter.html) - 👩‍👦 the parent class
   */
  load(): JSObject {
    if(fs.existsSync(this.path)) return parseXML(fs.readFileSync(this.path).toString());
    return {};
  } 
}





/**
 * The settings for [XMLFileAdapter](https://nsc-de.github.io/js-database/classes/_xml_adapter_.xmlfileadapter.html) or 
 * [SyncXMLFileAdapter](https://nsc-de.github.io/js-database/classes/_xml_adapter_.syncxmlfileadapter.html):
 *   beautify - should the generated xml be beautified (default: true)
 *   beautify_space - the space to indent the xml with (default: 2)
 * 
 * This is the input version of the interface. It gets applied all default values when passed to a 
 * [XMLFileAdapter](https://nsc-de.github.io/js-database/classes/_xml_adapter_.xmlfileadapter.html) or 
 * [SyncXMLFileAdapter](https://nsc-de.github.io/js-database/classes/_xml_adapter_.syncxmlfileadapter.html)
 * 
 * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
 * 
 * @see [XMLFileAdapter](https://nsc-de.github.io/js-database/classes/_xml_adapter_.xmlfileadapter.html)
 * @see [SyncXMLFileAdapter](https://nsc-de.github.io/js-database/classes/_xml_adapter_.syncxmlfileadapter.html)
 */
export interface XMLAdapterSettingsInput {
  /**
   * Should the generated xml be beautified?
   * 
   * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
   * 
   * @see [XMLAdapterSettingsInput](https://nsc-de.github.io/js-database/interfaces/_xml_adapter_.xmladaptersettingsinput.html) - 👩‍👦 the parent interface
   */
  beautify?: boolean;

  /**
   * How many spaces should be used to indent the generated xml?
   * 
   * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
   * 
   * @see [XMLAdapterSettingsInput](https://nsc-de.github.io/js-database/interfaces/_xml_adapter_.xmladaptersettingsinput.html) - 👩‍👦 the parent interface
   */
  beautify_space?: number;

  /**
   * Should empty tags be generated as `<element></element>` instead of `<element/>`?
   * 
   * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
   * 
   * @see [XMLAdapterSettingsInput](https://nsc-de.github.io/js-database/interfaces/_xml_adapter_.xmladaptersettingsinput.html) - 👩‍👦 the parent interface
   */
  fullTagEmptyElement?: boolean;

  /**
   * Should attributes be split over multiple lines and indented when necessary?
   * 
   * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
   * 
   * @see [XMLAdapterSettingsInput](https://nsc-de.github.io/js-database/interfaces/_xml_adapter_.xmladaptersettingsinput.html) - 👩‍👦 the parent interface
   */
  indentAttributes?: boolean;
}





/**
 * The settings for [XMLFileAdapter](https://nsc-de.github.io/js-database/classes/_xml_adapter_.xmlfileadapter.html) or 
 * [SyncXMLFileAdapter](https://nsc-de.github.io/js-database/classes/_xml_adapter_.syncxmlfileadapter.html):
 *   beautify - should the generated xml be beautified (default: true)
 *   beautify_space - the space to indent the xml with (default: 2)
 * 
 * This is the input version of the interface. It gets applied all default values when passed to a 
 * [XMLFileAdapter](https://nsc-de.github.io/js-database/classes/_xml_adapter_.xmlfileadapter.html) or 
 * [SyncXMLFileAdapter](https://nsc-de.github.io/js-database/classes/_xml_adapter_.syncxmlfileadapter.html)
 * 
 * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
 * 
 * @see [XMLFileAdapter](https://nsc-de.github.io/js-database/classes/_xml_adapter_.xmlfileadapter.html)
 * @see [SyncXMLFileAdapter](https://nsc-de.github.io/js-database/classes/_xml_adapter_.syncxmlfileadapter.html)
 */
export interface XMLAdapterSettings {
  /**
   * Should the generated xml be beautified?
   * 
   * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
   * 
   * @see [XMLAdapterSettingsInput](https://nsc-de.github.io/js-database/interfaces/_xml_adapter_.xmladaptersettingsinput.html) - 👩‍👦 the parent interface
   */
  beautify: boolean;

  /**
   * How many spaces should be used to indent the generated xml?
   * 
   * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
   * 
   * @see [XMLAdapterSettingsInput](https://nsc-de.github.io/js-database/interfaces/_xml_adapter_.xmladaptersettingsinput.html) - 👩‍👦 the parent interface
   */
  beautify_space: number;

  /**
   * Should empty tags be generated as `<element></element>` instead of `<element/>`?
   * 
   * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
   * 
   * @see [XMLAdapterSettingsInput](https://nsc-de.github.io/js-database/interfaces/_xml_adapter_.xmladaptersettingsinput.html) - 👩‍👦 the parent interface
   */
  fullTagEmptyElement: boolean;

  /**
   * Should attributes be split over multiple lines and indented when necessary?
   * 
   * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
   * 
   * @see [XMLAdapterSettingsInput](https://nsc-de.github.io/js-database/interfaces/_xml_adapter_.xmladaptersettingsinput.html) - 👩‍👦 the parent interface
   */
  indentAttributes: boolean;
}


// *************************************************
// Intern functions (not exported)


// Simplifies the results of parsed the xml
function simplify(arg: any): any {
  if(Array.isArray(arg)) return arg.map(e => simplify(arg));
  if(typeof arg == "object") {
    if(arg._text) return arg._text;
    else {
      const keys = Object.keys(arg);
      for(let i = 0; i < keys.length; i++) 
        arg[keys[i]] = simplify(arg[keys[i]]);
      return arg;
    }
  }
  return arg;
}

// Applies defaults to the xml adapter settings
function applyDefaults(settings: XMLAdapterSettingsInput): XMLAdapterSettings {
  return {
    beautify: settings.beautify || true,
    beautify_space: settings.beautify_space || 2,
    fullTagEmptyElement: settings.fullTagEmptyElement || false,
    indentAttributes: settings.indentAttributes || false
  };
}

// Parses xml
function parseXML(data: string): any {
  return simplify(xml.xml2js(data, {compact: true}));
}

// Generates xml using given settings
function generateXML(data: any, settings: XMLAdapterSettings): string {
  const args: JSObject = {
    fullTagEmptyElement: settings.fullTagEmptyElement,
    indentAttributes: settings.indentAttributes,
    compact: true,
  };

  args.space = settings.beautify ? settings.beautify_space : 0;
  return xml.js2xml(data, args);
}