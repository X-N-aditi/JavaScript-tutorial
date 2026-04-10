// Object
/* object are created in many ways in JS
1. using Object literal
2. using new keyword
3. using object constructor
4. using Object.assign()
5. using Object.create()
6. using Object.fromEntries()
*/

// using object literal
const human = {
    species: "Homo"
}
console.log(human.species);

// using new keword
const human1 = new Object({
    species: "Homo+human"
});
console.log(human1.species);

// using Object.create()
const person = {
    name: "usr1",
    age:20
};
const x = Object.create(person);
x.name = "degree";
console.log(x.name);

//fromEnteries
const fruits = [
    ["tomato", 200],
    ["patato", 500]
];
const myObj = Object.fromEntries(fruits);
console.log(myObj);

// Iteration
// Object.assign copy object property from 1 to another
const Veg = {
    Vegename: "Potato",
    type: "vegetable"
}
const fruit = {
    fruname: "pineApple",
}
console.log(Object.assign(Veg, fruit));

// Object.enteries return key
// Object.value return value

const person5 = {
  firstName : "John",
  lastName : "Doe",
  age : 50,
  eyeColor : "blue"
};

let text = Object.values(person5);
console.log(text);

// get and set
const people = {
  Name: "Alpha",
  language: "en",
  get lang() {
    return this.language.toUpperCase();           // get
  }
};
console.log(people.lang);



const people1 = {
  Name: "Alpha",
  language: "",
  set lang(lang) {
    this.language = lang.toUpperCase();           // get
  }
};
people1.lang = "Arab";
console.log(people1);



// ----------------------------Object Managemant-------------------------
/* 
writable ---- if true, the value can be changed, oyherwise read-only
enumerable ---- if true, then listen in loop , otherwise not listed
configurable ---- if true, then the property can be deleted, or modified otherwise not
*/

// Object.defineProperty()
let user = {};
Object.defineProperty(user, 'name', {value:'Beta'});
let descriptor = Object.getOwnPropertyDescriptors(user, 'name');
console.log(JSON.stringify(descriptor, null, 2));


// Object.getOwnPropertyDescriptor
let user1 = {
    name: "gamma"
};
let descriptor1 = Object.getOwnPropertyDescriptors(user1, 'name');
console.log(JSON.stringify(descriptor1, null, 2));

// Object.defineproperty
let user3 = {
    name:"eclipse"
};
Object.defineProperty(user3, 'name', {writable:false});
let descriptor3 = Object.getOwnPropertyDescriptors(user3, 'name');
console.log(JSON.stringify(descriptor3, null, 2));


// Task
const obj = {counter:0};
Object.defineProperty(obj, "reset", {
    get : function() {this.counter = 0;}
});
Object.defineProperty(obj, "increment", {
    get : function() {this.counter++;}
});
Object.defineProperty(obj, "decrement", {
    get : function() {this.counter--;}
});
obj.reset;
console.log(obj.counter);
obj.increment;
console.log(obj.counter);
obj.decrement;
console.log(obj.counter);


/*
// Prevents adding object properties
Object.preventExtensions(object)

// Returns true if properties can be added to an object
Object.isExtensible(object)

// Prevents adding and deleting object properties
Object.seal(object)

// Returns true if object is sealed
Object.isSealed(object)

// Prevents any changes to an object
Object.freeze(object)

// Returns true if object is frozen
Object.isFrozen(object)
*/


const fruit4 = ["Banana", "Orange", "Apple", "Mango"];
Object.preventExtensions(fruit4);
// fruits.push("Kiwi");              error


//---------------------prototype-------------------------------------------
let animal = {
    eats: true
};
let rabbit = {
    jumps: true
}
console.log(rabbit.__proto__ = animal);
console.log(rabbit);


