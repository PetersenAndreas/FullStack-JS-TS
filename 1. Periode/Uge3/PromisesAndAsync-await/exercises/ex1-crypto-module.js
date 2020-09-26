//1c

const crypto = require("crypto");

const promiseFactory = (size) => new Promise((resolve, reject) => {
    crypto.randomBytes(size, function (err, buffer) {
        if (err) {
            reject(err);
        } else {
            let secureHex = buffer.toString("hex");
            let randomObject = { length: size, random: secureHex };
            resolve(randomObject);
        }
    });
});

function promiseBuilder() {
    let p1 = promiseFactory(48);
    let p2 = promiseFactory(40);
    let p3 = promiseFactory(32);
    let p4 = promiseFactory(24);
    let p5 = promiseFactory(16);
    let p6 = promiseFactory(8);

    return Promise.all([p1, p2, p3, p4, p5, p6])
    .then(result=>{return {"title": "6 secure randoms", "randoms": result}})
}

async function asyncBuilder() {

    let p1 = promiseFactory(48);
    let p2 = promiseFactory(40);
    let p3 = promiseFactory(32);
    let p4 = promiseFactory(24);
    let p5 = promiseFactory(16);
    let p6 = promiseFactory(8);
    let printObject = { title: "6 secure randoms", randoms: await Promise.all([p1, p2, p3, p4, p5, p6])}; 
    
    return printObject;
}

//1d
//Just change to the other export to use the other function.

module.exports = promiseBuilder;
//module.exports = asyncBuilder;
