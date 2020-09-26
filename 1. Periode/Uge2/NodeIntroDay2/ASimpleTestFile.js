const DosDetector = require('./dosDetector');
const info = require('./SimpleOsFile');
const dosDetector = new DosDetector(2000);

console.log(info);


dosDetector.on('Message', (arg) => {
    console.log("Fucking hell, not again:", arg);
});

dosDetector.addUrl('google.dk');

setTimeout(function(){ 
    dosDetector.addUrl('google.dk'); 
}, 500);

