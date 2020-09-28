// jshint esversion: 6

const { assert } = require('chai');
const { describe } = require('mocha');
const db = require('nscdb');


// Test createDatabaseValue
describe('createDatabaseValue()', () => {

  // string >> string
  it('should give back the same string', () => {
    assert.strictEqual(db.createDatabaseValue(""), "");
    assert.strictEqual(db.createDatabaseValue("hello world"), "hello world");
  });


  // number >> number
  it('should give back the same number', () => {
    assert.strictEqual(db.createDatabaseValue(0), 0);
    assert.strictEqual(db.createDatabaseValue(12), 12);
  });


  // boolean >> boolean
  it('should give back the same boolean', () => {
    assert.strictEqual(db.createDatabaseValue(true), true);
    assert.strictEqual(db.createDatabaseValue(false), false);
  });


  // array >> DatabaseArray
  it('should give back a DatabaseArray', () => {
    const array = db.createDatabaseValue([0, 1, 2, 3]);
    assert.instanceOf(array, db.DatabaseArray);
  });

  // DatabaseArray >> DatabaseArray
  it('should give back the same DatabaseArray', () => {
    const array = db.createDatabaseValue({test: 'test'});
    assert.equal(array, db.createDatabaseValue(array));
  });


  // object >> DatabaseObject
  it('should give back a DatabaseObject', () => {
    const array = db.createDatabaseValue({'test': 'test'});
    assert.instanceOf(array, db.DatabaseObject);
  });

  // DatabaseObject >> DatabaseObject
  it('should give back the same DatabaseObject', () => {
    const array = db.createDatabaseValue({'test': 'test'});
    assert.equal(array, db.createDatabaseValue(array));
  });
});