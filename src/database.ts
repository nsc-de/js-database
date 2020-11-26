/**
 * This interface describes an adapter to load / save databases. It is required for the [SyncDatabase](https://nsc-de.github.io/js-database/classes/_database_.syncdatabase.html) class
 *
 * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
 *
 * @see [SyncDatabase](https://nsc-de.github.io/js-database/classes/_database_.syncdatabase.html) - The user of this interface
 * @see [SyncDatabaseAdapter.save()](https://nsc-de.github.io/js-database/interfaces/_database_.databaseadapter.html#save) - 💾 the save method of the [SyncDatabaseAdapter](https://nsc-de.github.io/js-database/interfaces/_database_.databaseadapter.html)
 * @see [SyncDatabaseAdapter.load()](https://nsc-de.github.io/js-database/interfaces/_database_.databaseadapter.html#load) - 💾 the load method of the [SyncDatabaseAdapter](https://nsc-de.github.io/js-database/interfaces/_database_.databaseadapter.html)
 */
export interface SyncDatabaseAdapter {

  /**
   * 💾 Saves the given data
   *
   * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
   * @param data 💾 the data to save
   *
   * @see [SyncDatabaseAdapter](https://nsc-de.github.io/js-database/interfaces/_database_.syncdatabaseadapter.html) - 👩‍👦 the parent interface
   * @see [SyncDatabaseAdapter.load()](https://nsc-de.github.io/js-database/interfaces/_database_.syncdatabaseadapter.html#load) - 💾 the load function
   */
  save(data: JSObject): void;

  /**
   * 💾 loads data
   *
   * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
   * @return 💾 loads the data
   *
   * @see [DatabaseAdapter](https://nsc-de.github.io/js-database/interfaces/_database_.databaseadapter.html) - 👩‍👦 the parent interface
   * @see [DatabaseAdapter.save()](https://nsc-de.github.io/js-database/interfaces/_database_.databaseadapter.html#save) - 💾 the save function
   */
  load(): JSObject;

}

/**
 * This interface describes an adapter to load / save databases. It is required for the [Database](https://nsc-de.github.io/js-database/classes/_database_.database.html) class
 *
 * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
 *
 * @see [Database](https://nsc-de.github.io/js-database/classes/_database_.database.html) - The user of this interface
 * @see [DatabaseAdapter.save()](https://nsc-de.github.io/js-database/interfaces/_database_.databaseadapter.html#save) - 💾 the save method of the [DatabaseAdapter](https://nsc-de.github.io/js-database/interfaces/_database_.databaseadapter.html)
 * @see [DatabaseAdapter.load()](https://nsc-de.github.io/js-database/interfaces/_database_.databaseadapter.html#load) - 💾 the load method of the [DatabaseAdapter](https://nsc-de.github.io/js-database/interfaces/_database_.databaseadapter.html)
 */
export interface DatabaseAdapter {

  /**
   * 💾 Saves the given data
   *
   * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
   * @param data 💾 the data to save
   * @returns ⌛ Promise (Ready when saved) >> ⛔ void
   *
   * @see [DatabaseAdapter](https://nsc-de.github.io/js-database/interfaces/_database_.databaseadapter.html) - 👩‍👦 the parent interface
   * @see [DatabaseAdapter.load()](https://nsc-de.github.io/js-database/interfaces/_database_.databaseadapter.html#load) - 💾 the load function
   */
  save(data: JSObject): Promise<void>;

  /**
   * 💾 loads the data
   *
   * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
   * @return ⌛ Promise (Ready when data is loaded) >> 💾 the data
   *
   * @see [DatabaseAdapter](https://nsc-de.github.io/js-database/interfaces/_database_.databaseadapter.html) - 👩‍👦 the parent interface
   * @see [DatabaseAdapter.save()](https://nsc-de.github.io/js-database/interfaces/_database_.databaseadapter.html#save) - 💾 the save function
   */
  load(): Promise<JSObject>;

}





/**
 * 🔨 Creates an [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearray.html) from a given array
 *
 * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
 * @param val 🏡 the value to create a database-value from
 * @returns 🔨 the [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearray.html) representation of the given array
 *
 * @see [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearray.html)
 * @see [createDatabaseValue()](https://nsc-de.github.io/js-database/modules/_database_.html#createdatabasevalue)
 */
export function createDatabaseValue(val : any[]) : DatabaseArray;

/**
 * 🔨 Creates an [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.databaseobject.html) from a given object
 *
 * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
 * @param val 🏡 the object to create a [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.databaseobject.html) from
 * @returns 🔨 the [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.databaseobject.html)-representation of the given object
 *
 * @see [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.databaseobject.html)
 * @see [createDatabaseValue()](https://nsc-de.github.io/js-database/modules/_database_.html#createdatabasevalue)
 */
export function createDatabaseValue(val : JSObject) : DatabaseObject;

/**
 * This function is not really useful. It gives just the input back.
 * It is just implemented that you don't get an error when you give
 * a [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.databaseobject.html) as argument.
 *
 * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
 * @deprecated ⛔ Using this function with that argument does nothing and just slows down your process
 * @param val 🏡 the value to create a database-value from
 * @returns ⛔ the same [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.databaseobject.html) that is given as input
 *
 * @see [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.databaseobject.html)
 * @see [createDatabaseValue()](https://nsc-de.github.io/js-database/modules/_database_.html#createdatabasevalue)
 */
export function createDatabaseValue(val : DatabaseObject) : DatabaseObject;

/**
 * This function is not really useful. It gives just the input back.
 * It is just implemented that you don't get an error when you give
 * a [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearray.html) as argument.
 *
 * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
 * @deprecated ⛔ Using this function with that argument does nothing and just slows down your process
 * @param val 📋 the value to create a database-value from
 * @returns ⛔ the same [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearray.html) that is given as input
 *
 * @see [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearray.html)
 * @see [createDatabaseValue()](https://nsc-de.github.io/js-database/modules/_database_.html#createdatabasevalue)
 */
export function createDatabaseValue(val : DatabaseArray) : DatabaseArray;

/**
 * This function is not really useful. It gives just the input back.
 * It is just implemented that you don't get an error when you give
 * a string as argument.
 *
 * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
 * @deprecated ⛔ Using this function with that argument does nothing and just slows down your process
 * @param val 📋 the value to create a database-value from
 * @returns ⛔ the same string that is given as input
 *
 * @see [createDatabaseValue()](https://nsc-de.github.io/js-database/modules/_database_.html#createdatabasevalue)
 */
export function createDatabaseValue(val : string) : string;

/**
 * This function is not really useful. It gives just the input back.
 * It is just implemented that you don't get an error when you give
 * a number as argument.
 *
 * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
 * @deprecated ⛔ Using this function with that argument does nothing and just slows down your process
 * @param val 1️⃣ the value to create a database-value from
 * @returns ⛔ the same number that is given as input
 *
 * @see [createDatabaseValue()](https://nsc-de.github.io/js-database/modules/_database_.html#createdatabasevalue)
 */
