// jshint esversion: 8

const { assert } = require('chai');
const db = require('../../../../database');



describe('#setDefault()', () => {

  it('test basic set', () => {

    const object = new db.DatabaseObject({test: "test"});
    object.setDefault("test2", "test2");
    assert.deepEqual(object.data, {test: "test", test2: "test2"});
    object.setDefault("test2", "test2a");
    assert.deepEqual(object.data, {test: "test", test2: "test2"});

  });


  it('test deep set', () => {

    const object = new db.DatabaseObject({test: "test", test2: {}});
    object.setDefault("test2.test2", "test2");
    assert.deepEqual(object.data, {test: "test", test2: {test2: "test2"}});
    object.setDefault("test2.test2", "test2a");
    assert.deepEqual(object.data, {test: "test", test2: {test2: "test2"}});

  });


  it('test deep set with multiple objects to create', () => {

    const object = new db.DatabaseObject({test: "test"});
    object.setDefault("test2.test2", "test2");
    assert.deepEqual(object.data, {test: "test", test2: {test2: "test2"}});
    object.setDefault("test2.test2", "test2a");
    assert.deepEqual(object.data, {test: "test", test2: {test2: "test2"}});

  });
  
});