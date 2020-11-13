import { DatabaseArray, DatabaseArrayType, DatabaseInsertable, DatabaseObject, DatabaseObjectType, DatabaseValue, DatabaseValueAble, JSObject } from './database';


/**
 * A [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.DatabaseObjectProxy.html) is the database-representation of an object.
 *
 * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
 *
 * @see [DatabaseObjectProxy](https://nsc-de.github.io/js-database/classes/_database_.DatabaseObjectProxy.html).[data](https://nsc-de.github.io/js-database/classes/_database_.DatabaseObjectProxy.html#data) - the data of the array
 * @see [DatabaseObjectProxy](https://nsc-de.github.io/js-database/classes/_database_.DatabaseObjectProxy.html).[length](https://nsc-de.github.io/js-database/classes/_database_.DatabaseObjectProxy.html#length) - the array length
 * @see [DatabaseObjectProxy](https://nsc-de.github.io/js-database/classes/_database_.DatabaseObjectProxy.html).[set()](https://nsc-de.github.io/js-database/classes/_database_.DatabaseObjectProxy.html#set) - sets a value from the [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.DatabaseObjectProxy.html)
 * @see [DatabaseObjectProxy](https://nsc-de.github.io/js-database/classes/_database_.DatabaseObjectProxy.html).[setDefault()](https://nsc-de.github.io/js-database/classes/_database_.DatabaseObjectProxy.html#setDefault) - sets a default value from the [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.DatabaseObjectProxy.html)
 * @see [DatabaseObjectProxy](https://nsc-de.github.io/js-database/classes/_database_.DatabaseObjectProxy.html).[setDefaults()](https://nsc-de.github.io/js-database/classes/_database_.DatabaseObjectProxy.html#setDefaults) - sets defaults for the [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.DatabaseObjectProxy.html)
 * @see [DatabaseObjectProxy](https://nsc-de.github.io/js-database/classes/_database_.DatabaseObjectProxy.html).[get()](https://nsc-de.github.io/js-database/classes/_database_.DatabaseObjectProxy.html#get) - gets a value from the [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.DatabaseObjectProxy.html)
 * @see [DatabaseObjectProxy](https://nsc-de.github.io/js-database/classes/_database_.DatabaseObjectProxy.html).[getNormal()](https://nsc-de.github.io/js-database/classes/_database_.DatabaseObjectProxy.html#getNormal) - gets a value from the [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.DatabaseObjectProxy.html) and normalizes it
 * @see [DatabaseObjectProxy](https://nsc-de.github.io/js-database/classes/_database_.DatabaseObjectProxy.html).[update()](https://nsc-de.github.io/js-database/classes/_database_.DatabaseObjectProxy.html#update) - updates a value from the [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.DatabaseObjectProxy.html)
 * @see [DatabaseObjectProxy](https://nsc-de.github.io/js-database/classes/_database_.DatabaseObjectProxy.html).[contains()](https://nsc-de.github.io/js-database/classes/_database_.DatabaseObjectProxy.html#contains) - checks if the [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.DatabaseObjectProxy.html) contains a value
 * @see [DatabaseObjectProxy](https://nsc-de.github.io/js-database/classes/_database_.DatabaseObjectProxy.html).[generateId()](https://nsc-de.github.io/js-database/classes/_database_.DatabaseObjectProxy.html#contains) - Generates an id using a namespace
 */
export interface DatabaseObjectProxy extends DatabaseObjectType {
  
  /**
   * The data of the DatabaseObject
   *
   * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
   *
   * @see [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.DatabaseObjectProxy.html) - 👩‍👦 the parent class
   * @see [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.DatabaseObjectProxy.html)._data - the storage for the data
   */
  data: JSObject;

  /**
   * Returns the length of the object
   *
   * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
   *
   * @see [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearrayproxy.html) - 👩‍👦 the parent class
   * @see [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearrayproxy.html).data - the data of the array
   */
  readonly length: number;

  /**
   * Sets a value from the DatabaseObject.
   *
   * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
   * @param key the path to apply the value to
   * @param value the value to apply to the given path
   * @returns the DatabaseObject itself, so you can chain operations like that
   *
   * @see [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.DatabaseObjectProxy.html) - 👩‍👦 the parent class
   */
  set(key: string | Array<string | number>, value: DatabaseInsertable): this;

  /**
   * Sets a default value from the [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.DatabaseObjectProxy.html).
   *
   * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
   * @param key the path to apply the value to
   * @param value the value to apply to the given path
   * @returns the [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.DatabaseObjectProxy.html) itself, so you can chain operations like that
   *
   * @see [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.DatabaseObjectProxy.html) - 👩‍👦 the parent class
   */
  setDefault(key: string | Array<string | number>, value: DatabaseInsertable): this;

  /**
   * Sets default values for the DatabaseObject.
   *
   * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
   * @param defaults an object containing all the default values
   * @returns the [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.DatabaseObjectProxy.html) itself, so you can chain operations like that
   *
   * @see [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.DatabaseObjectProxy.html) - 👩‍👦 the parent class
   */
  setDefaults(defaults: JSObject): this;

