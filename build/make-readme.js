const help = require('../help')
const pkg = require('../package.json')

const bin = 'tre-import'
const year = new Date().toISOString().split('-')[0]
const readme = `# ${bin}

simple tool to publish messages stored as double-newline-delimited json.
For importing files and more complex features see tre-init/bin/import.js

\`\`\`
${help('tre-import')}
\`\`\`

---
License: ${pkg.license} Copyright ${year} ${pkg.author}
`

console.log(readme)