export function createDatabaseValue(val : number) : number;

/**
 * This function is not really useful. It gives just the input back.
 * It is just implemented that you don't get an error when you give
 * a boolean as argument.
 *
 * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
 * @deprecated ⛔ Using this function with that argument does nothing and just slows down your process
 * @param val ❓ the value to create a database-value from
 * @returns ⛔ the same boolean that is given as input
 *
 * @see [createDatabaseValue()](https://nsc-de.github.io/js-database/modules/_database_.html#createdatabasevalue)
 */
export function createDatabaseValue(val : boolean) : boolean;

/**
 * This function is not really useful. It gives just the input back.
 * It is just implemented that you don't get an error when you give
 * null as argument.
 *
 * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
 * @deprecated ⛔ Using this function with that argument does nothing and just slows down your process
 * @param val ❓ null
 * @returns ⛔ null
 *
 * @see [createDatabaseValue()](https://nsc-de.github.io/js-database/modules/_database_.html#createdatabasevalue)
 */
export function createDatabaseValue(val : null) : null;

/**
 * This function is not really useful. It gives just the input back.
 * It is just implemented that you don't get an error when you give
 * undefined as argument.
 *
 * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
 * @deprecated ⛔ Using this function with that argument does nothing and just slows down your process
 * @param val ❓ undefined
 * @returns ⛔ undefined
 *
 * @see [createDatabaseValue()](https://nsc-de.github.io/js-database/modules/_database_.html#createdatabasevalue)
 */
export function createDatabaseValue(val : undefined) : undefined;

/**
 * Creates a [DatabaseValue](https://nsc-de.github.io/js-database/modules/_database_.html#databasevalue) from a given value
 *
 * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
 * @param val 🏡 the value to create a database-value from
 * @returns the database-value
 *
 * @see [createDatabaseValue()](https://nsc-de.github.io/js-database/modules/_database_.html#createdatabasevalue)
 */
export function createDatabaseValue(val : DatabaseInsertable) : DatabaseValue;

/**
 * Implementation for the [DatabaseValue](https://nsc-de.github.io/js-database/modules/_database_.html#databasevalue) function
 *
 * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
 * @param val 🏡 the value to create a database-value from
 * @returns the database-value
 *
 * @see [createDatabaseValue()](https://nsc-de.github.io/js-database/modules/_database_.html#createdatabasevalue)
 */
export function createDatabaseValue(val : DatabaseInsertable) : DatabaseValue {
  if (val instanceof DatabaseObject || val instanceof DatabaseArray) return val;
  if (val instanceof Array) return new DatabaseArray(val);
  if (val instanceof Object) return new DatabaseObject(val);
  return val;
}





/**
 * 🔨 Creates a normal array from a given [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearray.html)
 *
 * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
 * @param val 📋 the [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearray.html) you want to convert back to a normal value
 * @returns 🔨 the simple array
 *
 * @see [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.databaseobject.html)
 * @see [getNormalValue()](https://nsc-de.github.io/js-database/modules/_database_.html#getnormalvalue)
 */
export function getNormalValue(val : DatabaseArray): any[];

/**
 * 🔨 Creates a normal object from a given [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.databaseobject.html)
 *
 * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
 * @param val 🏡 the [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.databaseobject.html) you want to convert back to a normal value
 * @returns 🔨 the simple object
 *
 * @see [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.databaseobject.html)
 * @see [getNormalValue()](https://nsc-de.github.io/js-database/modules/_database_.html#getnormalvalue)
 */
export function getNormalValue(val : DatabaseObject): JSObject;

/**
 * This function is not really useful. It gives just the input back.
 * It is just implemented that you don't get an error when you give
 * a array as argument.
 *
 * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
 * @deprecated ⛔ Using this function with that argument does nothing and just slows down your process
 * @param val 🏡 the array you want to convert back to a normal value
 * @returns ⛔ the same array that was given as input
 *
 * @see [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.databaseobject.html)
 * @see [getNormalValue()](https://nsc-de.github.io/js-database/modules/_database_.html#getnormalvalue)
 */
export function getNormalValue(val : any[]): any[];

/**
 * This function is not really useful. It gives just the input back.
 * It is just implemented that you don't get an error when you give
 * a object as argument.
 *
 * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
 * @deprecated ⛔ Using this function with that argument does nothing and just slows down your process
 * @param val 🏡 the object you want to convert back to a normal value
 * @returns ⛔ the same object that was given as input
 *
 * @see [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.databaseobject.html)
 * @see [getNormalValue()](https://nsc-de.github.io/js-database/modules/_database_.html#getnormalvalue)
 */
export function getNormalValue(val : JSObject): JSObject;

/**
 * This function is not really useful. It gives just the input back.
 * It is just implemented that you don't get an error when you give
 * a string as argument.
 *
 * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
 * @deprecated ⛔ Using this function with that argument does nothing and just slows down your process
 * @param val 📋 the string you want to convert back to a normal value
 * @returns ⛔ the same string that was given as input
 *
 * @see [getNormalValue()](https://nsc-de.github.io/js-database/modules/_database_.html#getnormalvalue)
 */
export function getNormalValue(val : string): string;

/**
 * This function is not really useful. It gives just the input back.
 * It is just implemented that you don't get an error when you give
 * a number as argument.
 *
 * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
 * @deprecated ⛔ Using this function with that argument does nothing and just slows down your process
 * @param val 1️⃣ the number you want to convert back to a normal value
 * @returns ⛔ the same number that was given as input
 *
 * @see [getNormalValue()](https://nsc-de.github.io/js-database/modules/_database_.html#getnormalvalue)
 */
export function getNormalValue(val : number): number;

/**
 * This function is not really useful. It gives just the input back.
 * It is just implemented that you don't get an error when you give
 * a boolean as argument.
 *
 * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
 * @deprecated ⛔ Using this function with that argument does nothing and just slows down your process
 * @param val ❓ the boolean you want to convert back to a normal value
 * @returns ⛔ the same boolean that was given as input
 *
 * @see [getNormalValue()](https://nsc-de.github.io/js-database/modules/_database_.html#getnormalvalue)
 */
export function getNormalValue(val : boolean): boolean;

/**
 * This function is not really useful. It gives just the input back.
 * It is just implemented that you don't get an error when you give
 * null as argument.
 *
 * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
 * @deprecated ⛔ Using this function with that argument does nothing and just slows down your process
 * @param val ❓ null
 * @returns ⛔ null
 *
 * @see [getNormalValue()](https://nsc-de.github.io/js-database/modules/_database_.html#getnormalvalue)
 */
export function getNormalValue(val : null): null;

/**
 * This function is not really useful. It gives just the input back.
 * It is just implemented that you don't get an error when you give
 * undefined as argument.
 *
 * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
 * @deprecated ⛔ Using this function with that argument does nothing and just slows down your process
 * @param val ❓ undefined
 * @returns ⛔ undefined
 *
 * @see [getNormalValue()](https://nsc-de.github.io/js-database/modules/_database_.html#getnormalvalue)
 */
