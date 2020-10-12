/**
 * This interface describes an adapter to load / save databases. It is required for the {@link SyncDatabase} class
 *
 * @author Nicolas Schmidt
 *
 * @see SyncDatabase - The user of this interface
 * @see SyncDatabaseAdapter.save - 💾 the save method of the SyncDatabaseAdapter
 * @see SyncDatabaseAdapter.load - 💾 the save method of the SyncDatabaseAdapter
 */
export interface SyncDatabaseAdapter {

  /**
   * 💾 Saves the given data
   *
   * @author Nicolas Schmidt
   * @param data 💾 the data to save
   *
   * @see DatabaseAdapter - 👩‍👦 the parent interface
   * @see DatabaseAdapter.load - 💾 the load function
   *
   */
  save(data: JSObject): void;

  /**
   * 💾 loads data
   *
   * @author Nicolas Schmidt
   * @return 💾 loads the data
   *
   * @see DatabaseAdapter - 👩‍👦 the parent interface
   * @see DatabaseAdapter.save - 💾 the save function
   */
  load(): JSObject;

}

/**
 * This interface describes an adapter to load / save databases. It is required for the {@link Database} class
 *
 * @author Nicolas Schmidt
 *
 * @see Database - The user of this interface
 * @see DatabaseAdapter.save - 💾 the save method of the DatabaseAdapter
 * @see DatabaseAdapter.load - 💾 the save method of the DatabaseAdapter
 */
export interface DatabaseAdapter {

  /**
   * 💾 Saves the given data
   *
   * @author Nicolas Schmidt
   * @param data 💾 the data to save
   * @returns ⌛ Promise (Ready when saved) >> ⛔ void
   *
   * @see DatabaseAdapter - 👩‍👦 the parent interface
   * @see DatabaseAdapter.load - 💾 the load function
   *
   */
  save(data: JSObject): Promise<void>;

  /**
   * 💾 loads the data
   *
   * @author Nicolas Schmidt
   * @return ⌛ Promise (Ready when data is loaded) >> 💾 the data
   *
   * @see DatabaseAdapter - 👩‍👦 the parent interface
   * @see DatabaseAdapter.save - 💾 the save function
   */
  load(): Promise<JSObject>;

}





/**
 * 🔨 Creates an DatabaseArray from a given array
 *
 * @author Nicolas Schmidt
 * @param val 🏡 the value to create a database-value from
 * @returns 🔨 the DatabaseArray representation of the given array
 *
 * @see DatabaseArray
 * @see createDatabaseValue
 *
 */
export function createDatabaseValue(val : any[]) : DatabaseArray;

/**
 * 🔨 Creates an DatabaseObject from a given object
 *
 * @author Nicolas Schmidt
 * @param val 🏡 the object to create a "DatabaseObject" from
 * @returns 🔨 the DatabaseObject-representation of the given object
 *
 * @see DatabaseObject
 * @see createDatabaseValue
 *
 */
export function createDatabaseValue(val : JSObject) : DatabaseObject;

/**
 * This function is not realy usefull. It gives just the input back.
 * It is just implemented that you don't get an error when you give
 * a DatabaseObject as argument.
 *
 * @author Nicolas Schmidt
 * @deprecated ⛔ Using this function with that argument does nothing and just slows down your process
 * @param val 🏡 the value to create a database-value from
 * @returns ⛔ the same DatabaseObject that is given as input
 *
 * @see DatabaseObject
 * @see createDatabaseValue
 *
 */
export function createDatabaseValue(val : DatabaseObject) : DatabaseObject;

/**
 * This function is not realy usefull. It gives just the input back.
 * It is just implemented that you don't get an error when you give
 * a DatabaseArray as argument.
 *
 * @author Nicolas Schmidt
 * @deprecated ⛔ Using this function with that argument does nothing and just slows down your process
 * @param val 📋 the value to create a database-value from
 * @returns ⛔ the same DatabaseArray that is given as input
 *
 * @see DatabaseArray
 * @see createDatabaseValue
 *
 */
export function createDatabaseValue(val : DatabaseArray) : DatabaseArray;

/**
 * This function is not realy usefull. It gives just the input back.
 * It is just implemented that you don't get an error when you give
 * a string as argument.
 *
 * @author Nicolas Schmidt
 * @deprecated ⛔ Using this function with that argument does nothing and just slows down your process
 * @param val 📋 the value to create a database-value from
 * @returns ⛔ the same string that is given as input
 *
 * @see createDatabaseValue
 *
 */
