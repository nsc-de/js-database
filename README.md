
<p align="center">
  <a href="https://nsc-de.github.io/js-database/">
    <img src="assets/images/docs.png" alt="Logo" width="100%">
  </a>

  <h3 align="center">JS Database (aka NSCDB)</h3>

  <p align="center">
    A simple lightweight package to manage data
    <br />
    <a href="https://github.com/nsc-de/js-database/wiki/"><strong>Read the Wiki »</strong></a>
    <br />
    <a href="https://nsc-de.github.io/js-database/"><strong>Explore the typedoc »</strong></a>
    <br />
    <br />
    <a href="https://github.com/nsc-de/js-database/wiki/Node-Quickstart">Quickstart</a>
    ·
    <a href="https://github.com/nsc-de/js-database/issues/new?assignees=&labels=&template=bug_report.md&title=">Report Bug</a>
    ·
    <a href="https://github.com/nsc-de/js-database/issues/new?assignees=&labels=&template=feature_request.md&title=">Request Feature</a>
  </p>
  
</p>

<p>
  This branch contains the contents of the <a href="https://nsc-de.github.io/js-database/">typedoc-site</a> of <a href="https://www.npmjs.com/package/nscdb">nscdb</a>. It is completely is written in <a href="https://github.com/Microsoft/tsdoc">tsdoc</a> and generated using <a href="http://typedoc.org/">typedoc</a>. For guides and Tutorials please take a look at the <a href="https://github.com/nsc-de/js-database/wiki">wiki</a>.

  🔽 You can find the normal readme of <a href="https://www.npmjs.com/package/nscdb">nscdb</a> below
</p>
<br>
<br>
<br>

---

<br>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![NPM][version-shield]][npm-url]
[![Downloads][downloads-shield]][npm-url]


