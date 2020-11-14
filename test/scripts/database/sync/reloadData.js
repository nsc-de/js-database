// jshint esversion: 8

const { assert } = require('chai');
const db = require('../../../../database');

const dummyAdapter = { load: () => { return {}; }, save: () => {} };



describe('#reloadData()', () => {

  it('test save', async () => {

    const database = new db.SyncDatabase({

      load: () => { 
        return {testData: "test"}; 
      },
      save: dummyAdapter.save,

    }, {}).reloadData();

    assert.deepEqual(database.data, {testData: "test"});

  });
  
});