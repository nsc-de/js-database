// jshint esversion: 8

const { assert } = require('chai');
const db = require('../../../../database');



describe('#data', () => {

  it('array set & get data', () => {

    const array = new db.DatabaseArray([0, 1, 2, 3]);
    assert.deepEqual(array.data, [0, 1, 2, 3]);
    array.data = [0, 1, 2, 3, 4];
    assert.deepEqual(array.data, [0, 1, 2, 3, 4]);

  });
  
});