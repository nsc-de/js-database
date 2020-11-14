// jshint esversion: 8

const { assert } = require('chai');
const db = require('../../../../../database');

const dummyAdapter = { load: () => { return {}; }, save: () => {} };



describe('#setDefault()', () => {
  
  it('test basic set', () => {

    const object = new db.SyncDatabase(dummyAdapter, {test: "test"});
    object.setDefault("test2", "test2");
    assert.deepEqual(object.data, {test: "test", test2: "test2"});
    object.setDefault("test2", "test2a");
    assert.deepEqual(object.data, {test: "test", test2: "test2"});

  });


  it('test deep set', () => {

    const object = new db.SyncDatabase(dummyAdapter, {test: "test", test2: {}});
    object.setDefault("test2.test2", "test2");
    assert.deepEqual(object.data, {test: "test", test2: {test2: "test2"}});
    object.setDefault("test2.test2", "test2a");
    assert.deepEqual(object.data, {test: "test", test2: {test2: "test2"}});

  });


  it('test deep set with multiple objects to create', () => {

    const object = new db.SyncDatabase(dummyAdapter, {test: "test"});
    object.setDefault("test2.test2", "test2");
    assert.deepEqual(object.data, {test: "test", test2: {test2: "test2"}});
    object.setDefault("test2.test2", "test2a");
    assert.deepEqual(object.data, {test: "test", test2: {test2: "test2"}});

  });
  
});