// jshint esversion: 8

const { assert } = require('chai');
const fs = require('fs-extra');
const path = require('path');
const xml = require('xml-js');
const { SyncXMLFileAdapter } = require('../../../../../xml_adapter');

const non_existing = path.join(__dirname, '../../../../assets/not-existing.xml');
const test_data = {testData: 'test'};
const test_data_result = {testData: {_text: 'test'}};

async function deleteNonExisting() {
  if(await fs.exists(non_existing)) await fs.remove(non_existing);
}



// test #save()
describe('#save()', () => {

  // empty >> {}
  it('should save the data', async () => {

    await deleteNonExisting();

    const adapter = new SyncXMLFileAdapter(non_existing);
    adapter.save(test_data);

    assert.isTrue(await fs.exists(non_existing));
    assert.deepEqual(xml.xml2js(await fs.readFile(non_existing), {compact: true}), test_data_result);

    await deleteNonExisting();
    
  });

});