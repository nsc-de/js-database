// jshint esversion: 8

const { assert } = require('chai');
const fs = require('fs-extra');
const path = require('path');
const xml = require('xml-js');
const { XMLFileAdapter, SyncXMLFileAdapter } = require('nscdb/xml_adapter');

let non_existing = path.join(__dirname, '../assets/not-existing.xml');
let test_file = path.join(__dirname, '../assets/adapter_test.xml');
let test_data = {testData: "test"};

async function deleteNonExisting() {
  if(await fs.exists(non_existing)) await fs.remove(non_existing);
}

// Test createDatabaseValue
describe('XMLFileAdapter', () => {

  describe('#save()', () => {

    // empty >> {}
    it('should save the data', async () => {

      await deleteNonExisting();

      const adapter = new XMLFileAdapter(non_existing);
      await adapter.save(test_data);

      assert.isTrue(await fs.exists(non_existing));
      assert.deepEqual(xml.xml2js(await fs.readFile(non_existing)), test_data);

      await deleteNonExisting();
      
    });

  });



  describe('#load()', () => {

    // empty >> {}
    it('should give back an empty object', async () => {

      await deleteNonExisting();

      const adapter = new XMLFileAdapter(non_existing);
      const loaded = await adapter.load();
      assert.typeOf(loaded, 'object');
      assert.strictEqual(Object.keys(loaded).length, 0);
    });

    // test loading data
    it('should give back the data from the file', async () => {
      const adapter = new XMLFileAdapter(test_file);
      const loaded = await adapter.load();
      assert.typeOf(loaded, 'object');
      assert.deepEqual(loaded, test_data);
    });

  });

});


// Test createDatabaseValue
describe('AsyncXMLFileAdapter', () => {

  describe('#save()', () => {

    // empty >> {}
    it('should save the data', async () => {

      await deleteNonExisting();

      const adapter = new SyncXMLFileAdapter(non_existing);
      adapter.save(test_data);

      assert.isTrue(await fs.exists(non_existing));
      assert.deepEqual(xml.xml2js(await fs.readFile(non_existing)), test_data);

      await deleteNonExisting();
      
    });

  });



  describe('#load()', () => {

    // empty >> {}
    it('should give back an empty object', async () => {

      await deleteNonExisting();

      const adapter = new SyncXMLFileAdapter(non_existing);
      const loaded = adapter.load();
      assert.typeOf(loaded, 'object');
      assert.strictEqual(Object.keys(loaded).length, 0);
    });

    // test loading data
    it('should give back the data from the file', async () => {
      const adapter = new SyncXMLFileAdapter(test_file);
      const loaded = adapter.load();
      assert.typeOf(loaded, 'object');
      assert.deepEqual(loaded, test_data);
    });

  });

});
