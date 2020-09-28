// jshint esversion: 6

const { assert } = require('chai');
const { describe } = require('mocha');
const db = require('nscdb');


// Test createDatabaseValue
describe('getNormalValue()', () => {

  // string >> same string
  it('should give back the same string', () => {
    assert.strictEqual(db.getNormalValue(""), "");
    assert.strictEqual(db.getNormalValue("hello world"), "hello world");
  });


  // number >> same number
  it('should give back the same number', () => {
    assert.strictEqual(db.getNormalValue(0), 0);
    assert.strictEqual(db.getNormalValue(12), 12);
  });


  // boolean >> same boolean
  it('should give back a boolean', () => {
    assert.strictEqual(db.getNormalValue(true), true);
    assert.strictEqual(db.getNormalValue(false), false);
  });


  // DatabaseArray >> array
  it('should give back a DatabaseArray', () => {
    const array = db.getNormalValue(new db.DatabaseArray([0, 1, 2, 3]));
    assert.typeOf(array, 'array');
  });

  // array >> array
  it('should give back the same array', () => {
    const array = [0, 1, 2, 3];
    assert.deepEqual(array, db.getNormalValue(array));
  });


  // DatabaseObject >> object
  it('should give back a DatabaseObject', () => {
    const object = db.getNormalValue(new db.DatabaseObject({test: 'test'}));
    assert.typeOf(object, 'object');
  });

  // object >> object
  it('should give back the same DatabaseObject', () => {
    const object = {test: 'test'};
    assert.deepEqual(object, db.getNormalValue(object));
  });
});