export function createDatabaseValue(val : string) : string;

/**
 * This function is not realy usefull. It gives just the input back.
 * It is just implemented that you don't get an error when you give
 * a number as argument.
 *
 * @author Nicolas Schmidt
 * @deprecated ⛔ Using this function with that argument does nothing and just slows down your process
 * @param val 1️⃣ the value to create a database-value from
 * @returns ⛔ the same number that is given as input
 *
 * @see createDatabaseValue
 *
 */
export function createDatabaseValue(val : number) : number;

/**
 * This function is not realy usefull. It gives just the input back.
 * It is just implemented that you don't get an error when you give
 * a boolean as argument.
 *
 * @author Nicolas Schmidt
 * @deprecated ⛔ Using this function with that argument does nothing and just slows down your process
 * @param val ❓ the value to create a database-value from
 * @returns ⛔ the same boolean that is given as input
 *
 * @see createDatabaseValue
 *
 */
export function createDatabaseValue(val : boolean) : boolean;

/**
 * This function is not realy usefull. It gives just the input back.
 * It is just implemented that you don't get an error when you give
 * null as argument.
 *
 * @author Nicolas Schmidt
 * @deprecated ⛔ Using this function with that argument does nothing and just slows down your process
 * @param val ❓ null
 * @returns ⛔ null
 *
 * @see createDatabaseValue
 *
 */
export function createDatabaseValue(val : null) : null;

/**
 * This function is not realy usefull. It gives just the input back.
 * It is just implemented that you don't get an error when you give
 * undefined as argument.
 *
 * @author Nicolas Schmidt
 * @deprecated ⛔ Using this function with that argument does nothing and just slows down your process
 * @param val ❓ undefined
 * @returns ⛔ undefined
 *
 * @see createDatabaseValue
 *
 */
export function createDatabaseValue(val : undefined) : undefined;

/**
 * Creates a DatabaseValue from a given value
 *
 * @author Nicolas Schmidt
 * @param val 🏡 the value to create a database-value from
 * @returns the database-value
 *
 */
export function createDatabaseValue(val : DatabaseInsertable) : DatabaseValue;

/**
 * Implementation for the createDatabaseValue function
 *
 * @author Nicolas Schmidt
 * @param val 🏡 the value to create a database-value from
 * @returns the database-value
 *
 */
export function createDatabaseValue(val : DatabaseInsertable) : DatabaseValue {
  if (val instanceof DatabaseObject || val instanceof DatabaseArray) return val;
  if (val instanceof Array) return new DatabaseArray(val);
  if (val instanceof Object) return new DatabaseObject(val);
  return val;
}





/**
 * 🔨 Creates a normal array from a given DatabaseArray
 *
 * @author Nicolas Schmidt
 * @param val 📋 the DatabaseArray you want to convert back to a normal value
 * @returns 🔨 the simple array
 *
 * @see DatabaseObject
 * @see getNormalValue
 *
 */
export function getNormalValue(val : DatabaseArray): any[];

/**
 * 🔨 Creates a normal object from a given DatabaseObject
 *
 * @author Nicolas Schmidt
 * @param val 🏡 the DatabaseObject you want to convert back to a normal value
 * @returns 🔨 the simple object
 *
 * @see DatabaseObject
 * @see getNormalValue
 *
 */
export function getNormalValue(val : DatabaseObject): JSObject;

/**
 * This function is not realy usefull. It gives just the input back.
 * It is just implemented that you don't get an error when you give
 * a array as argument.
 *
 * @author Nicolas Schmidt
 * @deprecated ⛔ Using this function with that argument does nothing and just slows down your process
 * @param val 🏡 the array you want to convert back to a normal value
 * @returns ⛔ the same array that was given as input
 *
 * @see DatabaseObject
 * @see getNormalValue
 *
 */
export function getNormalValue(val : any[]): any[];

/**
 * This function is not realy usefull. It gives just the input back.
 * It is just implemented that you don't get an error when you give
 * a object as argument.
 *
 * @author Nicolas Schmidt
 * @deprecated ⛔ Using this function with that argument does nothing and just slows down your process
 * @param val 🏡 the object you want to convert back to a normal value
 * @returns ⛔ the same object that was given as input
 *
 * @see DatabaseObject
 * @see getNormalValue
 *
 */
