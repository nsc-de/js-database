// jshint esversion: 8

const { assert } = require('chai');
const db = require('../../../../../database');

const dummyAdapter = { load: async () => { return {}; }, save: async () => {} };



describe('#contains()', () => {

  it('test basic contains', () => {

    const object = new db.Database(dummyAdapter, {test: "test"});
    assert.strictEqual(object.contains("test"), true);
    assert.strictEqual(object.contains("test2"), false);

  });


  it('test deep contains', () => {

    const object = new db.Database(dummyAdapter, {test: {test: "test"}});
    assert.strictEqual(object.contains("test.test"), true);
    assert.strictEqual(object.contains("test.test2"), false);
    assert.strictEqual(object.contains("test2.test"), false);

  });
  
});