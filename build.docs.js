// jshint esversion: 8

const fs = require('fs');
const path = require('path');

fs.copyFileSync(`${__dirname}/images/docs.png`, `${__dirname}/docs/assets/images/docs.png`);

console.log(`Created asset "${path.resolve(`${__dirname}/docs/assets/images/docs.png`)}"`);

const readme = fs.readFileSync(`${__dirname}/README.md`);
fs.writeFileSync(`${__dirname}/docs/README.md`, 
`<p align="center">
  <a href="https://nsc-de.github.io/js-database/">
    <img src="assets/images/docs.png" alt="Logo" width="100%">
  </a>

  <h3 align="center">JS Database (aka NSCDB) v${require("./package.json").version}</h3>

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
` + readme);
console.log(`Created documentation readme "${path.resolve(`${__dirname}/docs/README.md`)}"`);