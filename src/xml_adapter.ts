// TODO Rearange XML to match the normal style
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


  /**
   * The constructor for [XMLFileAdapter](https://nsc-de.github.io/js-database/classes/_xml_adapter_.xmlfileadapter.html)
   * 
   * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
   * @param path the path to a xml file to save to and load from
   * 
   * @see [XMLFileAdapter](https://nsc-de.github.io/js-database/classes/_xml_adapter_.xmlfileadapter.html) - 👩‍👦 the parent class
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
   * @see [XMLFileAdapter](https://nsc-de.github.io/js-database/classes/_xml_adapter_.xmlfileadapter.html) - 👩‍👦 the parent class
   */
  save(data: JSObject): Promise<void> {
    return new Promise((rs, rj) => 
      mkdirs(path.dirname(this.path)).then(() => 
        fs.writeFile(this.path, xmlify(xml.js2xml(data, {compact: true})), err => {
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
            else rs(simplify(xml.xml2js(data.toString(), {compact: true})));
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


  /**
   * The constructor for [SyncXMLFileAdapter](https://nsc-de.github.io/js-database/classes/_xml_adapter_.syncxmlfileadapter.html)
   * 
   * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
   * @param path the path to a xml file to save to and load from
   * 
   * @see [SyncXMLFileAdapter](https://nsc-de.github.io/js-database/classes/_xml_adapter_.syncxmlfileadapter.html) - 👩‍👦 the parent class
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
   * @see [SyncXMLFileAdapter](https://nsc-de.github.io/js-database/classes/_xml_adapter_.syncxmlfileadapter.html) - 👩‍👦 the parent class
   */
  save(data: JSObject): void {
    mkdirsSync(path.dirname(this.path));
    fs.writeFileSync(this.path, xmlify(xml.js2xml(data, {compact: true})));
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
    if(fs.existsSync(this.path)) return simplify(xml.xml2js(fs.readFileSync(this.path).toString(), {compact: true}));
    return {};
  } 
}

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

function xmlify(arg: any): any { return arg /*
  if(Array.isArray(arg)) return arg.map(e => xmlify(arg));
  if(typeof arg == "object") {
    const keys = Object.keys(arg);
    for(let i = 0; i < keys.length; i++) 
      arg[keys[i]] = xmlify(arg[keys[i]]);
    return arg;
  }
  if(typeof arg == "string") return {"_text": arg};
  return arg;*/
}