<br />
<p align="center">
  <a href="https://github.com/nsc-de/js-database">
    <img src="https://raw.githubusercontent.com/nsc-de/js-database/master/images/logo-line.png" alt="Logo" width="100%">
  </a>

  <h3 align="center">JS Database (aka NSCDB)</h3>

  <p align="center">
    A simple lightweight package to manage data
    <br />
    <a href="https://github.com/nsc-de/js-database/wiki/"><strong>Read the Wiki »</strong></a>
    <br />
    <a href="https://nsc-de.github.io/js-database/"><strong>Explore the typedoc »</strong></a>
    <br />
    <br />
    <a href="https://github.com/nsc-de/js-database/wiki/Node-Quickstart">Quickstart</a>
    ·
    <a href="https://github.com/nsc-de/js-database/issues/new?assignees=&labels=&template=bug_report.md&title=">Report Bug</a>
    ·
    <a href="https://github.com/nsc-de/js-database/issues/new?assignees=&labels=&template=feature_request.md&title=">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
  * [Dependencies](#dependencies)
    * [Optional Dependencys](#optional-dependencies)
    * [Development Dependencys](#development-dependencies)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
  * [Basic Usage](#basic-usage)
  * [Use Yaml](#use-yaml)
  * [Synchronous Usage](#synchronous-usage)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)



<!-- ABOUT THE PROJECT -->
## About The Project

### Built With

* [Node](https://nodejs.org/en/)
* [Typescript](https://www.typescriptlang.org/)

### Dependencies

#### Optional Dependencies
* [js-yaml](https://www.npmjs.com/package/js-yaml)@^[3.14.0](https://www.npmjs.com/package/js-yaml/v/3.14.0) - the package has an integrated adaptor for yaml using this package (install if you want to use yaml)

#### Development Dependencies
* [@types/js-yaml](https://www.npmjs.com/package/@types/js-yaml)@^[3.12.5](https://www.npmjs.com/package/@types/js-yaml/v/3.12.5) - typings for js-yaml
* [@types/node](https://www.npmjs.com/package/@types/node)@^[14.10.1](https://www.npmjs.com/package/@types/node/v/14.10.1) - typings for node
* [chai](https://www.npmjs.com/package/chai)@^[4.2.0](https://www.npmjs.com/package/chai/v/4.2.0) - assertions for tests
* [mocha](https://www.npmjs.com/package/mocha)@^[8.1.3](https://www.npmjs.com/package/mocha/v/8.1.3) - all tests are written using mocha
* [source-map-support](https://www.npmjs.com/package/source-map-support)@^[0.5.19](https://www.npmjs.com/package/source-map-support/v/0.5.19) - show errors in typescipt
* [typescript](https://www.npmjs.com/package/typescript)@^[4.0.3](https://www.npmjs.com/package/typescript/v/4.0.3) - the typescript compiler
* [typedoc](https://www.npmjs.com/package/typedoc)@^[0.19.2](https://www.npmjs.com/package/typedoc/v/0.19.2) - for documenting typescript files
* [typedoc-plugin-extras](https://www.npmjs.com/package/typedoc-plugin-extras)@^[^1.1.6](https://www.npmjs.com/package/typedoc-plugin-extras/v/1.1.6) - a typedoc plugin to add a favicon to the docs



<!-- GETTING STARTED -->
## Getting Started

To get the package up and running follow these simple steps.

### Prerequisites

You should have npm to install this package

* npm
```sh
npm install npm@latest -g
```

### Installation

1. Install the package
```sh
npm i nscdb
```



<!-- USAGE EXAMPLES -->
## Usage

### Basic Usage

Import using Typescript
```ts
import { createDatabase } from 'nscdb';
import { JsonFileAdapter } from 'nscdb/json_adapter';
```

Import using Javascript

```js
const { createDatabase } = require('nscdb');
const { JsonFileAdapter } = require('nscdb/json_adapter');
```

A small system using the api

```js
let database = await createDatabase(new JsonFileAdapter("./database.json"));

// Set defaults
database.setDefaults({
  users: []
});

// Push a value into the Database
let users = database.get("users");
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
```

### Use Yaml

If you want to use yaml instead, replace the json adapter with a yaml adapter and install `js-yaml` api
<br><br>
install `js-yaml` using npm
```sh
npm i js-yaml
```
Import using Typescript
```ts
import { YamlFileAdapter } from 'nscdb/yaml_adapter';
```
Import using Javascript
```js
const { YamlFileAdapter } = require('nscdb/yaml_adapter');
```
Database creation
```js
let database = await createDatabase(new JsonFileAdapter("./database.json"));
```

### Synchronous Usage
_**Warning:** Using synchronus versions of some adapters may slow down you application._

First of all use the synchronous adapters of the adapter
<br><br>
Typescript
```ts
import { createDatabase } from 'nscdb';
import { SyncJsonFileAdapter } from 'nscdb/json_adapter';
```
Javascript
```js
const { createDatabase } = require('nscdb');
const { SyncJsonFileAdapter } = require('nscdb/json_adapter');
```
Now you can use the normal quickstart, but no await is needed anymore
```js
let database = createDatabase(new JsonFileAdapter("./database.json"));

// Set defaults
database.setDefaults({
  users: []
});

// Push a value into the Database
let users = database.get("users");
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
```

_For more examples, please refer to the [Documentation](https://github.com/nsc-de/js-database/wiki)_



<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/nsc-de/js-database/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. [Open a Pull Request](https://github.com/nsc-de/js-database/compare)



<!-- LICENSE -->
## License

Distributed under the BSD2-Clause License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Project Link: [https://github.com/nsc-de/js-database](https://github.com/nsc-de/js-database)

---
<p align="right">
<a href="https://github.com/nsc-de/js-database">js-database</a> by <a href="https://github.com/nsc-de">Nicolas Schmidt</a> | License <a href="https://github.com/nsc-de/js-database/blob/master/LICENSE">BSD-2-Clause</a> | <a href="https://github.com/nsc-de/js-database/wiki">read the docs</a> | <a href="https://github.com/nsc-de/js-database">GitHub</a> | <a href="https://www.npmjs.com/package/nscdb">NPM</a>
</p>




<!-- MARKDOWN LINKS & IMAGES -->
[contributors-shield]: https://img.shields.io/github/contributors/nsc-de/js-database.svg
[forks-shield]: https://img.shields.io/github/forks/nsc-de/js-database.svg
[stars-shield]: https://img.shields.io/github/stars/nsc-de/js-database.svg
[issues-shield]: https://img.shields.io/github/issues/nsc-de/js-database.svg
[license-shield]: https://img.shields.io/github/license/nsc-de/js-database.svg
[version-shield]: https://img.shields.io/npm/v/nscdb.svg
[downloads-shield]: https://img.shields.io/npm/dt/nscdb.svg

[contributors-url]: https://github.com/nsc-de/js-database/graphs/contributors
[forks-url]: https://github.com/nsc-de/js-database/network/members
[stars-url]: https://github.com/nsc-de/js-database/stargazers
[issues-url]: https://github.com/nsc-de/js-database/issues
[license-url]: https://github.com/nsc-de/js-database/blob/master/LICENSE
[npm-url]: https://www.npmjs.com/package/nscdb
