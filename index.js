const pull = require('pull-stream')
const {parse} = require('pull-json-doubleline')
const file = require('pull-file')
const {stdin} = require('pull-stdio')

module.exports = function(ssb, sourceFile, opts, cb) {
  let publish
  if (opts.dryRun) {
    publish = function(content, cb) {
      console.error('Would publish %o', content)
      cb(null, {key: '{KEY}', value: {content}})
    }
  } else {
    publish = ssb.publish
  }

  pull(
    sourceFile == '-' ? stdin() : file(sourceFile),
    parse(),
    pull.asyncMap(publish),
    pull.onEnd(cb)
  )
}
