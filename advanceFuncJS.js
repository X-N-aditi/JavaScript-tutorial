// function
// function define
function intro() {
    let name = "unknown"
    console.log(name);
}
intro();

// using function constructor
let myintro = new Function("x", "y", "return x*y");
console.log(myintro(6, 8));

//using arrow function
let sum = (x, y) => x+y;
console.log(sum(9, 10));


// using function
let multiply = function(x, y) {return x*y};
console.log(multiply(3, 7));


// function hoisting
const subtract = minus(15, 13);
console.log(subtract);
function minus(x, y) {return x-y};


// toString return function as a String
function multiply2(a, b) {
  return a * b;
}
let text = multiply2.toString();
console.log(text);

// --------------------------------CallBack function-----------------------------------
// in this a function is passed as a parameter in another function to be called later
// callback are 2 types          1. Async    2.Sync
// Async --------- this function execute later , allowing the main program to execute first
// Sync ---------- this function exceute imidiatly, blocking another operations
// callback are used in JS for event handling mainly

// when  user click on button then a function is called
function changeColor() {
    document.getElementById("my").style.backgroundColor = "red";
}

//call back function---------------- call one function as a parameter from another func
let lst = ["apple", "pear", "guava"];

lst.forEach(function printVal(val) {
    console.log(val);
})

// this keyword uses for refering the object
// inside block if "this" is used then it refers to block level object and if it 
// used outside of block then it takes global scope object
const Person = {
    firstname : "Aditi",
    lastName : "Shukla",
    fullnm: function() {
        return this.firstname + " " + this.lastName;
    }
}
console.log(Person.fullnm());

// in strict mode "this" always refers to global object
"use trict"
let acc = this;



// ---------------------------call method-------------------------------------------------
// it is used to call a function with specific "this"
// it let call an obj use a method belonging to another obj

// call() method without argument
const Person1 = {name: "unknown1"}
const Person2 = {name: "unknown2"}
const person3 = {name: "unknown3"}

function greet(gretting) {
    return gretting + " " + this.name;
}

console.log(greet.call(Person2, "hello"));


// call() method with argument
const human = {
    fullname: function(planet, age) {
        return this.firstname + " " + planet + " " + age; 
    }
}
const human1 = {
    firstname :"Disable user"
};

console.log(human.fullname.call(human1, "Mars", 10000));

// call does not return new function
// call() does not return a reusable function.

// forEach function
let arr = [23, 45, 67, 24];
arr.forEach(i => console.log(i));

// map 
arr.map(function square(val) {
    console.log(val * 2);
});

// filter 
arr.filter(function even(val) {
    console.log(val%2 == 0);
})


// apply()  function let us write a method that can be used on differnet obj
// apply() function takes "this" as a first arg
// and another args will be second and passed as an array
console.log(greet.apply(Person1, ["HELLO"]));

/*
The only difference between apply() and call() is how arguments are passed.
The call() method takes arguments separately.
The apply() method takes arguments as an array.
*/


// bind function it is similar to call and apply but the only diffence it return a function that can be call later
const greetunknown1 = greet.bind(Person1);
console.log(greetunknown1());


// IIFE (Immediatly invoked function expression)
// unlike another function it does not need to be called , it immediatly invoked
(function() {
    let text = "Hello JavaScript";
    console.log(text);
})();