export function getNormalValue(val : JSObject): JSObject;

/**
 * This function is not realy usefull. It gives just the input back.
 * It is just implemented that you don't get an error when you give
 * a string as argument.
 *
 * @author Nicolas Schmidt
 * @deprecated ⛔ Using this function with that argument does nothing and just slows down your process
 * @param val 📋 the string you want to convert back to a normal value
 * @returns ⛔ the same string that was given as input
 *
 * @see getNormalValue
 *
 */
export function getNormalValue(val : string): string;

/**
 * This function is not realy usefull. It gives just the input back.
 * It is just implemented that you don't get an error when you give
 * a number as argument.
 *
 * @author Nicolas Schmidt
 * @deprecated ⛔ Using this function with that argument does nothing and just slows down your process
 * @param val 1️⃣ the number you want to convert back to a normal value
 * @returns ⛔ the same number that was given as input
 *
 * @see getNormalValue
 *
 */
export function getNormalValue(val : number): number;

/**
 * This function is not realy usefull. It gives just the input back.
 * It is just implemented that you don't get an error when you give
 * a boolean as argument.
 *
 * @author Nicolas Schmidt
 * @deprecated ⛔ Using this function with that argument does nothing and just slows down your process
 * @param val ❓ the boolean you want to convert back to a normal value
 * @returns ⛔ the same boolean that was given as input
 *
 * @see getNormalValue
 *
 */
export function getNormalValue(val : boolean ): boolean;

/**
 * This function is not realy usefull. It gives just the input back.
 * It is just implemented that you don't get an error when you give
 * null as argument.
 *
 * @author Nicolas Schmidt
 * @deprecated ⛔ Using this function with that argument does nothing and just slows down your process
 * @param val ❓ null
 * @returns ⛔ null
 *
 * @see getNormalValue
 *
 */
export function getNormalValue(val : null ): null;

/**
 * This function is not realy usefull. It gives just the input back.
 * It is just implemented that you don't get an error when you give
 * undefined as argument.
 *
 * @author Nicolas Schmidt
 * @deprecated ⛔ Using this function with that argument does nothing and just slows down your process
 * @param val ❓ undefined
 * @returns ⛔ undefined
 *
 * @see getNormalValue
 *
 */
export function getNormalValue(val : undefined ): undefined;

/**
 * creates the 'normal' value from database-objects
 *
 * @author Nicolas Schmidt
 * @param val 🏡 the value you want to convert back to a normal value
 * @returns the 'normal' value
 *
 * @see getNormalValue
 *
 */
export function getNormalValue(val : DatabaseInsertable): DatabaseValueAble;

/**
 * [implementation]
 * creates the 'normal' value from database-objects
 *
 * @author Nicolas Schmidt
 * @param val 🏡 the value you want to convert back to a normal value
 * @returns the 'normal' value
 *
 * @see getNormalValue
 *
 */
export function getNormalValue(val : DatabaseInsertable): DatabaseValueAble {
  if(val instanceof DatabaseObject || val instanceof  DatabaseArray) return val.data;
  else return val;
}





/**
 * A DatabaseArray is the database-representation of an array.
 *
 * @author Nicolas Schmidt
 *
 * @see DatabaseArray.data
 * @see DatabaseArray.constructor
 * @see DatabaseArray.set - sets a value from the DatabaseArray
 * @see DatabaseArray.setDefault - sets default a value from the DatabaseArray
 * @see DatabaseArray.get - gets a value from the DatabaseArray
 * @see DatabaseArray.getNormal - gets a value from the DatabaseArray and normalizes it
 * @see DatabaseArray.update - updates a value from the DatabaseArray
 * @see DatabaseArray.contains - checks if the DatabaseArray contains a value
 * @see DatabaseArray.push - push a value into the DatabaseArray
 */
export class DatabaseArray {

  
  /**
   * The real array-contents of the DatabaseArray
   *
   * @author Nicolas Schmidt
   *
   * @see DatabaseArray - 👩‍👦 the parent class
   * @see DatabaseArray.data - the getter and setter for the data
   *
   */
  protected _data!: any[];


