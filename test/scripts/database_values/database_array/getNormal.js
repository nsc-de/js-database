// jshint esversion: 8

const { assert } = require('chai');
const db = require('../../../../database');



describe('#getNormal()', () => {
  
  it('test basic getNormal', () => {
    
    const object = new db.DatabaseArray(["test"]);
    assert.equal(object.getNormal("0"), "test");

  });


  it('test deep getNormal', () => {

    const object = new db.DatabaseArray([["test"]]);
    assert.equal(object.getNormal("0.0"), "test");

  });


  it('test getNormal of object', () => {

    const object = new db.DatabaseArray([["test"], {test: "test"}]);
    assert.deepEqual(object.getNormal("0"), ["test"]);
    assert.deepEqual(object.getNormal("1"), {test: "test"});

  });
  
});