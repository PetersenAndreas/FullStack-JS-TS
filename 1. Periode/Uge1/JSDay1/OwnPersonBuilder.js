/*--------------------execise 3-------------------------*/
class Person {
  constructor(name = "NoName", age = "NoAge") {
    this.name = name;
    this.age = age;
  }

  get info() {
    return this.buildPerson();
  };

  buildPerson() {
    return `${this.name}, ${this.age}`;
  }
}
exports.Person = Person;
