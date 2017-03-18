es = require 'event-stream'

module.exports = (callback) ->
  text = ''
  es.through ((data) => text += data), (-> callback(text))