  /**
   * The data of the DatabaseArray
   *
   * @author Nicolas Schmidt
   *
   * @see DatabaseArray - 👩‍👦 the parent class
   * @see DatabaseArray._data - the storage for the data
   *
   */
  public set data(data : DatabaseInsertable[]) {
    this._data = [];
    data.forEach((v, k) => this._data[k] = createDatabaseValue(v));
  }

  public get data(): DatabaseInsertable[] {
    let data: any[] = [];
    for(let i = 0; i < this._data.length; i++) data[i] = getNormalValue(this._data[i]);
    return data;
  }


  /**
   * Returns the length of the array
   *
   * @author Nicolas Schmidt
   *
   * @see DatabaseArray - 👩‍👦 the parent class
   * @see DatabaseArray.data - the data of the array
   *
   */
  public get length(): number {
    return this._data.length;
  }


  /**
   * Constructor for DatabaseArray
   *
   * @author Nicolas Schmidt
   * @param data the data for the database-array
   *
   * @see DatabaseArray - 👩‍👦 the parent class
   * @see DatabaseArray.data - the argument you give to the constructor
   *
   */
  constructor(
    data: Array<any> = [],
  ) { this.data = data; }


  /**
   * Sets a value from the DatabaseArray.
   *
   * @author Nicolas Schmidt
   * @param key the path to apply the value to
   * @param value the value to apply to the given path
   * @returns the DatabaseArray itself, so you can chain operations like that
   *
   * @see DatabaseArray - 👩‍👦 the parent class
   * @see DatabaseArray.setDefault - sets default a value from the DatabaseArray
   * @see DatabaseArray.get - gets a value from the DatabaseArray
   * @see DatabaseArray.getNormal - gets a value from the DatabaseArray and normalizes it
   * @see DatabaseArray.update - updates a value from the DatabaseArray
   * @see DatabaseArray.contains - checks if the DatabaseArray contains a value
   * @see DatabaseArray.push - push a value into the DatabaseArray
   *
   */
  public set(key: number | string | Array<string | number>, value : DatabaseInsertable): this {

    if(typeof key == "string") this.set(key.split(/[.\[\]]/g), value);
    else if(typeof key == "number") this._data[key] = createDatabaseValue(value);
    else {
      if(key.length > 1) {
        if(this._data[<number>key[0]] == null) this._data[<number>key[0]] = createObjectForKey(key);
        let e = this._data[<number>key[0]];
        if(!(e instanceof DatabaseObject || e instanceof DatabaseArray)) 
          throw new Error(`Can't use set property of ${typeof e}`);
        (<DatabaseObject | DatabaseArray><unknown>e).set(key.slice(1, key.length), value)
      }
      else {
        this._data[typeof key[0] == "string" ? parseInt(key[0]) : key[0]] = createDatabaseValue(value);
      }
    }
    return this;
  }


  /**
   * Sets a default value from the DatabaseArray.
   *
   * @author Nicolas Schmidt
   * @param key the path to apply the value to
   * @param value the value to apply to the given path
   * @returns the DatabaseArray itself, so you can chain operations like that
   *
   * @see DatabaseArray - 👩‍👦 the parent class
   * @see DatabaseArray.set - sets a value from the DatabaseArray
   * @see DatabaseArray.setDefault - sets default a value from the DatabaseArray
   * @see DatabaseArray.get - gets a value from the DatabaseArray
   * @see DatabaseArray.getNormal - gets a value from the DatabaseArray and normalizes it
   * @see DatabaseArray.update - updates a value from the DatabaseArray
   * @see DatabaseArray.contains - checks if the DatabaseArray contains a value
   * @see DatabaseArray.push - push a value into the DatabaseArray
   *
   */
  public setDefault(key: number | string | Array<string | number>, value : DatabaseInsertable): this {
    if(!this.contains(key)) this.set(key, value);
    return this;
  }

  
  /**
   * Gets a value from the DatabaseArray.
   *
   * @author Nicolas Schmidt
   * @param key the path to get
   * @returns the value of the key
   *
   * @see DatabaseArray - 👩‍👦 the parent class
   * @see DatabaseArray.set - sets a value from the DatabaseArray
   * @see DatabaseArray.setDefault - sets default a value from the DatabaseArray
   * @see DatabaseArray.getNormal - gets a value from the DatabaseArray and normalizes it
   * @see DatabaseArray.update - updates a value from the DatabaseArray
   * @see DatabaseArray.contains - checks if the DatabaseArray contains a value
   * @see DatabaseArray.push - push a value into the DatabaseArray
   *
   */
  public get(key: number | string | Array<string | number>): DatabaseValue {

    if(typeof key == "string") return this.get(key.split(/[.\[\]]/g));
    else if(typeof key == "number") return this._data[key];
    else {
      if(key.length > 1) {
        let e = <DatabaseObject | DatabaseArray><unknown> this._data[<number>key[0]];
        if(!(e instanceof DatabaseObject || e instanceof DatabaseArray)) return undefined;
        return e?.get(key.slice(1, key.length));
      } else {
        return this._data[typeof key[0] == "string" ? parseInt(key[0]) : key[0]];
      }
    }
  }

  
  /**
   * Gets a value from the DatabaseArray normalizes it
   *
   * @author Nicolas Schmidt
   * @param key the path to get
   * @returns the value of the key
   *
   * @see DatabaseArray - 👩‍👦 the parent class
   * @see DatabaseArray.set - sets a value from the DatabaseArray
   * @see DatabaseArray.setDefault - sets default a value from the DatabaseArray
   * @see DatabaseArray.get - gets a value from the DatabaseArray
   * @see DatabaseArray.update - updates a value from the DatabaseArray
   * @see DatabaseArray.contains - checks if the DatabaseArray contains a value
   * @see DatabaseArray.push - push a value into the DatabaseArray
   *
   */
  public getNormal(key: number | string | Array<string | number>): DatabaseValueAble {
    return getNormalValue(this.get(key));
  }


