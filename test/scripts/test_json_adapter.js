// jshint esversion: 8

const { assert } = require('chai');
const fs = require('fs-extra');
const { describe } = require('mocha');
const path = require('path');
const { JsonFileAdapter, SyncJsonFileAdapter } = require('nscdb/json_adapter');

let non_existing = path.join(__dirname, '../assets/not-existing.json');
let test_file = path.join(__dirname, '../assets/adapter_test.json');
let test_data = {testData: "test"};

async function deleteNonExisting() {
  if(await fs.exists(non_existing)) await fs.remove(non_existing);
}

// Test createDatabaseValue
describe('JsonFileAdapter', () => {

  describe('#save()', () => {

    // empty >> {}
    it('should save the data', async () => {

      await deleteNonExisting();

      const adapter = new JsonFileAdapter(non_existing);
      await adapter.save(test_data);

      assert.isTrue(await fs.exists(non_existing));
      assert.deepEqual(JSON.parse(await fs.readFile(non_existing)), test_data);

      await deleteNonExisting();
      
    });

  });



  describe('#load()', () => {

    // empty >> {}
    it('should give back an empty object', async () => {

      await deleteNonExisting();

      const adapter = new JsonFileAdapter(non_existing);
      const loaded = await adapter.load();
      assert.typeOf(loaded, 'object');
      assert.strictEqual(Object.keys(loaded).length, 0);
    });

    // test loading data
    it('should give back the data from the file', async () => {
      const adapter = new JsonFileAdapter(test_file);
      const loaded = await adapter.load();
      assert.typeOf(loaded, 'object');
      assert.deepEqual(loaded, test_data);
    });

  });

});


// Test createDatabaseValue
describe('AsyncJsonFileAdapter', () => {

  describe('#save()', () => {

    // empty >> {}
    it('should save the data', async () => {

      await deleteNonExisting();

      const adapter = new SyncJsonFileAdapter(non_existing);
      adapter.save(test_data);

      assert.isTrue(await fs.exists(non_existing));
      assert.deepEqual(JSON.parse(await fs.readFile(non_existing)), test_data);

      await deleteNonExisting();
      
    });

  });



  describe('#load()', () => {

    // empty >> {}
    it('should give back an empty object', async () => {

      await deleteNonExisting();

      const adapter = new SyncJsonFileAdapter(non_existing);
      const loaded = adapter.load();
      assert.typeOf(loaded, 'object');
      assert.strictEqual(Object.keys(loaded).length, 0);
    });

    // test loading data
    it('should give back the data from the file', async () => {
      const adapter = new SyncJsonFileAdapter(test_file);
      const loaded = adapter.load();
      assert.typeOf(loaded, 'object');
      assert.deepEqual(loaded, test_data);
    });

  });

});
