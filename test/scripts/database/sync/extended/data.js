// jshint esversion: 8

const { assert } = require('chai');
const db = require('../../../../../database');

const dummyAdapter = { load: () => { return {}; }, save: () => {} };



describe('#data', () => {
  
  it('object set & get data', () => {

    const object = new db.SyncDatabase(dummyAdapter, {test: "test"});
    assert.deepEqual(object.data, {test: "test"});
    object.data = {test: "test", test2: "test2"};
    assert.deepEqual(object.data, {test: "test", test2: "test2"});

  });
  
});