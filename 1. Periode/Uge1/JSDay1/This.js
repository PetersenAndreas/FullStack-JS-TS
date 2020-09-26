/*Team up with another member in the class. Read about this in JavaScript and implement at least three examples (individually) 
to illustrate how this in JavaScript differs from what we know from Java. 
One of the examples should include an example of explicit setting this using either call(), apply() or bind(). 

    codementor.io/@niladrisekhardutta/how-to-call-apply-and-bind-in-javascript-8i1jca6jp
*/

var car = {
    maker: "Volvo",
    model: "242 Turbo Evolution",
    engineSize: 2.1,
    fullCar: function () {
        return this.maker + " " + this.model;
    }
};
console.log(car.fullCar());

//console.log(globalThis);

/*
- How this in JavaScript differ from this in Java

In JavaScript this always refers to the “owner” of the function we're executing, or rather, 
to the object that a function is a method of.
In Java, this refers to the current instance object on which the method is executed.

- Why we (because we did not explain about this) followed a pattern in our third semester 
controller and stored a reference to this (var self = this)

We did?

- The purpose of the methods call(), apply() and bind()

The call() method calls a function with a given "this" value and arguments provided individually.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call

The apply() method calls a function with a given "this" value, and arguments provided as an array (or an array-like object).
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply

The bind() method creates a new function that, when called, has its "this" keyword set to the provided value, 
with a given sequence of arguments preceding any provided when the new function is called.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind

*/