export function getNormalValue(val : undefined): undefined;

/**
 * creates the 'normal' value from [DatabaseValue](https://nsc-de.github.io/js-database/modules/_database_.html#databasevalue)
 *
 * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
 * @param val 🏡 the value you want to convert back to a normal value
 * @returns the 'normal' value
 *
 * @see [getNormalValue()](https://nsc-de.github.io/js-database/modules/_database_.html#getnormalvalue)
 */
export function getNormalValue(val : DatabaseInsertable): DatabaseValueAble;

/**
 * [implementation]
 * creates the 'normal' value from a [DatabaseValue](https://nsc-de.github.io/js-database/modules/_database_.html#databasevalue)
 *
 * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
 * @param val 🏡 the value you want to convert back to a normal value
 * @returns the 'normal' value
 *
 * @see [getNormalValue()](https://nsc-de.github.io/js-database/modules/_database_.html#getnormalvalue)
 */
export function getNormalValue(val : DatabaseInsertable): DatabaseValueAble {

  if(val == {}) return {};
  else if(val instanceof DatabaseObject || val instanceof  DatabaseArray) return getNormalValue(val.data);
  else if(Array.isArray(val)) {
    for(let i = 0; i < val.length; i++) {
      val[i] = getNormalValue(val[i]);
    }
  }
  else if(typeof val === "object" && val !== null) {
    Object.keys(val).forEach((k) => val[k] = getNormalValue(val[k]));
  }
  return val;

}





/**
 * A [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearray.html) is the database-representation of an array.
 *
 * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
 *
 * @see [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearray.html).[data](https://nsc-de.github.io/js-database/classes/_database_.databasearray.html#data) - the data of the array
 * @see [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearray.html).[length](https://nsc-de.github.io/js-database/classes/_database_.databasearray.html#length) - the array length
 * @see [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearray.html).[constructor()](https://nsc-de.github.io/js-database/classes/_database_.databasearray.html#constructor) - the constructor
 * @see [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearray.html).[set()](https://nsc-de.github.io/js-database/classes/_database_.databasearray.html#set) - sets a value from the [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearray.html)
 * @see [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearray.html).[setDefault()](https://nsc-de.github.io/js-database/classes/_database_.databasearray.html#setDefault) - sets a default value from the [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearray.html)
 * @see [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearray.html).[get()](https://nsc-de.github.io/js-database/classes/_database_.databasearray.html#get) - gets a value from the [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearray.html)
 * @see [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearray.html).[getNormal()](https://nsc-de.github.io/js-database/classes/_database_.databasearray.html#getNormal) - gets a value from the [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearray.html) and normalizes it
 * @see [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearray.html).[update()](https://nsc-de.github.io/js-database/classes/_database_.databasearray.html#update) - updates a value from the [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearray.html)
 * @see [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearray.html).[contains()](https://nsc-de.github.io/js-database/classes/_database_.databasearray.html#contains) - checks if the [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearray.html) contains a value
 * @see [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearray.html).[push()](https://nsc-de.github.io/js-database/classes/_database_.databasearray.html#push) - push a value into the [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearray.html)
 */
export class DatabaseArray implements DatabaseArrayType {

  public _data!: DatabaseValueAble[];

  /**
   * The data of the [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearray.html)
   *
   * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
   *
   * @see [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearray.html) - 👩‍👦 the parent class
   * @see [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearray.html).[data](https://nsc-de.github.io/js-database/classes/_database_.databasearray.html#_data) - the storage for the data
   */
  public set data(data: DatabaseValueAble[]) {
    this._data = getNormalValue(data); // << Make sure there is no DatabaseObject or DatabaseArray in the data
  }

  public get data(): DatabaseValueAble[] {
    return this._data;
  }


  /**
   * Returns the length of the array
   *
   * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
   *
   * @see [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearray.html) - 👩‍👦 the parent class
   * @see [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearray.html).[data](https://nsc-de.github.io/js-database/classes/_database_.databasearray.html#data) - the data of the array
   */
  public get length(): number {
    return this._data.length;
  }


  /**
   * Constructor for [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearray.html)
   *
   * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
   * @param data the data for the database-array
   *
   * @see [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearray.html) - 👩‍👦 the parent class
   * @see [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearray.html).[data](https://nsc-de.github.io/js-database/classes/_database_.databasearray.html#data) - the argument you give to the constructor
   */
  constructor(
    data: Array<any> = [],
  ) { this.data = data; }


  /**
   * Sets a value from the [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearray.html).
   *
   * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
   * @param key the path to apply the value to
   * @param value the value to apply to the given path
   * @returns the DatabaseArray itself, so you can chain operations like that
   *
   * @see [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearray.html) - 👩‍👦 the parent class
   */
  public set(key: number | string | Array<string | number>, value : DatabaseInsertable): this {

    if(typeof key == "string") this.set(key.split(/[.\[\]]/g), value);
    else if(typeof key == "number") this._data[key] = getNormalValue(value);
    else {
      if(key.length > 1) {
        if(this._data[<number>key[0]] == null) this._data[<number>key[0]] = createObjectForKey(key);
        const e = createDatabaseValue(this._data[<number>key[0]]);
        if(!(e instanceof DatabaseObject || e instanceof DatabaseArray))
          throw new Error(`Can't use set property of ${typeof e}`);
        (<DatabaseObject | DatabaseArray><unknown>e).set(key.slice(1, key.length), value)
      }
      else {
        if(typeof key[0] === 'string') this.set(parseInt(key[0]), value);
        else this.set(key[0], value);
      }
    }
    return this;
  }


  /**
   * Sets a default value from the [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearray.html).
   *
   * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
   * @param key the path to apply the value to
   * @param value the value to apply to the given path
   * @returns the [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearray.html) itself, so you can chain operations like that
   *
   * @see [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearray.html) - 👩‍👦 the parent class
   */
  public setDefault(key: number | string | Array<string | number>, value : DatabaseInsertable): this {
    if(!this.contains(key)) this.set(key, value);
    return this;
  }


  /**
   * Gets a value from the [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearray.html).
   *
   * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
   * @param key the path to get
   * @returns the value of the key
   *
   * @see [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearray.html) - 👩‍👦 the parent class
   */
  public get(key: number | string | Array<string | number>): DatabaseValue {

    return createDatabaseValue(this.getNormal(key));

  }


  /**
   * Gets a value from the [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearray.html) normalizes it
   *
   * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
   * @param key the path to get
   * @returns the value of the key
   *
   * @see [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearray.html) - 👩‍👦 the parent class
   */
  public getNormal(key: number | string | Array<string | number>): DatabaseValueAble {

    if(typeof key == "string") return this.getNormal(key.split(/[.\[\]]/g));
    else if(typeof key == "number") return this._data[key];
    else {
      if(key.length > 1) {
        let e = <DatabaseObject | DatabaseArray><unknown> createDatabaseValue(this._data[<number>key[0]]);
        if(!(e instanceof DatabaseObject || e instanceof DatabaseArray)) return undefined;
        return e?.getNormal(key.slice(1, key.length));
      } else {
        return this._data[typeof key[0] == "string" ? parseInt(key[0]) : key[0]];
      }
    }

  }


