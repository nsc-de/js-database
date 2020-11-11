// jshint esversion: 8

const { assert } = require('chai');
const db = require('../../');
const proxy = require('../../proxy')

describe("createProxy", () => {

  it('create a proxy from a DatabaseObject', () => {

    const obj = new db.DatabaseObject({name: 'test-object'});
    const prx = proxy.createProxy(obj);
    assert.isTrue(prx instanceof db.DatabaseObject);
    assert.equal(prx.name, 'test-object');

  });

  it('create a proxy from a DatabaseArray', () => {

    const obj = new db.DatabaseArray(['test-object']);
    const prx = proxy.createProxy(obj);
    assert.isTrue(prx instanceof db.DatabaseArray);
    assert.equal(prx[0], 'test-object');

  });

  it('create a proxy from a number', () => {

    const obj = 0;
    const prx = proxy.createProxy(obj);
    assert.isTrue(typeof prx === 'number');
    assert.equal(prx, obj);

  });

  it('create a proxy from a boolean', () => {

    const obj = true;
    const prx = proxy.createProxy(obj);
    assert.isTrue(typeof prx === 'boolean');
    assert.equal(prx, obj);

  });

  it('create a proxy from a string', () => {

    const obj = "test";
    const prx = proxy.createProxy(obj);
    assert.isTrue(typeof prx === 'string');
    assert.equal(prx, obj);

  });

  it('create a proxy from string', () => {

    const obj = "test";
    const prx = proxy.createProxy(obj);
    assert.isTrue(typeof prx === 'string');
    assert.equal(prx, obj);

  });

  it('create a proxy from undefined', () => {

    const obj = undefined;
    const prx = proxy.createProxy(obj);
    assert.isTrue(typeof prx === 'undefined');
    assert.equal(prx, obj);

  });

  it('create a proxy from null', () => {

    const obj = null;
    const prx = proxy.createProxy(obj);
    assert.isTrue(typeof prx === 'object');
    assert.equal(prx, obj);

  });

});