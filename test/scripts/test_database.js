// jshint esversion: 8

const { assert } = require('chai');
const db = require('../../');

const dummyAdapter = { load: async () => { return {}; }, save: async () => {} };

describe('Database', () => {

  // Default DatabaseObject tests

  describe('#data', () => {
    it('object set & get data', () => {
      const object = new db.Database(dummyAdapter, {test: "test"});
      assert.deepEqual(object.data, {test: "test"});
      object.data = {test: "test", test2: "test2"};
      assert.deepEqual(object.data, {test: "test", test2: "test2"});
    });
  });

  describe('#length', () => {
    it('test object length (length 0)', () => {
      const object = new db.Database(dummyAdapter, {});
      assert.strictEqual(object.length, 0);
    });
    it('test object length (length 1)', () => {
      const object = new db.Database(dummyAdapter, {test: "test"});
      assert.strictEqual(object.length, 1);
    });
    it('test object length (length 6)', () => {
      const object = new db.Database(dummyAdapter, {test: "test", test2: "test2", test3: 0, test4: true, test5: {}, test6: []});
      assert.strictEqual(object.length, 6);
    });
  });

  describe('#set()', () => {
    it('test basic set', () => {
      const object = new db.Database(dummyAdapter, {test: "test"});
      object.set("test2", "test2");
      assert.deepEqual(object.data, {test: "test", test2: "test2"});
    });
    it('test deep set', () => {
      const object = new db.Database(dummyAdapter, {test: "test", test2: {}});
      object.set("test2.test2", "test2");
      assert.deepEqual(object.data, {test: "test", test2: {test2: "test2"}});
    });
    it('test deep set with multiple objects to create', () => {
      const object = new db.Database(dummyAdapter, {test: "test"});
      object.set("test2.test2", "test2");
      assert.deepEqual(object.data, {test: "test", test2: {test2: "test2"}});
    });
    it('test deep set with wrong type (string) (should throw error)', () => {
      const object = new db.Database(dummyAdapter, {test: "test", test2: ""});
      assert.throw(() => object.set("test2.test2", "test2"), Error, "Can't use set property of string");
    });
    it('test deep set with wrong type (number) (should throw error)', () => {
      const object = new db.Database(dummyAdapter, {test: "test", test2: 1});
      assert.throw(() => object.set("test2.test2", "test2"), Error, "Can't use set property of number");
    });
    it('test deep set with wrong type (boolean) (should throw error)', () => {
      const object = new db.Database(dummyAdapter, {test: "test", test2: true});
      assert.throw(() => object.set("test2.test2", "test2"), Error, "Can't use set property of boolean");
    });
  });

  describe('#setDefault()', () => {
    it('test basic set', () => {
      const object = new db.Database(dummyAdapter, {test: "test"});
      object.setDefault("test2", "test2");
      assert.deepEqual(object.data, {test: "test", test2: "test2"});
      object.setDefault("test2", "test2a");
      assert.deepEqual(object.data, {test: "test", test2: "test2"});
    });
    it('test deep set', () => {
      const object = new db.Database(dummyAdapter, {test: "test", test2: {}});
      object.setDefault("test2.test2", "test2");
      assert.deepEqual(object.data, {test: "test", test2: {test2: "test2"}});
      object.setDefault("test2.test2", "test2a");
      assert.deepEqual(object.data, {test: "test", test2: {test2: "test2"}});
    });
    it('test deep set with multiple objects to create', () => {
      const object = new db.Database(dummyAdapter, {test: "test"});
      object.setDefault("test2.test2", "test2");
      assert.deepEqual(object.data, {test: "test", test2: {test2: "test2"}});
      object.setDefault("test2.test2", "test2a");
      assert.deepEqual(object.data, {test: "test", test2: {test2: "test2"}});
    });
  });

  describe('#get()', () => {
    it('test basic get', () => {
      const object = new db.Database(dummyAdapter, {test: "test"});
      assert.equal(object.get("test"), "test");
    });
    it('test deep get', () => {
      const object = new db.Database(dummyAdapter, {test: {test: "test"}});
      assert.equal(object.get("test.test"), "test");
    });
  });

  describe('#update()', () => {
    it('test basic update', () => {
      const object = new db.Database(dummyAdapter, {test: "test"});
      assert.deepEqual(object.update("test", str => str + '2').data, {test: "test2"});
    });
    it('test deep update', () => {
      const object = new db.Database(dummyAdapter, {test: {test: "test"}});
      assert.deepEqual(object.update("test.test", str => str + '2').data, {test: {test: "test2"}});
    });
  });

  describe('#contains()', () => {
    it('test basic contains', () => {
      const object = new db.Database(dummyAdapter, {test: "test"});
      assert.strictEqual(object.contains("test"), true);
      assert.strictEqual(object.contains("test2"), false);
    });
    it('test deep contains', () => {
      const object = new db.Database(dummyAdapter, {test: {test: "test"}});
      assert.strictEqual(object.contains("test.test"), true);
      assert.strictEqual(object.contains("test.test2"), false);
      assert.strictEqual(object.contains("test2.test"), false);
    });
  });

  describe('#generateId()', () => {
    it('test basic id generation', () => {
      const object = new db.Database(dummyAdapter, {});
      assert.strictEqual(object.generateId("test"), 0);
      assert.strictEqual(object.generateId("test"), 1);
      assert.strictEqual(object.generateId("test2"), 0);
      assert.strictEqual(object.generateId("test2"), 1);
      assert.strictEqual(object.generateId("test"), 2);
    });
  });


  // Database tests

  describe('#saveData()', () => {
    it('test save', async () => {
      let data = null;
      await (new db.Database({
        load: dummyAdapter.load,
        save: async (d) => data = d,
      }, {testData: "test"})).saveData();
      assert.deepEqual(data, {testData: "test"});
    });
  });

  describe('#reloadData()', () => {
    it('test save', async () => {
      let database = await (new db.Database({
        load: async () => { return {testData: "test"}; },
        save: dummyAdapter.save,
      }, {testData: "test"})).reloadData();
      assert.deepEqual(database.data, {testData: "test"});
    });
  });
});