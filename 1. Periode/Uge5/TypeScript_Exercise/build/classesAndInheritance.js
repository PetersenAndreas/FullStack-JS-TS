"use strict";
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
var _radius, _height;
//3a
class Shape {
    constructor(color) {
        this._color = color;
    }
    get color() { return this._color; }
    set color(color) { this._color = color; }
    toString() { return `${this._color}, ${this.area}, ${this.perimeter}`; }
    ;
}
//3b
class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        _radius.set(this, void 0);
        __classPrivateFieldSet(this, _radius, radius);
    }
    get area() {
        return Math.PI * Math.pow(__classPrivateFieldGet(this, _radius), 2);
    }
    get perimeter() {
        return Math.PI * 2 * __classPrivateFieldGet(this, _radius);
    }
    get radius() { return __classPrivateFieldGet(this, _radius); }
    set radius(radius) { __classPrivateFieldSet(this, _radius, radius); }
}
_radius = new WeakMap();
console.log("Cirkel:");
let circle1 = new Circle("red", 12);
console.log(circle1.toString());
console.log(circle1.area);
console.log(circle1.perimeter);
console.log(circle1.radius);
circle1.radius = 55;
console.log(circle1.radius);
//3c
class Cylinder extends Circle {
    constructor(color, radius, height) {
        super(color, radius);
        _height.set(this, void 0);
        __classPrivateFieldSet(this, _height, height);
    }
    get perimeter() {
        throw "Not implementersfsfdsds";
    }
    get volume() {
        return Math.PI * Math.pow(this.radius, 2) * __classPrivateFieldGet(this, _height);
    }
    get height() { return __classPrivateFieldGet(this, _height); }
    set height(height) { __classPrivateFieldSet(this, _height, height); }
    toString() { return `${this.color}, ${__classPrivateFieldGet(this, _height)}, ${this.radius}`; }
    ;
}
_height = new WeakMap();
console.log("Cylinder:");
let cylinder1 = new Cylinder("blue", 25, 10);
console.log(cylinder1.toString());
console.log(cylinder1.color);
console.log(cylinder1.height);
console.log(cylinder1.radius);
console.log(cylinder1.volume);
//# sourceMappingURL=classesAndInheritance.js.map