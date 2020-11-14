// jshint esversion: 8

const { assert } = require('chai');
const fs = require('fs-extra');
const path = require('path');
const yaml = require('js-yaml');
const { SyncYamlFileAdapter } = require('../../../../../yaml_adapter');

let non_existing = path.join(__dirname, '../../../../assets/not-existing.yml');
let test_data = {testData: "test"};

async function deleteNonExisting() {
  if(await fs.exists(non_existing)) await fs.remove(non_existing);
}



describe('#save()', () => {

  // empty >> {}
  it('should save the data', async () => {

    await deleteNonExisting();

    const adapter = new SyncYamlFileAdapter(non_existing);
    adapter.save(test_data);

    assert.isTrue(await fs.exists(non_existing));
    assert.deepEqual(yaml.load(await fs.readFile(non_existing)), test_data);

    await deleteNonExisting();
    
  });

});