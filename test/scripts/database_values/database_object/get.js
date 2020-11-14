// jshint esversion: 8

const { assert } = require('chai');
const db = require('../../../../database');



describe('#get()', () => {

  it('test basic get', () => {

    const object = new db.DatabaseObject({test: "test"});
    assert.equal(object.get("test"), "test");

  });

  
  it('test deep get', () => {

    const object = new db.DatabaseObject({test: {test: "test"}});
    assert.equal(object.get("test.test"), "test");

  });


  it('test get for object', () => {

    const object = new db.DatabaseObject({test: {test: "test"}, test2: ["aaa"]});
    assert.instanceOf(object.get("test"), db.DatabaseObject);
    assert.instanceOf(object.get("test2"), db.DatabaseArray);
    
  });

});