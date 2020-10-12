# NSCDB Changelog

Actual Version: [`0.1.2`](#0.1.2)

## 0.1.2
_install using `npm i nscdb@0.1.2`_

* Created documentation for json-adapter
* Created documentation for yaml-adapter
* Removed optional dependencies so you have to manually install them 
  (so they will not be installed anymore if you don't need them)
  * Created custom error that is thrown in yaml-adapter when js-yaml is not 
    installed and you use the adapter
* added typedoc-documentation
* removed sourcemaps from production result to reduce package size
* removed unnessesary debug log that was printed to the console


## 0.1.1
_install using `npm i nscdb@0.1.1`_

* implemented most parts of basic api (+ documentation)
* implemented json-adapter
* implemented yaml-adapter
