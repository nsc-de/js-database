// jshint esversion: 8

const { assert } = require('chai');
const db = require('../../../../database');



describe('#contains()', () => {
  
  it('test basic contains', () => {

    const object = new db.DatabaseArray(["test"]);

    assert.strictEqual(object.contains("0"), true);
    assert.strictEqual(object.contains("1"), false);

  });


  it('test deep contains', () => {

    const object = new db.DatabaseArray([["test"]]);

    assert.strictEqual(object.contains("0.0"), true);
    assert.strictEqual(object.contains("0.1"), false);
    assert.strictEqual(object.contains("1.0"), false);

  });

});