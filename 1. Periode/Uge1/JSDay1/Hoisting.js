//Example of hoisting:
//The compiler places the "var counter;" declaration here 

console.log(counter); // Will result in a "undefinded", but it is hoisted.
var counter = 1; //And assigns the value after the console.log. Therefore it cannot read the value and results in a "udefinde"

//if it was a "let", then it would crash with a referance error as it would not be able to access the counter.

//Example of hoisting(function):
/* 
If you'd place the function before the console.log, it would have worked.
The reason for this, is that it doesn't know that "add" is a function, it just knows that 
it is declared. The "var add" part is hoisted up to the top, but without the function.
*/

let x = 20
let y = 10;

console.log(add(x,y));

var add = function(x, y) {
    return x + y;
}
//Move the console.log here, to get it to work.

/* 
A way to combat this behaviour is to make the decleration at the top or just 
do it as you would in Java or use "let" instead of "var". Think before you write.
*/


