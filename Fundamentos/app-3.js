const fs = require("node:fs")

const content = fs.readFileSync('readme.md', 'utf-8')

const wodCount = content.split(" ")

// const  readWordCount = wodCount.filter((cont) =>  cont.toLowerCase().includes ('react') ).length
const readWordCount = content.match(/react/ig ?? [].length )

console.log(wodCount.length);
console.log(readWordCount.length);




