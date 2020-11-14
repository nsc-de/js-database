// jshint esversion: 8

const { assert } = require('chai');
const fs = require('fs-extra');
const path = require('path');
const { SyncJsonFileAdapter } = require('../../../../../json_adapter');

const test_file = path.join(__dirname, '../../../../assets/adapter_test.json');
const non_existing = path.join(__dirname, '../../../../assets/not-existing.json');
const test_data = {testData: "test"};

async function deleteNonExisting() {
  if(await fs.exists(non_existing)) await fs.remove(non_existing);
}



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