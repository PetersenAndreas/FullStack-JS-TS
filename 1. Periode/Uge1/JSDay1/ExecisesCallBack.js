let names = ["Nina", "Lars", "Andreas", "Kim", "Michael", "Ib"];

/*--------------------execise 2a-------------------------*/

function myFilter(array, callback) {
    let addToThis = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            addToThis.push(array[i]);
        }
    }
    return addToThis;
};

function filterNameLength(name) {
    return name.length >= 5;
};

let filteredListWithOrginalFilter = names.filter(function(a){
    if(a.length >=5) {
        return a;
    } 
 });

/*--------------------execise 2b-------------------------*/

function myMap(array, callback) {
    let addToThis = [];
    for (let i = 0; i < array.length; i++) {
        addToThis.push(callback(array[i]));
    }
    return addToThis;
};

function nameBackwards(name) {
    return name.split("").reverse().join("");
};

let reversedNames = names.map(function(element) {
    let splitElement = element.split("");
    let reversedElement = splitElement.reverse();
    let joinedElement = reversedElement.join("");
    return joinedElement;

});
 
console.log("All names:");
console.log(names);
console.log();
console.log("2a");
console.log("Own filter function:");
console.log(myFilter(names, filterNameLength));
console.log();
console.log("Original filter function:");
console.log(filteredListWithOrginalFilter);
console.log();
console.log("2b");
console.log("Own map function:");
console.log(myMap(names, nameBackwards));
console.log();
console.log("Original map function:");
console.log(reversedNames);


/*--------------------execise 3-------------------------*/
var names2 = ["Lars", "Peter", "Jan", "Bo"];

function myFilter2(arr, callback) {
    let addToThis = [];
    arr.forEach(element => {
        let temp = callback(element)
        addToThis.push(temp);
    });
    return addToThis;
}

Array.prototype.myFilter2 = function myFilter2(callback){
    let addToThis = [];
    this.forEach(element => {
        let temp = callback(element)
        addToThis.push(temp);
    });
    return addToThis;
}

Array.prototype.myMap2 = function myMap2(callback) {
    let addToThis = [];
    this.forEach(element =>{
        addToThis.push(callback(element));
    })
    return addToThis;
}    

console.log("Without prototype");
console.log(myFilter2(names2, filterNameLength));
console.log("Filter with prototype");
console.log(names2.myFilter2(filterNameLength));
console.log("Map with prototype")
console.log(names2.myMap2(nameBackwards));


