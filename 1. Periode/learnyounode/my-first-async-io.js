const fs = require("fs");
let path = process.argv[2];

fs.readFile(path, function(err, data) {
    let splitCount = data.toString().split("\n").length-1;
    console.log(splitCount);
});