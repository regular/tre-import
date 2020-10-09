module.exports = bin =>
  `${bin} INPUT_FILE|- ` +
  '[--dryRun] ' +
  '[--config CONFIG] ' +
  '[--help]'
