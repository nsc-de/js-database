// jshint esversion: 8

const { assert } = require('chai');
const db = require('../../../../database');



describe('#length', () => {
  
  it('test array length (length 0)', () => {

    const array = new db.DatabaseArray([]);
    assert.strictEqual(array.length, 0);

  });

  
  it('test array length (length 1)', () => {

    const array = new db.DatabaseArray(["test"]);
    assert.strictEqual(array.length, 1);

  });


  it('test array length (length 5)', () => {

    const array = new db.DatabaseArray(["test", 0, true, [], {}]);
    assert.strictEqual(array.length, 5);

  });

});