  /**
   * Updates a value from the [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearray.html).
   *
   * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
   * @param key the path to update
   * @param update the function to update the value
   * @returns the [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearray.html) itself, so you can chain operations like that
   *
   * @see [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearray.html) - 👩‍👦 the parent class
   */
  public update(key: number | string | Array<string | number>, update: (e : DatabaseValue) =>  DatabaseInsertable ): this {
    this.set(key, update(this.get(key)));
    return this;
  }


  /**
   * Checks if the [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearray.html) contains a value
   *
   * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
   * @param key the path to check
   * @returns does the array contains the value
   *
   * @see [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearray.html) - 👩‍👦 the parent class
   */
  public contains(key: number | string | Array<string | number>): boolean {

    if(typeof key == "string") return this.contains(key.split(/[.\[\]]/g));
    else if(typeof key == "number") return this.data[key] != undefined;
    else {
      if(key.length > 1) {
        let e = createDatabaseValue(this.data[<number>key[0]]);
        if(!(e instanceof DatabaseObject || e instanceof DatabaseArray)) return false;
        return e?.contains(key.slice(1, key.length));
      } else {
        return (this.data[typeof key[0] == "string" ? parseInt(key[0]) : key[0]]) != undefined
      }
    }
  }


  /**
   * Pushes a value into the [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearray.html)
   *
   * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
   * @param value the value to push into the array
   * @returns the [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearray.html) itself, so you can chain operations like that
   *
   * @see [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearray.html) - 👩‍👦 the parent class
   */
  public push(...values: DatabaseInsertable[]): this {

    this._data.push(...values.map(v => getNormalValue(v)));
    return this;

  }
}





/**
 * A [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.databaseobject.html) is the database-representation of an object.
 *
 * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
 *
 * @see [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.databaseobject.html).[data](https://nsc-de.github.io/js-database/classes/_database_.databaseobject.html#data) - the data of the array
 * @see [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.databaseobject.html).[length](https://nsc-de.github.io/js-database/classes/_database_.databaseobject.html#length) - the array length
 * @see [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.databaseobject.html).[constructor()](https://nsc-de.github.io/js-database/classes/_database_.databaseobject.html#constructor) - the constructor
 * @see [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.databaseobject.html).[set()](https://nsc-de.github.io/js-database/classes/_database_.databaseobject.html#set) - sets a value from the [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.databaseobject.html)
 * @see [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.databaseobject.html).[setDefault()](https://nsc-de.github.io/js-database/classes/_database_.databaseobject.html#setDefault) - sets a default value from the [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.databaseobject.html)
 * @see [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.databaseobject.html).[setDefaults()](https://nsc-de.github.io/js-database/classes/_database_.databaseobject.html#setDefaults) - sets defaults for the [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.databaseobject.html)
 * @see [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.databaseobject.html).[get()](https://nsc-de.github.io/js-database/classes/_database_.databaseobject.html#get) - gets a value from the [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.databaseobject.html)
 * @see [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.databaseobject.html).[getNormal()](https://nsc-de.github.io/js-database/classes/_database_.databaseobject.html#getNormal) - gets a value from the [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.databaseobject.html) and normalizes it
 * @see [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.databaseobject.html).[update()](https://nsc-de.github.io/js-database/classes/_database_.databaseobject.html#update) - updates a value from the [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.databaseobject.html)
 * @see [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.databaseobject.html).[contains()](https://nsc-de.github.io/js-database/classes/_database_.databaseobject.html#contains) - checks if the [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.databaseobject.html) contains a value
 * @see [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.databaseobject.html).[generateId()](https://nsc-de.github.io/js-database/classes/_database_.databaseobject.html#contains) - Generates an id using a namespace
 */
export class DatabaseObject implements DatabaseObjectType {

  private _data!: JSObject<DatabaseValueAble>;

  /**
   * The data of the DatabaseObject
   *
   * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
   *
   * @see [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.databaseobject.html) - 👩‍👦 the parent class
   */
  public set data(data: JSObject<DatabaseValueAble>) {
    this._data = getNormalValue(data); // << Make sure there is no DatabaseObject or DatabaseArray in the data
  }

  public get data(): JSObject<DatabaseValueAble> {
    return this._data;
  }


  /**
   * Returns the length of the object
   *
   * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
   *
   * @see [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearray.html) - 👩‍👦 the parent class
   * @see [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearray.html).data - the data of the array
   */
  public get length(): number {
    return Object.keys(this._data).length;
  }


  /**
   * Constructor for DatabaseObject
   *
   * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
   * @param data the data for the database-array
   *
   * @see [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.databaseobject.html) - 👩‍👦 the parent class
   * @see [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.databaseobject.html).data - the argument you give to the constructor
   */
  constructor(
    data: JSObject<DatabaseValueAble> = {},
  ) { this._data = data; }


  /**
   * Sets a value from the DatabaseObject.
   *
   * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
   * @param key the path to apply the value to
   * @param value the value to apply to the given path
   * @returns the DatabaseObject itself, so you can chain operations like that
   *
   * @see [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.databaseobject.html) - 👩‍👦 the parent class
   */
  public set(key: string | Array<string | number>, value : DatabaseInsertable): this {
    if(typeof key == "string") return this.set(key.split(/[.\[\]]/g), value);
    else {
      if(key.length > 1) {
        if(this._data[key[0]] == null) this._data[key[0]] = createObjectForKey(key);
        const e = createDatabaseValue(this._data[key[0]]);
        if(!(e instanceof DatabaseObject || e instanceof DatabaseArray))
          throw new Error(`Can't use set property of ${typeof e}`);
        (<DatabaseObject | DatabaseArray><unknown>e).set(key.slice(1, key.length), value)
      } else {
        this._data[key[0]] = getNormalValue(value);
      }
    }
    return this;
  }


  /**
   * Sets a default value from the [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.databaseobject.html).
   *
   * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
   * @param key the path to apply the value to
   * @param value the value to apply to the given path
   * @returns the [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.databaseobject.html) itself, so you can chain operations like that
   *
   * @see [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.databaseobject.html) - 👩‍👦 the parent class
   */
  public setDefault(key: string | Array<string | number>, value : DatabaseInsertable): this {
    if(!this.contains(key)) this.set(key, value);
    return this;
  }