  /**
   * Gets a value from the DatabaseObject.
   *
   * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
   * @param key the path to get
   * @returns the value at the position
   *
   * @see [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.DatabaseObjectProxy.html) - 👩‍👦 the parent class
   */
  get(key: string | Array<string | number>): DatabaseValue;

  /**
   * Gets a value from the [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.DatabaseObjectProxy.html) and normalizes it
   *
   * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
   * @param key the path to get
   * @returns the normalized value at the position
   *
   * @see [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.DatabaseObjectProxy.html) - 👩‍👦 the parent class
   */
  getNormal(key: string | Array<string | number>): DatabaseValueAble;

  /**
   * Updates a value from the [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.DatabaseObjectProxy.html).
   *
   * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
   * @param key the path to update
   * @param update the function to update the value
   * @returns the [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.DatabaseObjectProxy.html) itself, so you can chain operations like that
   *
   * @see [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.DatabaseObjectProxy.html) - 👩‍👦 the parent class
   */
  update(key: string | Array<string | number>, update: (e: DatabaseValue) => DatabaseInsertable): this;

  /**
   * Checks if the [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.DatabaseObjectProxy.html) contains a value
   *
   * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
   * @param key the path to apply the value to
   * @returns the value at the position of the position
   *
   * @see [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.DatabaseObjectProxy.html) - 👩‍👦 the parent class
   */
  contains(key: string | Array<string | number>): boolean;

  /**
   * Generates an using a namespace
   *
   * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
   * @param name the name to generate a namespace from
   * @returns the generated id
   *
   * @see [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.DatabaseObjectProxy.html) - 👩‍👦 the parent class
   */
  generateId(name: string): number;

  [key: string]:  DatabaseProxyValue | Function | JSObject;
}

/**
 * A [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearrayproxy.html) is the database-representation of an array.
 *
 * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
 *
 * @see [DatabaseArrayProxy](https://nsc-de.github.io/js-database/classes/_database_.databasearrayproxy.html).[data](https://nsc-de.github.io/js-database/classes/_database_.databasearrayproxy.html#data) - the data of the array
 * @see [DatabaseArrayProxy](https://nsc-de.github.io/js-database/classes/_database_.databasearrayproxy.html).[length](https://nsc-de.github.io/js-database/classes/_database_.databasearrayproxy.html#length) - the array length
 * @see [DatabaseArrayProxy](https://nsc-de.github.io/js-database/classes/_database_.databasearrayproxy.html).[constructor()](https://nsc-de.github.io/js-database/classes/_database_.databasearrayproxy.html#constructor) - the constructor
 * @see [DatabaseArrayProxy](https://nsc-de.github.io/js-database/classes/_database_.databasearrayproxy.html).[set()](https://nsc-de.github.io/js-database/classes/_database_.databasearrayproxy.html#set) - sets a value from the [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearrayproxy.html)
 * @see [DatabaseArrayProxy](https://nsc-de.github.io/js-database/classes/_database_.databasearrayproxy.html).[setDefault()](https://nsc-de.github.io/js-database/classes/_database_.databasearrayproxy.html#setDefault) - sets a default value from the [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearrayproxy.html)
 * @see [DatabaseArrayProxy](https://nsc-de.github.io/js-database/classes/_database_.databasearrayproxy.html).[get()](https://nsc-de.github.io/js-database/classes/_database_.databasearrayproxy.html#get) - gets a value from the [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearrayproxy.html)
 * @see [DatabaseArrayProxy](https://nsc-de.github.io/js-database/classes/_database_.databasearrayproxy.html).[getNormal()](https://nsc-de.github.io/js-database/classes/_database_.databasearrayproxy.html#getNormal) - gets a value from the [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearrayproxy.html) and normalizes it
 * @see [DatabaseArrayProxy](https://nsc-de.github.io/js-database/classes/_database_.databasearrayproxy.html).[update()](https://nsc-de.github.io/js-database/classes/_database_.databasearrayproxy.html#update) - updates a value from the [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearrayproxy.html)
 * @see [DatabaseArrayProxy](https://nsc-de.github.io/js-database/classes/_database_.databasearrayproxy.html).[contains()](https://nsc-de.github.io/js-database/classes/_database_.databasearrayproxy.html#contains) - checks if the [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearrayproxy.html) contains a value
 * @see [DatabaseArrayProxy](https://nsc-de.github.io/js-database/classes/_database_.databasearrayproxy.html).[push()](https://nsc-de.github.io/js-database/classes/_database_.databasearrayproxy.html#push) - push a value into the [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearrayproxy.html)
 */
export interface DatabaseArrayProxy {

  /**
   * The data of the [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearray.html)
   *
   * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
   *
   * @see [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearray.html) - 👩‍👦 the parent class
   * @see [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearray.html).[_data](https://nsc-de.github.io/js-database/classes/_database_.databasearray.html#_data) - the storage for the data
   */
  data: DatabaseInsertable[];

