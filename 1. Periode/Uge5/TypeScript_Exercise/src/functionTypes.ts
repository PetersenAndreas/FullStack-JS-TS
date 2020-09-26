//2a
interface myFunc{
    (string1: string, string2: string, string3: string): Array<string>; 
}

//2b
let firstFunc:myFunc = function(string1, string2, string3) {
    return [string1, string2, string3];
}
//console.log(firstFunc("gutenmorgen","dav","næ"));

//2c
let secondFunc: myFunc = function(string1, string2, string3) {
    return [string1.toUpperCase(), string2.toUpperCase(), string3.toUpperCase()];
}
//console.log(secondFunc("gutenmorgen","dav","næ"));

//2d
let f2 = function logger(f1: myFunc){
    //Simulate that we get data from somewhere and uses the provided function
    let [ a, b, c] = ["Aa", "Bb", "Cc"];
    console.log(f1(a,b,c));
}

//2e
f2(firstFunc);
f2(secondFunc);

//2f
function thisShouldMakeAnErr(noString1: boolean, noString2: number, noString3: Date) {
    return[noString1,noString2,noString3]
}

//f2(thisShouldMakeAnErr); Courses an error on compile time, ofc





/*
//2b
function myFunc(a:IFunc):string[] {
    let stringArray = new Array();
    //stringArray.push(a);
    for(let value of Object.values(a)) {
        let val = value.valueOf();
        stringArray.push(val);
    }
    return stringArray;
}
let tegn: IFunc = {
    one: "a",
    two: "b",
    three: "c"
}
console.log("2a og 2b");
console.log(myFunc(tegn));

//2c
function myFunc2(a:IFunc):string[] {
    let stringArray = new Array();
    //stringArray.push(a);
    for(let value of Object.values(a)) {
        let val = value.valueOf().toUpperCase();
        stringArray.push(val);
    }
    return stringArray;
}
console.log("2c");
console.log(myFunc2(tegn));


let f2 = function logger(f1: myFunc){
    //Simulate that we get data from somewhere and uses the provided function
    let [ a, b, c] = ["A", "B", "C"];
    console.log(f1(a,b,c));
}
*/