  /**
   * Upates a value from the DatabaseArray.
   *
   * @author Nicolas Schmidt
   * @param key the path to update
   * @param update the funciton to update the value
   * @returns the DatabaseArray itself, so you can chain operations like that
   *
   * @see DatabaseArray - 👩‍👦 the parent class
   * @see DatabaseArray.set - sets a value from the DatabaseArray
   * @see DatabaseArray.setDefault - sets default a value from the DatabaseArray
   * @see DatabaseArray.getNormal - gets a value from the DatabaseArray and normalizes it
   * @see DatabaseArray.get - gets a value from the DatabaseArray
   * @see DatabaseArray.contains - checks if the DatabaseArray contains a value
   * @see DatabaseArray.push - push a value into the DatabaseArray
   *
   */
  public update(key: number | string | Array<string | number>, update: (e : DatabaseValue) =>  DatabaseInsertable ): this {
    this.set(key, update(this.get(key)));
    return this;
  }


  /**
   * Checks if the DatabaseArray contains a value
   *
   * @author Nicolas Schmidt
   * @param key the path to check
   * @returns does the array contains the value
   *
   * @see DatabaseArray - 👩‍👦 the parent class
   * @see DatabaseArray.set - sets a value from the DatabaseArray
   * @see DatabaseArray.setDefault - sets default a value from the DatabaseArray
   * @see DatabaseArray.get - gets a value from the DatabaseObject
   * @see DatabaseArray.getNormal - gets a value from the DatabaseArray and normalizes it
   * @see DatabaseArray.update - updates a value from the DatabaseObject
   * @see DatabaseArray.push - push a value into the DatabaseArray
   *
   */
  public contains(key: number | string | Array<string | number>): boolean {

    if(typeof key == "string") return this.contains(key.split(/[.\[\]]/g));
    else if(typeof key == "number") return this._data[key] != null;
    else {
      if(key.length > 1) {
        let e = <DatabaseObject | DatabaseArray><unknown> this._data[<number>key[0]];
        if(!(e instanceof DatabaseObject || e instanceof DatabaseArray)) return false;
        return e?.contains(key.slice(1, key.length));
      } else {
        return (this._data[typeof key[0] == "string" ? parseInt(key[0]) : key[0]]) != null;
      }
    }
  }


  /**
   * Pushs a value into the DatabaseArray
   *
   * @author Nicolas Schmidt
   * @param value the value to push into the array
   * @returns the DatabaseArray itself, so you can chain operations like that
   *
   * @see DatabaseArray - 👩‍👦 the parent class
   * @see DatabaseArray.set - sets a value from the DatabaseArray
   * @see DatabaseArray.setDefault - sets default a value from the DatabaseArray
   * @see DatabaseArray.get - gets a value from the DatabaseArray
   * @see DatabaseArray.getNormal - gets a value from the DatabaseArray and normalizes it
   * @see DatabaseArray.update - updates a value from the DatabaseArray
   * @see DatabaseArray.contains - checks if the DatabaseArray contains a value
   *
   */
  public push(...values: DatabaseInsertable[]): this {

    this._data.push(...values.map(v => createDatabaseValue(v)));
    return this;
    
  }
}





