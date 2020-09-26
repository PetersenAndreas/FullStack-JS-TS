//4a

function reverseArr<T>(arr:T[]):T[] {
    return arr.reverse();
}

console.log(reverseArr<string>(["a","b","c"]));
console.log(reverseArr<number>([1,2,3]));
console.log(reverseArr<boolean>([true,true,false]));
console.log(reverseArr<number>(["a","b","c"]));

class DataHolder<T> {
    #value: T;
    constructor(value: T) {
        this.#value = value;
    }
    get value():T {return this.#value}
    set value(value:T) {this.#value = value}
}    
let d = new DataHolder<string>("Hello");
console.log(d.value);
d.value = "World";
console.log(d.value);

let d2 = new DataHolder<number>(123);
console.log(d2.value);
d2.value = 500;
console.log(d2.value);