// jshint esversion: 8

const { assert } = require('chai');
const db = require('../../../../../database');

const dummyAdapter = { load: () => { return {}; }, save: () => {} };



describe('#length', () => {

  it('test object length (length 0)', () => {
    
    const object = new db.SyncDatabase(dummyAdapter, {});
    assert.strictEqual(object.length, 0);

  });

  
  it('test object length (length 1)', () => {

    const object = new db.SyncDatabase(dummyAdapter, {test: "test"});
    assert.strictEqual(object.length, 1);

  });


  it('test object length (length 6)', () => {

    const object = new db.SyncDatabase(dummyAdapter, {test: "test", test2: "test2", test3: 0, test4: true, test5: {}, test6: []});
    assert.strictEqual(object.length, 6);

  });
  
});