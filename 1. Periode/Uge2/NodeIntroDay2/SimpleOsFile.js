const os = require('os');

let platform = os.platform();
let osType = os.type();
let freeMem = os.freemem();
let totalMem = os.totalmem();
let eol = os.EOL;


const info = {platform, osType, freeMem, totalMem, eol};

module.exports = info;