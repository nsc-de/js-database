// jshint esversion: 8

const { assert } = require('chai');
const db = require('../../../../database');

const dummyAdapter = { load: () => { return {}; }, save: () => {} };



describe('#saveData()', () => {

  it('test save', async () => {

    let data = null;

    (new db.SyncDatabase({

      load: dummyAdapter.load,
      save: async (d) => data = d,

    }, {testData: "test"})).saveData();

    assert.deepEqual(data, {testData: "test"});

  });
  
});