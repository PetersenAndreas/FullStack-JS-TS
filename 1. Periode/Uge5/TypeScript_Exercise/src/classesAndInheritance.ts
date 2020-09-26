//3a
abstract class Shape {
    private _color:string;
    constructor(color:string){
        this._color = color;
    }
    abstract get area():number;
    abstract get perimeter(): number;
    
    get color():string {return this._color}
    set color (color:string) {this._color= color}
    toString(): string {return `${this._color}, ${this.area}, ${this.perimeter}`};
}

//3b
class Circle extends Shape{
    #radius:number;
    constructor(color: string, radius: number) {
        super(color);
        this.#radius = radius;
    }
    
    get area(): number {
        return Math.PI * this.#radius**2;
    }
    get perimeter(): number {
        return Math.PI * 2 * this.#radius
    }

    get radius():number {return this.#radius}
    set radius (radius:number) {this.#radius= radius}
}
console.log("Cirkel:")
let circle1 = new Circle("red", 12);
console.log(circle1.toString());
console.log(circle1.area);
console.log(circle1.perimeter);
console.log(circle1.radius);
circle1.radius = 55;
console.log(circle1.radius);



//3c

class Cylinder extends Circle {
    #height:number;
    constructor(color:string, radius: number, height: number) {
        super(color, radius);
        this.#height=height;
    }

    get perimeter(): number {
        throw "Not implementersfsfdsds"
    }

    get volume(): number {
        return Math.PI * this.radius**2 * this.#height;
    }

    get height():number {return this.#height}
    set height (height:number) {this.#height= height}

    toString(): string {return `${this.color}, ${this.#height}, ${this.radius}`};
}
console.log("Cylinder:")
let cylinder1 = new Cylinder("blue", 25, 10);
console.log(cylinder1.toString());
console.log(cylinder1.color);
console.log(cylinder1.height);
console.log(cylinder1.radius);
console.log(cylinder1.volume);




  