/**
 * A DatabaseObject is the database-representation of an object.
 *
 * @author Nicolas Schmidt
 *
 * @see DatabaseObject.data
 * @see DatabaseObject.constructor
 * @see DatabaseObject.set
 * @see DatabaseObject.get
 * @see DatabaseObject.update
 */
export class DatabaseObject {


  /**
   * The real object-contents of the DatabaseObject
   *
   * @author Nicolas Schmidt
   *
   * @see DatabaseObject - 👩‍👦 the parent class
   * @see DatabaseObject.data - the getter and setter for the data
   *
   */
  protected _data!: JSObject;


  /**
   * The data of the DatabaseObject
   *
   * @author Nicolas Schmidt
   *
   * @see DatabaseObject - 👩‍👦 the parent class
   * @see DatabaseObject._data - the storage for the data
   *
   */
  public set data(data : JSObject) {
    this._data = [];
    Object.keys(data).forEach(k => this._data[k] = createDatabaseValue(data[k]));
  }

  public get data(): JSObject {
    let data: JSObject = {};
    Object.keys(this._data).forEach(k => data[k] = getNormalValue(this._data[k]));
    return data;
  }


  /**
   * Returns the length of the object
   *
   * @author Nicolas Schmidt
   *
   * @see DatabaseArray - 👩‍👦 the parent class
   * @see DatabaseArray.data - the data of the array
   *
   */
  public get length(): number {
    return Object.keys(this._data).length;
  }


  /**
   * Constructor for DatabaseObject
   *
   * @author Nicolas Schmidt
   * @param data the data for the database-array
   *
   * @see DatabaseObject - 👩‍👦 the parent class
   * @see DatabaseObject.data - the argument you give to the constructor
   *
   */
  constructor(
    data: JSObject = {},
  ) { this.data = data; }


  /**
   * Sets a value from the DatabaseObject.
   *
   * @author Nicolas Schmidt
   * @param key the path to apply the value to
   * @param value the value to apply to the given path
   * @returns the DatabaseObject itself, so you can chain operations like that
   *
   * @see DatabaseObject - 👩‍👦 the parent class
   * @see DatabaseObject.get - gets a value from the DatabaseObject
   * @see DatabaseObject.getNormal - gets a normalized value from the DatabaseObject
   * @see DatabaseObject.update - updates a value from the DatabaseObject
   * @see DatabaseObject.contains - checks if the DatabaseObject contains a value
   *
   */
  public set(key: string | Array<string | number>, value : DatabaseInsertable): this {
    if(typeof key == "string") return this.set(key.split(/[.\[\]]/g), value);
    else {
      if(key.length > 1) {
        if(this._data[key[0]] == null) this._data[key[0]] = createObjectForKey(key);
        let e = this._data[key[0]];
        if(!(e instanceof DatabaseObject || e instanceof DatabaseArray)) 
          throw new Error(`Can't use set property of ${typeof e}`);
        (<DatabaseObject | DatabaseArray><unknown>e).set(key.slice(1, key.length), value)
      } else {
        this._data[key[0]] = createDatabaseValue(value);
      }
    }
    return this;
  }

  /**
   * Sets a default value from the DatabaseObject.
   *
   * @author Nicolas Schmidt
   * @param key the path to apply the value to
   * @param value the value to apply to the given path
   * @returns the DatabaseObject itself, so you can chain operations like that
   *
   * @see DatabaseObject - 👩‍👦 the parent class
   * @see DatabaseObject.set - sets a value from the DatabaseObject
   * @see DatabaseObject.get - gets a value from the DatabaseObject
   * @see DatabaseObject.update - updates a value from the DatabaseObject
   * @see DatabaseObject.contains - checks if the DatabaseObject contains a value
   *
   */
  public setDefault(key: string | Array<string | number>, value : DatabaseInsertable): this {
    if(!this.contains(key)) this.set(key, value);
    return this;
  }


