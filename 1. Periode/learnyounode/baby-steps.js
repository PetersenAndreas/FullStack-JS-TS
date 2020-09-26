//console.log(process.argv);

var result = 0;

for(let idx = 2; idx < process.argv.length; idx++) {
    result += Number(process.argv[idx]);
}

console.log(result);