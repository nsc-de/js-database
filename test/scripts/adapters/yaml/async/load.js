// jshint esversion: 8

const { assert } = require('chai');
const fs = require('fs-extra');
const path = require('path');
const { YamlFileAdapter } = require('../../../../../yaml_adapter');

let non_existing = path.join(__dirname, '../../../../assets/not-existing.yml');
let test_file = path.join(__dirname, '../../../../assets/adapter_test.yml');
let test_data = {testData: "test"};

async function deleteNonExisting() {
  if(await fs.exists(non_existing)) await fs.remove(non_existing);
}



describe('#load()', () => {

  // empty >> {}
  it('should give back an empty object', async () => {

    await deleteNonExisting();

    const adapter = new YamlFileAdapter(non_existing);
    const loaded = await adapter.load();
    assert.typeOf(loaded, 'object');
    assert.strictEqual(Object.keys(loaded).length, 0);
  });

  // test loading data
  it('should give back the data from the file', async () => {
    const adapter = new YamlFileAdapter(test_file);
    const loaded = await adapter.load();
    assert.typeOf(loaded, 'object');
    assert.deepEqual(loaded, test_data);
  });

});