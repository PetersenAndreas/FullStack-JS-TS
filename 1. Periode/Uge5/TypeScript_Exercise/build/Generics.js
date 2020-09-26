"use strict";
//4a
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _value;
function reverseArr(arr) {
    return arr.reverse();
}
console.log(reverseArr(["a", "b", "c"]));
console.log(reverseArr([1, 2, 3]));
console.log(reverseArr([true, true, false]));
console.log(reverseArr(["a", "b", "c"]));
class DataHolder {
    constructor(value) {
        _value.set(this, void 0);
        __classPrivateFieldSet(this, _value, value);
    }
    get value() { return __classPrivateFieldGet(this, _value); }
    set value(value) { __classPrivateFieldSet(this, _value, value); }
}
_value = new WeakMap();
let d = new DataHolder("Hello");
console.log(d.value);
d.value = "World";
console.log(d.value);
let d2 = new DataHolder(123);
console.log(d2.value);
d2.value = 500;
console.log(d2.value);
//# sourceMappingURL=Generics.js.map