  /**
   * Sets default values for the DatabaseObject.
   *
   * @author Nicolas Schmidt
   * @param defaults an object containing all the default values
   * @returns the DatabaseObject itself, so you can chain operations like that
   *
   * @see DatabaseObject - 👩‍👦 the parent class
   * @see DatabaseObject.set - sets a value from the DatabaseObject
   * @see DatabaseObject.get - gets a value from the DatabaseObject
   * @see DatabaseObject.update - updates a value from the DatabaseObject
   * @see DatabaseObject.contains - checks if the DatabaseObject contains a value
   *
   */
  public setDefaults (defaults : JSObject): this {
    Object.keys(defaults).forEach(k => {
      if(!this._data[k]) this._data[k] = createDatabaseValue(defaults[k]);
      else if(defaults[k] instanceof Object && this._data[k] instanceof DatabaseObject) this._data[k].setDefaults(defaults[k]);
    });
    return this;
  }


  /**
   * Gets a value from the DatabaseObject.
   *
   * @author Nicolas Schmidt
   * @param key the path to get
   * @returns the value at the position
   *
   * @see DatabaseObject - 👩‍👦 the parent class
   * @see DatabaseObject.set - sets a value from the DatabaseObject
   * @see DatabaseObject.getNormal - gets a normalized value from the DatabaseObject
   * @see DatabaseObject.update - updates a value from the DatabaseObject
   * @see DatabaseObject.contains - checks if the DatabaseObject contains a value
   *
   */
  public get(key: string | Array<string | number>): DatabaseValue {

    if(typeof key == "string") return this.get(key.split(/[.\[\]]/g));
    else {
      if(key.length > 1) {
        let e = <DatabaseObject | DatabaseArray><unknown> this._data[key[0]];
        if(!(e instanceof DatabaseObject || e instanceof DatabaseArray)) return undefined;
        return e?.get(key.slice(1, key.length));
      } else {
        return this._data[<string>key[0]];
      }
    }
  }


  /**
   * Gets a value from the DatabaseObject and normalizes it
   *
   * @author Nicolas Schmidt
   * @param key the path to get
   * @returns the normalized value at the position
   *
   * @see DatabaseObject - 👩‍👦 the parent class
   * @see DatabaseObject.set - sets a value from the DatabaseObject
   * @see DatabaseObject.get - gets a value from the DatabaseObject
   * @see DatabaseObject.update - updates a value from the DatabaseObject
   * @see DatabaseObject.contains - checks if the DatabaseObject contains a value
   *
   */
  public getNormal(key: string | Array<string | number>): DatabaseValueAble {
    return getNormalValue(this.get(key));
  }


  /**
   * Updates a value from the DatabaseObject.
   *
   * @author Nicolas Schmidt
   * @param key the path to update
   * @param update the function to update the value
   * @returns the DatabaseObject itself, so you can chain operations like that
   *
   * @see DatabaseObject - 👩‍👦 the parent class
   * @see DatabaseObject.set - sets a value from the DatabaseObject
   * @see DatabaseObject.get - gets a value from the DatabaseObject
   * @see DatabaseObject.contains - checks if the DatabaseObject contains a value
   *
   */
  public update(key: string | Array<string | number>, update: (e :  DatabaseValue ) =>  DatabaseInsertable): this {
    this.set(key, update(this.get(key)));
    return this;
  }


  public generateId(name: string): number {
    let counter: string = `id_counters.${name}`;
    if(this.get(counter) == null) this.set(counter, -1);
    return <number> this.update(counter, (e) => (<number>e)+1).get(counter);
  }

  /**
   * Checks if the DatabaseObject contains a value
   *
   * @author Nicolas Schmidt
   * @param key the path to apply the value to
   * @returns the value at the position of the position
   *
   * @see DatabaseObject - 👩‍👦 the parent class
   * @see DatabaseObject.set - sets a value from the DatabaseObject
   * @see DatabaseObject.get - gets a value from the DatabaseObject
   * @see DatabaseObject.update - updates a value from the DatabaseObject
   *
   */
  public contains(key: string | Array<string | number>): boolean {

    if(typeof key == "string") return this.contains(key.split(/[.\[\]]/g));
    else {
      if(key.length > 1) {
        let e = <DatabaseObject | DatabaseArray><unknown> this._data[key[0]];
        if(!(e instanceof DatabaseObject || e instanceof DatabaseArray)) return false;
        return e?.contains(key.slice(1, key.length));
      } else {
        return this._data[<string>key[0]] != null;
      }
    }
  }

}





