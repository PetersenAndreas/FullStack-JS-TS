const fs = require('fs')

let path = process.argv[2];

const str = fs.readFileSync(path).toString();

let splitCount = str.split("\n").length-1;

console.log(splitCount);