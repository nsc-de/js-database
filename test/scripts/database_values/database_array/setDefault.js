// jshint esversion: 8

const { assert } = require('chai');
const db = require('../../../../database');



describe('#setDefault()', () => {
  
  it('test basic set', () => {

    const object = new db.DatabaseArray(["test"]);
    object.setDefault("1", "test2");
    assert.deepEqual(object.data, ["test", "test2"]);
    object.setDefault("test2", "test2a");
    assert.deepEqual(object.data, ["test", "test2"]);

  });


  it('test deep set', () => {

    const object = new db.DatabaseArray(["test", []]);
    object.setDefault("1.0", "test2");
    assert.deepEqual(object.data, ["test", ["test2"]]);
    object.setDefault("test2.test2", "test2a");
    assert.deepEqual(object.data, ["test", ["test2"]]);

  });


  it('test deep set with multiple objects to create', () => {

    const object = new db.DatabaseArray(["test"]);
    object.setDefault("1.0", "test2");
    assert.deepEqual(object.data, ["test", ["test2"]]);
    object.setDefault("1.0", "test2a");
    assert.deepEqual(object.data, ["test", ["test2"]]);

  });

});