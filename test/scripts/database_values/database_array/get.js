// jshint esversion: 8

const { assert } = require('chai');
const db = require('../../../../database');



describe('#get()', () => {
  
  it('test basic get', () => {

    const object = new db.DatabaseArray(["test"]);
    assert.equal(object.get("0"), "test");

  });


  it('test deep get', () => {

    const object = new db.DatabaseArray([["test"]]);
    assert.equal(object.get("0.0"), "test");

  });


  it('test get of object', () => {

    const object = new db.DatabaseArray([["test"],{}]);
    assert.instanceOf(object.get("0"), db.DatabaseArray);
    assert.instanceOf(object.get("1"), db.DatabaseObject);

  });

});