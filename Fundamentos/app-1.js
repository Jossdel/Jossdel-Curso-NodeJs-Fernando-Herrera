const fs = require("node:fs")

const data = fs.readFileSync('readme.md', 'utf-8')

const newData = data.replace(/React/ig , 'angular')

fs.writeFileSync('readme.md-Angular2.md', newData)