  /**
   * Sets default values for the DatabaseObject.
   *
   * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
   * @param defaults an object containing all the default values
   * @returns the [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.databaseobject.html) itself, so you can chain operations like that
   *
   * @see [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.databaseobject.html) - 👩‍👦 the parent class
   */
  public setDefaults (defaults : JSObject<DatabaseInsertable>): this {
    Object.keys(defaults).forEach(k => {
      if(this._data[k] === null || this._data[k] === undefined) this._data[k] = getNormalValue(defaults[k]);
      else if(defaults[k] instanceof Object && this._data[k] instanceof Object) createDatabaseValue(this._data[k] as JSObject<DatabaseValueAble>).setDefaults(<JSObject> defaults[k]);
    });
    return this;
  }


  /**
   * Gets a value from the DatabaseObject.
   *
   * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
   * @param key the path to get
   * @returns the value at the position
   *
   * @see [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.databaseobject.html) - 👩‍👦 the parent class
   */
  public get(key: string | Array<string | number>): DatabaseValue {

    return createDatabaseValue(this.getNormal(key));

  }


  /**
   * Gets a value from the [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.databaseobject.html) and normalizes it
   *
   * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
   * @param key the path to get
   * @returns the normalized value at the position
   *
   * @see [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.databaseobject.html) - 👩‍👦 the parent class
   */
  public getNormal(key: string | Array<string | number>): DatabaseValueAble {

    if(typeof key == "string") return this.getNormal(key.split(/[.\[\]]/g));
    else {
      if(key.length > 1) {
        let e: DatabaseValue = createDatabaseValue(this._data[key[0]]);
        if(!(e instanceof DatabaseObject || e instanceof DatabaseArray)) return undefined;
        return e?.getNormal(key.slice(1, key.length));
      } else {
        return this._data[<string>key[0]];
      }
    }

  }


  /**
   * Updates a value from the [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.databaseobject.html).
   *
   * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
   * @param key the path to update
   * @param update the function to update the value
   * @returns the [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.databaseobject.html) itself, so you can chain operations like that
   *
   * @see [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.databaseobject.html) - 👩‍👦 the parent class
   */
  public update(key: string | Array<string | number>, update: (e :  DatabaseValue ) =>  DatabaseInsertable): this {
    this.set(key, update(this.get(key)));
    return this;
  }


  /**
   * Checks if the [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.databaseobject.html) contains a value
   *
   * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
   * @param key the path to apply the value to
   * @returns the value at the position of the position
   *
   * @see [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.databaseobject.html) - 👩‍👦 the parent class
   */
  public contains(key: string | Array<string | number>): boolean {
    if(typeof key == "string") return this.contains(key.split(/[.\[\]]/g));
    else {
      if(key.length > 1) {
        let e = createDatabaseValue(this._data[key[0]]);
        if(!(e instanceof DatabaseObject || e instanceof DatabaseArray)) return false;
        return e?.contains(key.slice(1, key.length));
      } else {
        return this._data[<string>key[0]] != undefined;
      }
    }
  }


  /**
   * Generates an using a namespace
   *
   * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
   * @param name the name to generate a namespace from
   * @returns the generated id
   *
   * @see [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.databaseobject.html) - 👩‍👦 the parent class
   */
  public generateId(name: string): number {
    let counter: string = `id_counters.${name}`;
    if(this.get(counter) == null) this.set(counter, -1);
    return <number> this.update(counter, (e) => (<number>e)+1).get(counter);
  }
}





/**
 * Database class is basically a [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.databaseobject.html) with save and load functionality
 *
 * @see [SyncDatabase](https://nsc-de.github.io/js-database/classes/_database_.syncdatabase.html) - A database that works sync instead of using promises
 * @see [Database](https://nsc-de.github.io/js-database/classes/_database_.database.html).[constructor()](https://nsc-de.github.io/js-database/classes/_database_.database.html#constructor) - the constructor
 * @see [Database](https://nsc-de.github.io/js-database/classes/_database_.database.html).[saveData()](https://nsc-de.github.io/js-database/classes/_database_.database.html#savedata) - saves the data to the [DatabaseAdapter](https://nsc-de.github.io/js-database/interfaces/_database_.databaseadapter.html)
 * @see [Database](https://nsc-de.github.io/js-database/classes/_database_.database.html).[reloadData()](https://nsc-de.github.io/js-database/classes/_database_.database.html#reloaddata) - loads the data from the [DatabaseAdapter](https://nsc-de.github.io/js-database/interfaces/_database_.databaseadapter.html)
 *
 * @see [Database](https://nsc-de.github.io/js-database/classes/_database_.database.html).[data](https://nsc-de.github.io/js-database/classes/_database_.database.html#data) - the data of the array
 * @see [Database](https://nsc-de.github.io/js-database/classes/_database_.database.html).[length](https://nsc-de.github.io/js-database/classes/_database_.database.html#length) - the array length
 * @see [Database](https://nsc-de.github.io/js-database/classes/_database_.database.html).[set()](https://nsc-de.github.io/js-database/classes/_database_.database.html#set) - sets a value from the [Database](https://nsc-de.github.io/js-database/classes/_database_.database.html)
 * @see [Database](https://nsc-de.github.io/js-database/classes/_database_.database.html).[setDefault()](https://nsc-de.github.io/js-database/classes/_database_.database.html#setDefault) - sets a default value from the [Database](https://nsc-de.github.io/js-database/classes/_database_.database.html)
 * @see [Database](https://nsc-de.github.io/js-database/classes/_database_.database.html).[setDefaults()](https://nsc-de.github.io/js-database/classes/_database_.database.html#setDefaults) - sets defaults for the [Database](https://nsc-de.github.io/js-database/classes/_database_.database.html)
 * @see [Database](https://nsc-de.github.io/js-database/classes/_database_.database.html).[get()](https://nsc-de.github.io/js-database/classes/_database_.database.html#get) - gets a value from the [Database](https://nsc-de.github.io/js-database/classes/_database_.database.html)
 * @see [Database](https://nsc-de.github.io/js-database/classes/_database_.database.html).[getNormal()](https://nsc-de.github.io/js-database/classes/_database_.database.html#getNormal) - gets a value from the [Database](https://nsc-de.github.io/js-database/classes/_database_.database.html) and normalizes it
 * @see [Database](https://nsc-de.github.io/js-database/classes/_database_.database.html).[update()](https://nsc-de.github.io/js-database/classes/_database_.database.html#update) - updates a value from the [Database](https://nsc-de.github.io/js-database/classes/_database_.database.html)
 * @see [Database](https://nsc-de.github.io/js-database/classes/_database_.database.html).[contains()](https://nsc-de.github.io/js-database/classes/_database_.database.html#contains) - checks if the [Database](https://nsc-de.github.io/js-database/classes/_database_.database.html) contains a value
 * @see [Database](https://nsc-de.github.io/js-database/classes/_database_.database.html).[generateId()](https://nsc-de.github.io/js-database/classes/_database_.database.html#contains) - checks if the [Database](https://nsc-de.github.io/js-database/classes/_database_.database.html) - Generates an id using a namespace
 */
export class Database extends DatabaseObject {

