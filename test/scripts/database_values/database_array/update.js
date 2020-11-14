// jshint esversion: 8

const { assert } = require('chai');
const db = require('../../../../database');



describe('#update()', () => {

  it('test basic update', () => {

    const object = new db.DatabaseArray(["test"]);
    assert.deepEqual(object.update("0", str => str + '2').data, ["test2"]);

  });


  it('test deep update', () => {

    const object = new db.DatabaseArray([["test"]]);
    assert.deepEqual(object.update("0.0", str => str + '2').data, [["test2"]]);

  });

});