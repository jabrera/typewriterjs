path = require 'path'
gutil = require 'gulp-util'
es = require 'event-stream'

COMPILERS =
  coffee: require 'gulp-coffee'
  jade: require 'gulp-jade'
  stylus: require 'gulp-stylus'

module.exports = (options={}) ->
  es.map (file, callback) ->
    compiler = COMPILERS[extension = path.extname(file.path).replace('.', '')]
    return callback(null, file) unless compiler

    es.readArray([file])
      .pipe(compiler(options[extension] or {}).on('error', gutil.log))
      .pipe(es.map (file, replace_callback) =>
        file.path = gutil.replaceExtension(file.path, '.js')
        replace_callback(); callback(null, file)
      )