  /**
   * 🔨 Constructor for Database class
   *
   * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
   * @param adapter the adapter to get the data from / save the data to
   * @param data the data to create the database with
   *
   * @see [Database](https://nsc-de.github.io/js-database/classes/_database_.database.html) - 👩‍👦 the parent class
   */
  constructor(
    public adapter: DatabaseAdapter,
    data: JSObject<DatabaseValueAble>
  ) {
    super(data);
    this.adapter = adapter;
  }

  /**
   * 💾 Save the data from the database
   *
   * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
   * @returns ⌛ Promise (Ready when saved) >> the database itself, so you can chain operations
   *
   * @see [Database](https://nsc-de.github.io/js-database/classes/_database_.database.html) - 👩‍👦 the parent class
   */
  public async saveData (): Promise<this> {
    await this.adapter.save(this.data); return this;
  }

  /**
   * 🔄 Reload the data from the database
   *
   * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
   * @returns ⌛ Promise (Ready when loaded) >> the database itself, so you can chain operations
   *
   * @see [Database](https://nsc-de.github.io/js-database/classes/_database_.database.html) - 👩‍👦 the parent class
   */
  public async reloadData(): Promise<this> { this.data = await this.adapter.load(); return this; }

}





/**
 * SyncDatabase class is basically a [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.databaseobject.html) with save and load functionality.
 * It is written synchronously (without using promises)
 *
 * @see [Database](https://nsc-de.github.io/js-database/classes/_database_.syncdatabase.html) - A database that works using promises for better performance
 * @see [SyncDatabase](https://nsc-de.github.io/js-database/classes/_database_.syncdatabase.html).[constructor()](https://nsc-de.github.io/js-database/classes/_database_.syncdatabase.html#constructor) - the constructor
 * @see [SyncDatabase](https://nsc-de.github.io/js-database/classes/_database_.syncdatabase.html).[saveData()](https://nsc-de.github.io/js-database/classes/_database_.syncdatabase.html#savedata) - saves the data to the [DatabaseAdapter](https://nsc-de.github.io/js-database/interfaces/_database_.syncdatabaseadapter.html)
 * @see [SyncDatabase](https://nsc-de.github.io/js-database/classes/_database_.syncdatabase.html).[reloadData()](https://nsc-de.github.io/js-database/classes/_database_.syncdatabase.html#reloaddata) - loads the data from the [DatabaseAdapter](https://nsc-de.github.io/js-database/interfaces/_database_.syncdatabaseadapter.html)
 *
 * @see [SyncDatabase](https://nsc-de.github.io/js-database/classes/_database_.syncdatabase.html).[data](https://nsc-de.github.io/js-database/classes/_database_.syncdatabase.html#data) - the data of the array
 * @see [SyncDatabase](https://nsc-de.github.io/js-database/classes/_database_.syncdatabase.html).[length](https://nsc-de.github.io/js-database/classes/_database_.syncdatabase.html#length) - the array length
 * @see [SyncDatabase](https://nsc-de.github.io/js-database/classes/_database_.syncdatabase.html).[set()](https://nsc-de.github.io/js-database/classes/_database_.syncdatabase.html#set) - sets a value from the [SyncDatabase](https://nsc-de.github.io/js-database/classes/_database_.syncdatabase.html)
 * @see [SyncDatabase](https://nsc-de.github.io/js-database/classes/_database_.syncdatabase.html).[setDefault()](https://nsc-de.github.io/js-database/classes/_database_.syncdatabase.html#setDefault) - sets a default value from the [SyncDatabase](https://nsc-de.github.io/js-database/classes/_database_.syncdatabase.html)
 * @see [SyncDatabase](https://nsc-de.github.io/js-database/classes/_database_.syncdatabase.html).[setDefaults()](https://nsc-de.github.io/js-database/classes/_database_.syncdatabase.html#setDefaults) - sets defaults for the [SyncDatabase](https://nsc-de.github.io/js-database/classes/_database_.syncdatabase.html)
 * @see [SyncDatabase](https://nsc-de.github.io/js-database/classes/_database_.syncdatabase.html).[get()](https://nsc-de.github.io/js-database/classes/_database_.syncdatabase.html#get) - gets a value from the [SyncDatabase](https://nsc-de.github.io/js-database/classes/_database_.syncdatabase.html)
 * @see [SyncDatabase](https://nsc-de.github.io/js-database/classes/_database_.syncdatabase.html).[getNormal()](https://nsc-de.github.io/js-database/classes/_database_.syncdatabase.html#getNormal) - gets a value from the [SyncDatabase](https://nsc-de.github.io/js-database/classes/_database_.syncdatabase.html) and normalizes it
 * @see [SyncDatabase](https://nsc-de.github.io/js-database/classes/_database_.syncdatabase.html).[update()](https://nsc-de.github.io/js-database/classes/_database_.syncdatabase.html#update) - updates a value from the [SyncDatabase](https://nsc-de.github.io/js-database/classes/_database_.syncdatabase.html)
 * @see [SyncDatabase](https://nsc-de.github.io/js-database/classes/_database_.syncdatabase.html).[contains()](https://nsc-de.github.io/js-database/classes/_database_.syncdatabase.html#contains) - checks if the [SyncDatabase](https://nsc-de.github.io/js-database/classes/_database_.syncdatabase.html) contains a value
 * @see [SyncDatabase](https://nsc-de.github.io/js-database/classes/_database_.syncdatabase.html).[generateId()](https://nsc-de.github.io/js-database/classes/_database_.syncdatabase.html#contains) - checks if the [SyncDatabase](https://nsc-de.github.io/js-database/classes/_database_.syncdatabase.html) - Generates an id using a namespace
 */
export class SyncDatabase extends DatabaseObject {

  /**
   * Constructor for Database class
   *
   * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
   * @param adapter the adapter to get the data from / save the data to
   * @param data the data to create the database with
   *
   * @see [SyncDatabase](https://nsc-de.github.io/js-database/classes/_database_.syncdatabase.html) - 👩‍👦 the parent class
   */
  constructor(
    public adapter: SyncDatabaseAdapter,
    data?: JSObject<DatabaseValueAble>
  ) {
    super(data || adapter.load());
    this.adapter = adapter;
  }

  /**
   * 💾 Save the data from the database
   *
   * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
   * @returns the database itself, so you can chain operations
   *
   * @see [SyncDatabase](https://nsc-de.github.io/js-database/classes/_database_.syncdatabase.html) - 👩‍👦 the parent class
   */
  public saveData (): this { this.adapter.save(this.data); return this; }

  /**
   * 🔄 Reload the data from the database
   *
   * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
   * @returns the database itself, so you can chain operations
   *
   * @see [SyncDatabase](https://nsc-de.github.io/js-database/classes/_database_.syncdatabase.html) - 👩‍👦 the parent class
   */
  public reloadData(): this { this.data = this.adapter.load(); return this; }

}

/**
 * Creates a database from a given adapter
 *
 * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
 * @param adapter the databaseAdapter
 * @returns ⌛ Promise (Ready when loaded) >> the database
 */
