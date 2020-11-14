// jshint esversion: 8

const { assert } = require('chai');
const fs = require('fs-extra');
const path = require('path');
const { SyncJsonFileAdapter } = require('../../../../../json_adapter');

const non_existing = path.join(__dirname, '../../../../assets/not-existing.json');
const test_data = {testData: "test"};

async function deleteNonExisting() {
  if(await fs.exists(non_existing)) await fs.remove(non_existing);
}



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

  // Save the data beautified
  it('should save the data beautified', async () => {

    await deleteNonExisting();

    const adapter = new SyncJsonFileAdapter(non_existing, { beautify: true });
    await adapter.save(test_data);

    assert.isTrue(await fs.exists(non_existing));
    assert.equal("{\n  \"testData\": \"test\"\n}", await fs.readFile(non_existing));

    await deleteNonExisting();
    
  });

  // Save the data beautified
  it('should save the data beautified with 4 spaces', async () => {

    await deleteNonExisting();

    const adapter = new SyncJsonFileAdapter(non_existing, { beautify: true, beautify_space: 4 });
    await adapter.save(test_data);

    assert.isTrue(await fs.existsSync(non_existing));
    assert.equal("{\n    \"testData\": \"test\"\n}", await fs.readFile(non_existing));

    await deleteNonExisting();
    
  });

});