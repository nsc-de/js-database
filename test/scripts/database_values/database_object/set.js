// jshint esversion: 8

const { assert } = require('chai');
const db = require('../../../../database');



describe('#set()', () => {

  it('test basic set', () => {

    const object = new db.DatabaseObject({test: "test"});
    object.set("test2", "test2");
    assert.deepEqual(object.data, {test: "test", test2: "test2"});

  });


  it('test deep set', () => {

    const object = new db.DatabaseObject({test: "test", test2: {}});
    object.set("test2.test2", "test2");
    assert.deepEqual(object.data, {test: "test", test2: {test2: "test2"}});

  });


  it('test deep set with multiple objects to create', () => {

    const object = new db.DatabaseObject({test: "test"});
    object.set("test2.test2", "test2");
    assert.deepEqual(object.data, {test: "test", test2: {test2: "test2"}});

  });


  it('test deep set with wrong type (string) (should throw error)', () => {

    const object = new db.DatabaseObject({test: "test", test2: ""});
    assert.throw(() => object.set("test2.test2", "test2"), Error, "Can't use set property of string");
    
  });


  it('test deep set with wrong type (number) (should throw error)', () => {

    const object = new db.DatabaseObject({test: "test", test2: 1});
    assert.throw(() => object.set("test2.test2", "test2"), Error, "Can't use set property of number");
    
  });


  it('test deep set with wrong type (boolean) (should throw error)', () => {

    const object = new db.DatabaseObject({test: "test", test2: true});
    assert.throw(() => object.set("test2.test2", "test2"), Error, "Can't use set property of boolean");

  });
  
});