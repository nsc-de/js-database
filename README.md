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
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
  * [Basic Usage](#basic-usage)
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
* [js-yaml](https://www.npmjs.com/package/js-yaml)@^[3.14.0](https://www.npmjs.com/package/js-yaml/v/3.14.0) - the package has an integrated adaptor for yaml using js-yaml (install if you want to use yaml)
* [xml-js](https://www.npmjs.com/package/xml-js)@^[1.6.11](https://www.npmjs.com/package/xml-js/v/1.6.11) - the package has an integrated adaptor for  xml using xml-js (install if you want to use xml)

[[See all dependencies]](https://github.com/nsc-de/js-database/wiki/Dependencies)


<!-- GETTING STARTED -->
## Getting Started

To get the package up and running follow these simple steps.

### Prerequisites

You should have already installed npm to install this package

* npm
```sh
npm install npm@latest -g
```

### Installation

#### 1. Install the package<br/>
[using npm]
```sh
npm i nscdb
```
[using yarn]
```sh
yarn add nscdb
```

#### 2. (Optional) install optional dependencies
`js-yaml` (for using yaml files)<br/>
[using npm]
```sh
npm i js-yaml
```
[using yarn]
```sh
yarn add js-yaml
```

`xml-js` (for using xml files)<br/>
[using npm]
```sh
npm i xml-js
```
[using yarn]
```sh
yarn add xml-js
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

⇒ [Continue after Quickstart](https://github.com/nsc-de/js-database/wiki/Node-Quickstart#continue-after-quickstart) ⇐

_For more examples, please refer to the [Documentation](https://github.com/nsc-de/js-database/wiki)_



<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/nsc-de/js-database/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your own Feature Branch (`git checkout -b feature/AmazingFeature`)
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
<a href="https://github.com/nsc-de/js-database">js-database</a> 
by 
<a href="https://github.com/nsc-de">Nicolas Schmidt</a> 
| License <a href="https://github.com/nsc-de/js-database/blob/master/LICENSE">BSD-2-Clause</a> 
| <a href="https://github.com/nsc-de/js-database/wiki">read the wiki</a> 
| <a href="https://nsc-de.github.io/js-database/">explore the typedoc</a> 
| <a href="https://github.com/nsc-de/js-database">GitHub</a> 
| <a href="https://www.npmjs.com/package/nscdb">NPM</a>
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
