# NSCDB Changelog

Actual Version: [`0.2.0`](#0.2.0)

## 0.2.x

### 0.2.0

_install using `npm i nscdb@0.2.0`_
...


## 0.1.x

### 0.1.7

_install using `npm i nscdb@0.1.7`_
* Removed unnecessary debug log

### 0.1.6

_install using `npm i nscdb@0.1.6`_
* Fixed: the Data-Attribute was exported two times in some cases

### 0.1.5

_install using `npm i nscdb@0.1.5`_
* Improved performance by creating DatabaseObjects and DatabaseArrays dynamically

### 0.1.4

_install using `npm i nscdb@0.1.4`_
* Created xml-adapter


### 0.1.3

_install using `npm i nscdb@0.1.3`_
* Made package size much smaller

### 0.1.2
_install using `npm i nscdb@0.1.2`_

* Improved documentation
  * Created documentation for json-adapter
  * Created documentation for yaml-adapter
  * Improved documentation of the database and added documentation-reference-links
  * added typedoc-documentation
* Added settings to json-adapter to beautify generated json
* Removed optional dependencies from package.json you have to manually install them
  (so they will not be installed anymore if you don't need them)
  * Created custom error that is thrown in yaml-adapter when js-yaml is not
    installed and you use the adapter
* removed sourcemaps from production result to reduce package size
* removed unnessesary debug log that was printed to the console


### 0.1.1
_install using `npm i nscdb@0.1.1`_

* implemented most parts of basic api (+ documentation)
* implemented json-adapter
* implemented yaml-adapter
