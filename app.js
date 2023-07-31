import {PersonClass, personObject} from './person.js';

let person1 = new PersonClass('John Doe', 20);
console.log(person1.name);
person1.greet();
personObject.age = person1.age;
console.log(personObject);