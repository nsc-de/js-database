// jshint esversion: 8

const { assert } = require('chai');
const db = require('../../../../../database');

const dummyAdapter = { load: async () => { return {}; }, save: async () => {} };



describe('#getNormal()', () => {

  it('test basic getNormal', () => {
    
    const object = new db.Database(dummyAdapter, {test: "test"});
    assert.equal(object.getNormal("test"), "test");

  });


  it('test deep getNormal', () => {

    const object = new db.Database(dummyAdapter, {test: {test: "test"}, test2: ["aaa"]});
    assert.equal(object.getNormal("test.test"), "test");

  });


  it('test getNormal for object', () => {

    const object = new db.Database(dummyAdapter, {test: {test: "test"}, test2: ["aaa"]});
    assert.deepEqual(object.getNormal("test"), {test: "test"});
    assert.deepEqual(object.getNormal("test2"), ["aaa"]);

  });
  
});