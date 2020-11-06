var { createDatabase } = require ('nscdb');
var { SyncYamlFileAdapter } = require ('nscdb/yaml_adapter');

var database = createDatabase(new SyncYamlFileAdapter("./database.yml"));

// Set defaults
database.setDefaults({
  users: []
});

// Push a value into the Database
var users = database.get("users");
users.push({
  id: database.generateId("users"),
  name: 'Harleen Dolan',
  password: 'a password'
});
  
users.push({
  id: database.generateId("users"),
  name: 'Lisa Bradley',
  password: 'another password'
});

// print output data from the database
console.log(database.data);

// Console Output:
// >> {
// >>   users: [
// >>     { id: 0, name: 'Harleen Dolan', password: 'a password' },
// >>     { id: 1, name: 'Lisa Bradley', password: 'another password' }
// >>   ],
// >>   id_counters: { users: 1 }
// >> }


// Save the Database
database.saveData();
