var { createDatabase } = require('nscdb');
var { XMLFileAdapter } = require('nscdb/xml_adapter');

async function myFunction() {

  var database = await createDatabase(new XMLFileAdapter("./database.xml"));

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
  await database.saveData();

}

myFunction();
