const fetch = require("node-fetch");
var now = require("performance-now");
const URL = "https://swapi.dev/api/people/";

//3?
async function fetchPerson(url) {
    //Complete this function
    let res = await fetch(url);
    let data = await res.json();
    return data;
}

//serial
async function printNames() {
  console.log("Before");

  var start = now();
  const person1 = await fetchPerson(URL + "1");
  const person2 = await fetchPerson(URL + "2");
  var end = now();

  console.log(person1.name);
  console.log(person2.name);
  console.log("After all");
  console.log((end-start).toFixed(3)) //460 is the fastest in this option
}

//parallel
async function printNames2() {
    console.log("Before");
  
    var start = now();
    const person1 = fetchPerson(URL + "1");
    const person2 = fetchPerson(URL + "2");
    let promiseReturn = await Promise.all([person1, person2]);
    var end = now();
  
    console.log(promiseReturn[0].name);
    console.log(promiseReturn[1].name);
    console.log("After all");
    console.log((end-start).toFixed(3)) //270 is the fastest in this option
  }

//printNames();
printNames2();