export function createDatabase(adapter: DatabaseAdapter): Promise<Database>;

/**
 * Creates a sync-database from a given adapter
 *
 * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
 * @param adapter the databaseAdapter
 * @returns the SyncDatabase
 */
export function createDatabase(adapter: SyncDatabaseAdapter): SyncDatabase;

/**
 * Creates a database from a given adapter
 *
 * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
 * @param adapter the databaseAdapter
 * @returns the Database
 */
export function createDatabase(adapter: DatabaseAdapter | SyncDatabaseAdapter): Promise<Database> | SyncDatabase {
  let result = adapter.load();
  if(result instanceof Promise) {
    return new Promise((rs) => {
      (<Promise<any>>result).then((data) => {
        rs(new Database(<DatabaseAdapter>adapter, data));
      })
    });
  }
  return new SyncDatabase(<SyncDatabaseAdapter>adapter, result);
}





function createObjectForKey(key: string | Array<string | number>): JSObject<DatabaseValueAble> | DatabaseValueAble[] {
  if(typeof key == "string") return createObjectForKey(key.split(/[.\[\]]/g));
  if(typeof key[1] == 'number' || (typeof key[1] == 'string' && isNumberString(key[1]))) return [];
  return {};
}

const numberCharacters = "0123456789";

function isNumberString(s: string): boolean {
  for(let i = 0; i < s.length; i++) if(!numberCharacters.includes(s.charAt(i))) return false;
  return true;
}


/**
 * A value as it is stored in the Database
 *
 * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
 */
export type DatabaseValue = DatabaseObjectType | DatabaseArrayType | number | string | boolean | null | undefined;

/**
 * The Primitives of the [DatabaseValue](https://nsc-de.github.io/js-database/modules/_database_.html#databasevalue)
 *
 * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
 */
export type DatabaseValueAble = DatabaseValueAble[] | JSObject<DatabaseValueAble> | number | string | boolean | null | undefined;

/**
 * Everything that can be inserted into a database ([DatabaseValue](https://nsc-de.github.io/js-database/modules/_database_.html#databasevalue)
 * or [DatabaseValueAble](https://nsc-de.github.io/js-database/modules/_database_.html#databasevalueable))
 *
 * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
 */
export type DatabaseInsertable = DatabaseValue | DatabaseValueAble;
export interface JSObject {[key: string] : any};




/**
 * A [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.databaseobjecttype.html) is the database-representation of an object.
 *
 * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
 *
 * @see [DatabaseObjectType](https://nsc-de.github.io/js-database/classes/_database_.databaseobjecttype.html).[data](https://nsc-de.github.io/js-database/classes/_database_.databaseobjecttype.html#data) - the data of the array
 * @see [DatabaseObjectType](https://nsc-de.github.io/js-database/classes/_database_.databaseobjecttype.html).[length](https://nsc-de.github.io/js-database/classes/_database_.databaseobjecttype.html#length) - the array length
 * @see [DatabaseObjectType](https://nsc-de.github.io/js-database/classes/_database_.databaseobjecttype.html).[set()](https://nsc-de.github.io/js-database/classes/_database_.databaseobjecttype.html#set) - sets a value from the [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.databaseobjecttype.html)
 * @see [DatabaseObjectType](https://nsc-de.github.io/js-database/classes/_database_.databaseobjecttype.html).[setDefault()](https://nsc-de.github.io/js-database/classes/_database_.databaseobjecttype.html#setDefault) - sets a default value from the [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.databaseobjecttype.html)
 * @see [DatabaseObjectType](https://nsc-de.github.io/js-database/classes/_database_.databaseobjecttype.html).[setDefaults()](https://nsc-de.github.io/js-database/classes/_database_.databaseobjecttype.html#setDefaults) - sets defaults for the [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.databaseobjecttype.html)
 * @see [DatabaseObjectType](https://nsc-de.github.io/js-database/classes/_database_.databaseobjecttype.html).[get()](https://nsc-de.github.io/js-database/classes/_database_.databaseobjecttype.html#get) - gets a value from the [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.databaseobjecttype.html)
 * @see [DatabaseObjectType](https://nsc-de.github.io/js-database/classes/_database_.databaseobjecttype.html).[getNormal()](https://nsc-de.github.io/js-database/classes/_database_.databaseobjecttype.html#getNormal) - gets a value from the [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.databaseobjecttype.html) and normalizes it
 * @see [DatabaseObjectType](https://nsc-de.github.io/js-database/classes/_database_.databaseobjecttype.html).[update()](https://nsc-de.github.io/js-database/classes/_database_.databaseobjecttype.html#update) - updates a value from the [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.databaseobjecttype.html)
 * @see [DatabaseObjectType](https://nsc-de.github.io/js-database/classes/_database_.databaseobjecttype.html).[contains()](https://nsc-de.github.io/js-database/classes/_database_.databaseobjecttype.html#contains) - checks if the [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.databaseobjecttype.html) contains a value
 * @see [DatabaseObjectType](https://nsc-de.github.io/js-database/classes/_database_.databaseobjecttype.html).[generateId()](https://nsc-de.github.io/js-database/classes/_database_.databaseobjecttype.html#contains) - Generates an id using a namespace
 */
export interface DatabaseObjectType {

    /**
     * The data of the DatabaseObject
     *
     * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
     *
     * @see [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.databaseobjecttype.html) - 👩‍👦 the parent class
     * @see [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.databaseobjecttype.html)._data - the storage for the data
     */
    data: JSObject;

    /**
     * Returns the length of the object
     *
     * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
     *
     * @see [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearraytype.html) - 👩‍👦 the parent class
     * @see [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearraytype.html).data - the data of the array
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
     * @see [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.databaseobjecttype.html) - 👩‍👦 the parent class
     */
    set(key: string | Array<string | number>, value: DatabaseInsertable): this;

    /**
     * Sets a default value from the [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.databaseobjecttype.html).
     *
     * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
     * @param key the path to apply the value to
     * @param value the value to apply to the given path
     * @returns the [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.databaseobjecttype.html) itself, so you can chain operations like that
     *
     * @see [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.databaseobjecttype.html) - 👩‍👦 the parent class
     */
    setDefault(key: string | Array<string | number>, value: DatabaseInsertable): this;

    /**
     * Sets default values for the DatabaseObject.
     *
     * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
     * @param defaults an object containing all the default values
     * @returns the [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.databaseobjecttype.html) itself, so you can chain operations like that
     *
     * @see [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.databaseobjecttype.html) - 👩‍👦 the parent class
     */
    setDefaults(defaults: JSObject): this;

    /**
     * Gets a value from the DatabaseObject.
     *
     * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
     * @param key the path to get
     * @returns the value at the position
     *
     * @see [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.databaseobjecttype.html) - 👩‍👦 the parent class
     */
    get(key: string | Array<string | number>): DatabaseValue;

