// jshint esversion: 8

const { assert } = require('chai');
const db = require('../../../../database');

const dummyAdapter = { load: async () => { return {}; }, save: async () => {} };



describe('#reloadData()', () => {

  it('test save', async () => {

    const database = await (new db.Database({

      load: async () => { 
        return {testData: "test"}; 
      },
      save: dummyAdapter.save,

    }, {testData: "test"})).reloadData();

    assert.deepEqual(database.data, {testData: "test"});

  });
  
});