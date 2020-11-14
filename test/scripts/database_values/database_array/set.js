// jshint esversion: 8

const { assert } = require('chai');
const db = require('../../../../database');



describe('#set()', () => {

  it('test basic set', () => {

    const array = new db.DatabaseArray([0]);
    array.set("0", 1);
    assert.deepEqual(array.data, [1]);

  });


  it('test deep set', () => {

    const object = new db.DatabaseArray(["test", ["test"]]);
    object.set("1.1", "test2");
    assert.deepEqual(object.data, ["test", ["test", "test2"]]);

  });


  it('test deep set with multiple objects to create', () => {

    const object = new db.DatabaseArray(["test"]);
    object.set("1.0", "test2");
    assert.deepEqual(object.data, ["test", ["test2"]]);

  });


  it('test deep set with wrong type (string) (should throw error)', () => {

    const object = new db.DatabaseArray(["test", ""]);
    assert.throw(() => object.set("1.0", "test2"), Error, "Can't use set property of string");

  });


  it('test deep set with wrong type (number) (should throw error)', () => {

    const object = new db.DatabaseArray(["test", 1]);
    assert.throw(() => object.set("1.0", "test2"), Error, "Can't use set property of number");

  });


  it('test deep set with wrong type (boolean) (should throw error)', () => {

    const object = new db.DatabaseArray(["test", true]);
    assert.throw(() => object.set("1.0", "test2"), Error, "Can't use set property of boolean");

  });
  
});