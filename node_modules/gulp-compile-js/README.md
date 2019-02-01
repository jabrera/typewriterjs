gulp-compile-js
===============

Gulp plugin to compile a file into a JavaScript representation.

Currently supports (just submit a pull request to add more):

* CoffeeScript
* Jade
* Stylus

```
gulp = require 'gulp'
compile = require 'gulp-compile-js'
concat = require 'gulp-concat'

gulp.task 'build', ->
  gulp.src('./lib/**/*')
    .pipe(compile({coffee: {bare: true}, jade: {client: true}}))
    .pipe(concat('your-js-library.js'))
    .pipe(gulp.dest('./dist/'))
```
