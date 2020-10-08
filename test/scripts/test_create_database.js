// jshint esversion: 8

const { assert } = require('chai');
const db = require('nscdb');


// Test createDatabase
describe('createDatabase()', () => {

  // async adapter >> async database
  it('create a async database using an async adapter', async () => {
    let adapter = {
      load: async () => { return {}; /* give back some data */ },
      save: async () => { /* Do nothing */}
    };
    let database = await db.createDatabase(adapter);
    assert.instanceOf(database, db.Database);
  });

  // sync adapter >> sync database
  it('create a async database using an async adapter', async () => {
    let adapter = {
      load: () => { return {}; /* give back some data */ },
      save: () => { /* Do nothing */}
    };
    let database = db.createDatabase(adapter);
    assert.instanceOf(database, db.SyncDatabase);
  });
});