/**
 * Database class is basically a DatabaseObject with save and load functionality
 *
 * @see SyncDatabase
 * @see Database.saveData
 * @see Database.reloadData
 *
 * @see DatabaseObject
 * @see DatabaseObject.data
 * @see DatabaseObject.constructor
 * @see DatabaseObject.set
 * @see DatabaseObject.get
 * @see DatabaseObject.update
 */
export class Database extends DatabaseObject {


  /**
   * Constructor for Database class
   *
   * @author Nicolas Schmidt
   * @param adapter the adapter to get the data from / save the data to
   * @param data the data to create the database with
   *
   * @see Database - 👩‍👦 the parent class
   */
  constructor(
    public adapter: DatabaseAdapter,
    data: Object
  ) {
    super(data);
    this.adapter = adapter;
  }

  /**
   * Save the data from the database
   *
   * @author Nicolas Schmidt
   * @returns ⌛ Promise (Ready when saved) >> the database itself, so you can chain operations
   */
  public async saveData (): Promise<this> { await this.adapter.save(this.data); return this; }

  /**
   * Reload the data from the database
   *
   * @author Nicolas Schmidt
   * @returns ⌛ Promise (Ready when loaded) >> the database itself, so you can chain operations
   */
  public async reloadData(): Promise<this> { this.data = await this.adapter.load(); return this; }

}





/**
 * SyncDatabase is a database that does not use promises.
 *
 * @see Database
 * @see SyncDatabase.saveData
 * @see SyncDatabase.reloadData
 *
 * @see DatabaseObject
 * @see DatabaseObject.data
 * @see DatabaseObject.constructor
 * @see DatabaseObject.set
 * @see DatabaseObject.get
 * @see DatabaseObject.update
 */
export class SyncDatabase extends DatabaseObject {


  /**
   * Constructor for Database class
   *
   * @author Nicolas Schmidt
   * @param adapter the adapter to get the data from / save the data to
   * @param data the data to create the database with
   *
   * @see Database - 👩‍👦 the parent class
   */
  constructor(
    public adapter: SyncDatabaseAdapter,
    data?: Object
  ) {
    super(data || adapter.load());
    this.adapter = adapter;
  }

  /**
   * Save the data from the database
   *
   * @author Nicolas Schmidt
   * @returns the database itself, so you can chain operations
   */
  public saveData (): this { this.adapter.save(this.data); return this; }

  /**
   * Reload the data from the database
   *
   * @author Nicolas Schmidt
   * @returns the database itself, so you can chain operations
   */
  public reloadData(): this { this.data = this.adapter.load(); return this; }

}

/**
 * Creates a database from a given adapter
 *
 * @author Nicolas Schmidt
 * @param adapter the databaseAdapter
 * @returns ⌛ Promise (Ready when loaded) >> the database
 *
 */
export function createDatabase(adapter: DatabaseAdapter): Promise<Database>;

/**
 * Creates a sync-database from a given adapter
 *
 * @author Nicolas Schmidt
 * @param adapter the databaseAdapter
 * @returns the SyncDatabase
 *
 */
export function createDatabase(adapter: SyncDatabaseAdapter): SyncDatabase;

/**
 * Creates a database from a given adapter
 *
 * @author Nicolas Schmidt
 * @param adapter the databaseAdapter
 * @returns the Database
 *
 */
export function createDatabase(adapter: DatabaseAdapter | SyncDatabaseAdapter): Promise<Database> | SyncDatabase;
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





function createObjectForKey(key: string | Array<string | number>): DatabaseObject | DatabaseArray {
  if(typeof key == "string") return createObjectForKey(key.split(/[.\[\]]/g));
  if(typeof key[1] == 'number' || (typeof key[1] == 'string' && isNumberString(key[1]))) return new DatabaseArray([]);
  return new DatabaseObject();
}

const numberCharacters = "0123456789";

function isNumberString(s: string): boolean {
  for(let i = 0; i < s.length; i++) if(!numberCharacters.includes(s.charAt(i))) return false;
  return true;
}

export type DatabaseValue = DatabaseObject | DatabaseArray | number | string | boolean | null | undefined;
export type DatabaseValueAble = any[] | JSObject | number | string | boolean | null | undefined;
export type DatabaseInsertable = DatabaseValue | DatabaseValueAble;
export interface JSObject {[key: string] : any};