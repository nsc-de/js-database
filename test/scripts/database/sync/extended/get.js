// jshint esversion: 8

const { assert } = require('chai');
const db = require('../../../../../database');

const dummyAdapter = { load: () => { return {}; }, save: () => {} };



describe('#get()', () => {
  
  it('test basic get', () => {

    const object = new db.SyncDatabase(dummyAdapter, {test: "test"});
    assert.equal(object.get("test"), "test");

  });


  it('test deep get', () => {

    const object = new db.SyncDatabase(dummyAdapter, {test: {test: "test"}});
    assert.equal(object.get("test.test"), "test");

  });

});