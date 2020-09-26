/*--------------------execise 1-------------------------*/
const count = require("./Counter")();
const count2 = require("./Counter")();
const count3 = require("./Counter")();
 
count.inc()
count.inc()
count2.dec();
console.log("Execise 1");
console.log(count.value())
console.log(count2.value())
console.log(count3.value())
console.log();

/*--------------------execise 2-------------------------*/
const person = require("./ClosurePerson")();

person.setAge("48");
person.setName("Benjamin");

console.log("Execise 2");
console.log(person.getInfo());
console.log();

/*--------------------execise 3-------------------------*/
const {Person} = require("./OwnPersonBuilder");
let person1 = new Person("Tobias", "22");
console.log("Execise 3");
console.log(person1.buildPerson());
console.log("New person, no info");
let person2 = new Person();
console.log(person2.buildPerson());
