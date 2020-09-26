//1a
const crypto = require("crypto");
function secureHexRandom() {
    let printObject = { title: "6 secure randoms", randoms: [] };
    let size = 48;
    crypto.randomBytes(size, function (err, buffer) {
        let secureHex = buffer.toString("hex");
        let randomObject = { length: size, random: secureHex };
        printObject.randoms.push(randomObject);
        size -= 8;
        crypto.randomBytes(size, function (err, buffer) {
            let secureHex = buffer.toString("hex");
            let randomObject = { length: size, random: secureHex };
            printObject.randoms.push(randomObject);
            size -= 8;
            crypto.randomBytes(size, function (err, buffer) {
                let secureHex = buffer.toString("hex");
                let randomObject = { length: size, random: secureHex };
                printObject.randoms.push(randomObject);
                size -= 8;
                crypto.randomBytes(size, function (err, buffer) {
                    let secureHex = buffer.toString("hex");
                    let randomObject = { length: size, random: secureHex };
                    printObject.randoms.push(randomObject);
                    size -= 8;
                    crypto.randomBytes(size, function (err, buffer) {
                        let secureHex = buffer.toString("hex");
                        let randomObject = { length: size, random: secureHex };
                        printObject.randoms.push(randomObject);
                        size -= 8;
                        crypto.randomBytes(size, function (err, buffer) {
                            let secureHex = buffer.toString("hex");
                            let randomObject = { length: size, random: secureHex };
                            printObject.randoms.push(randomObject);
                            size -= 8;
                            console.log(printObject);
                        });

                    });

                });

            });

        });

    });

}
//secureHexRandom();

//1b
//Exported to ex1-crypto-module.js


  