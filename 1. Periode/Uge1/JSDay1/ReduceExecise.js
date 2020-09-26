var all= ["Lars", "Peter", "Jan", "Bo"];


/*--------------------execise a-------------------------*/
console.log("Execise a");
console.log("Comma");
let comma = all.join(", ");
console.log(comma);
console.log("Space");
let space = all.join(" ");
console.log(space);
console.log("Pound");
let pound = all.join("#");
console.log(pound);
console.log();

/*--------------------execise b-------------------------*/
let sum = 0;
var numbers = [2, 3, 67, 33];

numbers.forEach(myReducer)

function myReducer(arr) {
    sum += arr
}
console.log("Execise b");
console.log(sum);
console.log();

/*--------------------execise c-------------------------*/
var age = 0;
let members = [
    {name : "Peter", age: 18},
    {name : "Jan", age: 35},
    {name : "Janne", age: 25},
    {name : "Martin", age: 22},
   ]

for(i = 0; i <= members.length-1; i++) {
    age += members[i].age / members.length
}

let reducer = members.reduce((acc, member, idx, arr) =>
    acc + member.age / arr.length, 0);

console.log("Average age using loop");
console.log(age);
console.log("Using reduce");
console.log(reducer);
