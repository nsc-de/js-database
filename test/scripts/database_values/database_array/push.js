// jshint esversion: 8

const { assert } = require('chai');
const db = require('../../../../database');



describe('#push()', () => {

  it('test push', () => {

    const object = new db.DatabaseArray(["test"]);

    assert.strictEqual(object.push("0").get(1), "0");
    assert.strictEqual(object.push(1).get(2), 1);
    assert.instanceOf(object.push({}).get(3), db.DatabaseObject);

  });


  it('test multi-push', () => {

    const object = new db.DatabaseArray(["test"]);

    object.push("0", "1");
    assert.strictEqual(object.get(1), "0");
    assert.strictEqual(object.get(2), "1");

  });
  
});