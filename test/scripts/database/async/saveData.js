// jshint esversion: 8

const { assert } = require('chai');
const db = require('../../../../database');

const dummyAdapter = { load: async () => { return {}; }, save: async () => {} };



describe('#saveData()', () => {

  it('test save', async () => {

    let data = null;

    await (new db.Database({

      load: dummyAdapter.load,
      save: async (d) => data = d,

    }, {testData: "test"})).saveData();

    assert.deepEqual(data, {testData: "test"});

  });
  
});