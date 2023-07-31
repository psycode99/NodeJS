// (function(exports, require, module, __filename, __dirname) {
//     // Module code actually lives in here
//     console.log(__dirname, __filename);
//     });
    

const personObject = {
    name: 'John Doe',
    age: 30,
}

class PersonClass{
    constructor(name, age){
        this.name = name;
        this.age = age;
         
    }

    greet(){
        console.log(`Hello ${this.name}`);
    }
}

export {personObject, PersonClass};