  /**
   * Returns the length of the array
   *
   * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
   *
   * @see [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearrayproxy.html) - 👩‍👦 the parent class
   * @see [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearrayproxy.html).[data](https://nsc-de.github.io/js-database/classes/_database_.databasearrayproxy.html#data) - the data of the array
   */
  readonly length: number;

  /**
   * Sets a value from the [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearrayproxy.html).
   *
   * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
   * @param key the path to apply the value to
   * @param value the value to apply to the given path
   * @returns the DatabaseArray itself, so you can chain operations like that
   *
   * @see [DatabaseArrayProxy](https://nsc-de.github.io/js-database/classes/_database_.databasearrayproxy.html) - 👩‍👦 the parent interface
   */
  set(key: number | string | Array<string | number>, value: DatabaseInsertable): this;

  /**
   * Sets a default value from the [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearrayproxy.html).
   *
   * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
   * @param key the path to apply the value to
   * @param value the value to apply to the given path
   * @returns the [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearrayproxy.html) itself, so you can chain operations like that
   *
   * @see [DatabaseArrayProxy](https://nsc-de.github.io/js-database/classes/_database_.databasearrayproxy.html) - 👩‍👦 the parent interface
   */
  setDefault(key: number | string | Array<string | number>, value: DatabaseInsertable): this;

  /**
   * Gets a value from the [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearrayproxy.html).
   *
   * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
   * @param key the path to get
   * @returns the value of the key
   *
   * @see [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearrayproxy.html) - 👩‍👦 the parent interface
   */
  get(key: number | string | Array<string | number>): DatabaseValue;

  /**
   * Gets a value from the [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearrayproxy.html) normalizes it
   *
   * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
   * @param key the path to get
   * @returns the value of the key
   *
   * @see [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearrayproxy.html) - 👩‍👦 the parent interface
   */
  getNormal(key: number | string | Array<string | number>): DatabaseValueAble;

  /**
   * Updates a value from the [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearray.html).
   *
   * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
   * @param key the path to update
   * @param update the funciton to update the value
   * @returns the [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearrayproxy.html) itself, so you can chain operations like that
   *
   * @see [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearrayproxy.html) - 👩‍👦 the parent interface
   */
  update(key: number | string | Array<string | number>, update: (e: DatabaseValue) => DatabaseInsertable): this;

  /**
   * Checks if the [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearrayproxy.html) contains a value
   *
   * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
   * @param key the path to check
   * @returns does the array contains the value
   *
   * @see [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearrayproxy.html) - 👩‍👦 the parent interface
   */
  contains(key: number | string | Array<string | number>): boolean;

  /**
   * Pushes a value into the [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearrayproxy.html)
   *
   * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
   * @param value the value to push into the array
   * @returns the [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearrayproxy.html) itself, so you can chain operations like that
   *
   * @see [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearrayproxy.html) - 👩‍👦 the parent interface
   */
  push(...values: DatabaseInsertable[]): this;

  [key: number]:  DatabaseProxyValue;
}





export function createProxy(obj : DatabaseObject) : DatabaseObjectProxy;
export function createProxy(obj : DatabaseArray) : DatabaseArrayProxy;
export function createProxy<T extends any>(obj : T) : T;
export function createProxy(obj : DatabaseObject | DatabaseArray | any) : DatabaseObjectProxy | DatabaseArrayProxy | any {

  if(typeof obj != "object" || (!(obj instanceof DatabaseArray || obj instanceof DatabaseObject))) return obj;
  if(obj instanceof DatabaseArray) return <DatabaseArrayProxy> new Proxy(obj, DatabaseArrayProxyHandler);
  else if(obj instanceof DatabaseObject) return <DatabaseObjectProxy> new Proxy(obj, DatabaseObjectProxyHandler);
  throw new Error("Error on creating proxy");

}





export const DatabaseObjectProxyHandler : ProxyHandler<DatabaseObjectType> = {

  get(target: DatabaseObjectType, path: string) {

    // @ts-ignore
    if(path in target) return target[path];
    if(target.contains(path)) return createProxy(target.get(path));

  },

  set(target: DatabaseObjectType, path : string, value) {

    // @ts-ignore
    if(path in target) target[path] = value;
    else target.set(path, value);
    return true;

  },
  
}





export const DatabaseArrayProxyHandler : ProxyHandler<DatabaseArrayType> = {

  get(target: DatabaseArrayType, path: number) {

    // @ts-ignore
    if(path in target) return target[path];
    if(target.contains(path)) return createProxy(target.get(path));

  },

  set(target: DatabaseArrayType, path: number, value) {
    
    // @ts-ignore
    if(path in target) target[path] = value;
    else target.set(path, value);
    return true;

  },
  
}

export type DatabaseProxyValue = DatabaseObjectProxy | DatabaseArrayProxy | number | string | boolean | null | undefined;