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

describe("DatabaseArrayProxy", () => {

  describe('#data', () => {
    it('array set & get data', () => {
      const array = proxy.createProxy(new db.DatabaseArray([0, 1, 2, 3]));
      assert.deepEqual(array.data, [0, 1, 2, 3]);
      array.data = [0, 1, 2, 3, 4];
      assert.deepEqual(array.data, [0, 1, 2, 3, 4]);
    });
  });

  describe('#length', () => {
    it('test array length (length 0)', () => {
      const array = proxy.createProxy(new db.DatabaseArray([]));
      assert.strictEqual(array.length, 0);
    });
    it('test array length (length 1)', () => {
      const array = proxy.createProxy(new db.DatabaseObject(["test"]));
      assert.strictEqual(array.length, 1);
    });
    it('test array length (length 5)', () => {
      const array = proxy.createProxy(new db.DatabaseObject(["test", 0, true, [], {}]));
      assert.strictEqual(array.length, 5);
    });
  });

  describe('#set()', () => {
    it('test basic set', () => {
      const array = proxy.createProxy(new db.DatabaseArray([0]));
      array.set("0", 1);
      assert.deepEqual(array.data, [1]);
    });
    it('test deep set', () => {
      const object = proxy.createProxy(new db.DatabaseArray(["test", ["test"]]));
      object.set("1.1", "test2");
      assert.deepEqual(object.data, ["test", ["test", "test2"]]);
    });
    it('test deep set with multiple objects to create', () => {
      const object = proxy.createProxy(new db.DatabaseArray(["test"]));
      object.set("1.0", "test2");
      assert.deepEqual(object.data, ["test", ["test2"]]);
    });
    it('test deep set with wrong type (string) (should throw error)', () => {
      const object = proxy.createProxy(new db.DatabaseArray(["test", ""]));
      assert.throw(() => object.set("1.0", "test2"), Error, "Can't use set property of string");
    });
    it('test deep set with wrong type (number) (should throw error)', () => {
      const object = proxy.createProxy(new db.DatabaseArray(["test", 1]));
      assert.throw(() => object.set("1.0", "test2"), Error, "Can't use set property of number");
    });
    it('test deep set with wrong type (boolean) (should throw error)', () => {
      const object = proxy.createProxy(new db.DatabaseArray(["test", true]));
      assert.throw(() => object.set("1.0", "test2"), Error, "Can't use set property of boolean");
    });
  });

  describe('#setDefault()', () => {
    it('test basic set', () => {
      const object = proxy.createProxy(new db.DatabaseArray(["test"]));
      object.setDefault("1", "test2");
      assert.deepEqual(object.data, ["test", "test2"]);
      object.setDefault("test2", "test2a");
      assert.deepEqual(object.data, ["test", "test2"]);
    });
    it('test deep set', () => {
      const object = proxy.createProxy(new db.DatabaseArray(["test", []]));
      object.setDefault("1.0", "test2");
      assert.deepEqual(object.data, ["test", ["test2"]]);
      object.setDefault("test2.test2", "test2a");
      assert.deepEqual(object.data, ["test", ["test2"]]);
    });
    it('test deep set with multiple objects to create', () => {
      const object = proxy.createProxy(new db.DatabaseArray(["test"]));
      object.setDefault("1.0", "test2");
      assert.deepEqual(object.data, ["test", ["test2"]]);
      object.setDefault("1.0", "test2a");
      assert.deepEqual(object.data, ["test", ["test2"]]);
    });
  });

  describe('#get()', () => {
    it('test basic get', () => {
      const object = proxy.createProxy(new db.DatabaseArray(["test"]));
      assert.equal(object.get("0"), "test");
    });
    it('test deep get', () => {
      const object = proxy.createProxy(new db.DatabaseArray([["test"]]));
      assert.equal(object.get("0.0"), "test");
    });
    it('test get of object', () => {
      const object = proxy.createProxy(new db.DatabaseArray([["test"],{}]));
      assert.instanceOf(object.get("0"), db.DatabaseArray);
      assert.instanceOf(object.get("1"), db.DatabaseObject);
    });
  });

  describe('#getNormal()', () => {
    it('test basic getNormal', () => {
      const object = proxy.createProxy(new db.DatabaseArray(["test"]));
      assert.equal(object.getNormal("0"), "test");
    });
    it('test deep getNormal', () => {
      const object = proxy.createProxy(new db.DatabaseArray([["test"]]));
      assert.equal(object.getNormal("0.0"), "test");
    });
    it('test getNormal of object', () => {
      const object = proxy.createProxy(new db.DatabaseArray([["test"], {test: "test"}]));
      assert.deepEqual(object.getNormal("0"), ["test"]);
      assert.deepEqual(object.getNormal("1"), {test: "test"});
    });
  });

  describe('#update()', () => {
    it('test basic update', () => {
      const object = proxy.createProxy(new db.DatabaseArray(["test"]));
      assert.deepEqual(object.update("0", str => str + '2').data, ["test2"]);
    });
    it('test deep update', () => {
      const object = proxy.createProxy(new db.DatabaseArray([["test"]]));
      assert.deepEqual(object.update("0.0", str => str + '2').data, [["test2"]]);
    });
  });

  describe('#contains()', () => {
    it('test basic contains', () => {
      const object = proxy.createProxy(new db.DatabaseArray(["test"]));
      assert.strictEqual(object.contains("0"), true);
      assert.strictEqual(object.contains("1"), false);
    });
    it('test deep contains', () => {
      const object = proxy.createProxy(new db.DatabaseArray([["test"]]));
      assert.strictEqual(object.contains("0.0"), true);
      assert.strictEqual(object.contains("0.1"), false);
      assert.strictEqual(object.contains("1.0"), false);
    });
  });

  describe('#push()', () => {
    it('test push', () => {
      const object = proxy.createProxy(new db.DatabaseArray(["test"]));
      assert.strictEqual(object.push("0").get(1), "0");
      assert.strictEqual(object.push(1).get(2), 1);
      assert.instanceOf(object.push({}).get(3), db.DatabaseObject);
    });
    it('test multi-push', () => {
      const object = proxy.createProxy(new db.DatabaseArray(["test"]));
      object.push("0", "1");
      assert.strictEqual(object.get(1), "0");
      assert.strictEqual(object.get(2), "1");
    });
  });
  
});
