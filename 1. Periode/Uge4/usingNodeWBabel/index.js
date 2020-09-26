import fetch from 'node-fetch';
import 'core-js/proposals/promise-any';

const URL = "https://swapi.dev/api/people/";

async function fetchPerson(url) {
    //Complete this function
    let res = await fetch(url);
    let data = await res.json();
    return data;
}

//With promise any
async function printNames() {
  
    const person1 = fetchPerson(URL + "1");
    const person2 = fetchPerson(URL + "2");
    const promises = [person1, person2];
    await Promise.any(promises).then((value) => console.log(value.name));
  
    /*console.log(promiseReturn[0].name);
    console.log(promiseReturn[1].name);*/
  }

//with promise all
async function printNames2() {
  
    const person1 = fetchPerson(URL + "1");
    const person2 = fetchPerson(URL + "2");
    let promiseReturn = await Promise.all([person1, person2]);
  
    console.log(promiseReturn[0].name);
    console.log(promiseReturn[1].name);
  }

printNames();
//printNames2();