    /**
     * Gets a value from the [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.databaseobjecttype.html) and normalizes it
     *
     * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
     * @param key the path to get
     * @returns the normalized value at the position
     *
     * @see [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.databaseobjecttype.html) - 👩‍👦 the parent class
     */
    getNormal(key: string | Array<string | number>): DatabaseValueAble;

    /**
     * Updates a value from the [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.databaseobjecttype.html).
     *
     * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
     * @param key the path to update
     * @param update the function to update the value
     * @returns the [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.databaseobjecttype.html) itself, so you can chain operations like that
     *
     * @see [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.databaseobjecttype.html) - 👩‍👦 the parent class
     */
    update(key: string | Array<string | number>, update: (e: DatabaseValue) => DatabaseInsertable): this;

    /**
     * Checks if the [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.databaseobjecttype.html) contains a value
     *
     * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
     * @param key the path to apply the value to
     * @returns the value at the position of the position
     *
     * @see [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.databaseobjecttype.html) - 👩‍👦 the parent class
     */
    contains(key: string | Array<string | number>): boolean;

    /**
     * Generates an using a namespace
     *
     * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
     * @param name the name to generate a namespace from
     * @returns the generated id
     *
     * @see [DatabaseObject](https://nsc-de.github.io/js-database/classes/_database_.databaseobjecttype.html) - 👩‍👦 the parent class
     */
    generateId(name: string): number;
}



/**
 * A [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearraytype.html) is the database-representation of an array.
 *
 * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
 *
 * @see [DatabaseArrayType](https://nsc-de.github.io/js-database/classes/_database_.databasearraytype.html).[data](https://nsc-de.github.io/js-database/classes/_database_.databasearraytype.html#data) - the data of the array
 * @see [DatabaseArrayType](https://nsc-de.github.io/js-database/classes/_database_.databasearraytype.html).[length](https://nsc-de.github.io/js-database/classes/_database_.databasearraytype.html#length) - the array length
 * @see [DatabaseArrayType](https://nsc-de.github.io/js-database/classes/_database_.databasearraytype.html).[constructor()](https://nsc-de.github.io/js-database/classes/_database_.databasearraytype.html#constructor) - the constructor
 * @see [DatabaseArrayType](https://nsc-de.github.io/js-database/classes/_database_.databasearraytype.html).[set()](https://nsc-de.github.io/js-database/classes/_database_.databasearraytype.html#set) - sets a value from the [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearraytype.html)
 * @see [DatabaseArrayType](https://nsc-de.github.io/js-database/classes/_database_.databasearraytype.html).[setDefault()](https://nsc-de.github.io/js-database/classes/_database_.databasearraytype.html#setDefault) - sets a default value from the [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearraytype.html)
 * @see [DatabaseArrayType](https://nsc-de.github.io/js-database/classes/_database_.databasearraytype.html).[get()](https://nsc-de.github.io/js-database/classes/_database_.databasearraytype.html#get) - gets a value from the [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearraytype.html)
 * @see [DatabaseArrayType](https://nsc-de.github.io/js-database/classes/_database_.databasearraytype.html).[getNormal()](https://nsc-de.github.io/js-database/classes/_database_.databasearraytype.html#getNormal) - gets a value from the [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearraytype.html) and normalizes it
 * @see [DatabaseArrayType](https://nsc-de.github.io/js-database/classes/_database_.databasearraytype.html).[update()](https://nsc-de.github.io/js-database/classes/_database_.databasearraytype.html#update) - updates a value from the [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearraytype.html)
 * @see [DatabaseArrayType](https://nsc-de.github.io/js-database/classes/_database_.databasearraytype.html).[contains()](https://nsc-de.github.io/js-database/classes/_database_.databasearraytype.html#contains) - checks if the [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearraytype.html) contains a value
 * @see [DatabaseArrayType](https://nsc-de.github.io/js-database/classes/_database_.databasearraytype.html).[push()](https://nsc-de.github.io/js-database/classes/_database_.databasearraytype.html#push) - push a value into the [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearraytype.html)
 */
export interface DatabaseArrayType {

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
   * @see [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearraytype.html) - 👩‍👦 the parent class
   * @see [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearraytype.html).[data](https://nsc-de.github.io/js-database/classes/_database_.databasearraytype.html#data) - the data of the array
   */
  readonly length: number;

  /**
   * Sets a value from the [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearraytype.html).
   *
   * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
   * @param key the path to apply the value to
   * @param value the value to apply to the given path
   * @returns the DatabaseArray itself, so you can chain operations like that
   *
   * @see [DatabaseArrayType](https://nsc-de.github.io/js-database/classes/_database_.databasearraytype.html) - 👩‍👦 the parent interface
   */
  set(key: number | string | Array<string | number>, value: DatabaseInsertable): this;

  /**
   * Sets a default value from the [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearraytype.html).
   *
   * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
   * @param key the path to apply the value to
   * @param value the value to apply to the given path
   * @returns the [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearraytype.html) itself, so you can chain operations like that
   *
   * @see [DatabaseArrayType](https://nsc-de.github.io/js-database/classes/_database_.databasearraytype.html) - 👩‍👦 the parent interface
   */
  setDefault(key: number | string | Array<string | number>, value: DatabaseInsertable): this;

  /**
   * Gets a value from the [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearraytype.html).
   *
   * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
   * @param key the path to get
   * @returns the value of the key
   *
   * @see [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearraytype.html) - 👩‍👦 the parent interface
   */
  get(key: number | string | Array<string | number>): DatabaseValue;

  /**
   * Gets a value from the [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearraytype.html) normalizes it
   *
   * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
   * @param key the path to get
   * @returns the value of the key
   *
   * @see [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearraytype.html) - 👩‍👦 the parent interface
   */
  getNormal(key: number | string | Array<string | number>): DatabaseValueAble;

  /**
   * Updates a value from the [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearray.html).
   *
   * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
   * @param key the path to update
   * @param update the funciton to update the value
   * @returns the [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearraytype.html) itself, so you can chain operations like that
   *
   * @see [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearraytype.html) - 👩‍👦 the parent interface
   */
  update(key: number | string | Array<string | number>, update: (e: DatabaseValue) => DatabaseInsertable): this;

  /**
   * Checks if the [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearraytype.html) contains a value
   *
   * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
   * @param key the path to check
   * @returns does the array contains the value
   *
   * @see [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearraytype.html) - 👩‍👦 the parent interface
   */
  contains(key: number | string | Array<string | number>): boolean;

  /**
   * Pushes a value into the [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearraytype.html)
   *
   * @author Nicolas Schmidt <[@nsc-de](https://github.com/nsc-de)>
   * @param value the value to push into the array
   * @returns the [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearraytype.html) itself, so you can chain operations like that
   *
   * @see [DatabaseArray](https://nsc-de.github.io/js-database/classes/_database_.databasearraytype.html) - 👩‍👦 the parent interface
   */
  push(...values: DatabaseInsertable[]): this;
}
