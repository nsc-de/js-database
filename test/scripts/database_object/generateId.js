// jshint esversion: 8

const { assert } = require('chai');
const db = require('../../../database');



describe('#generateId()', () => {

  it('test basic id generation', () => {

    const object = new db.DatabaseObject({});
    assert.strictEqual(object.generateId("test"), 0);
    assert.strictEqual(object.generateId("test"), 1);
    assert.strictEqual(object.generateId("test2"), 0);
    assert.strictEqual(object.generateId("test2"), 1);
    assert.strictEqual(object.generateId("test"), 2);

  });

});