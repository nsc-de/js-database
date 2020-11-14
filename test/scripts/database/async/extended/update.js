// jshint esversion: 8

const { assert } = require('chai');
const db = require('../../../../../database');

const dummyAdapter = { load: async () => { return {}; }, save: async () => {} };



describe('#update()', () => {

  it('test basic update', () => {

    const object = new db.Database(dummyAdapter, {test: "test"});
    assert.deepEqual(object.update("test", str => str + '2').data, {test: "test2"});

  });

  
  it('test deep update', () => {

    const object = new db.Database(dummyAdapter, {test: {test: "test"}});
    assert.deepEqual(object.update("test.test", str => str + '2').data, {test: {test: "test2"}});

  });

});