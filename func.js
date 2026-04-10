/* Function
functions are reusable code blocks designed for particular tasks
functions are executed when they are called or invoked
functions are fundamental in all programming languages
function are executed when they are called or invoked
*/

// function without parameter
function sayHello() {
    console.log("hello world");
}
sayHello();


// function with parameter
function sum(x, y) {
    console.log(x+y);
}
sum(9, 13);


// arrow function
let multiply = (x, y) => x*y;
console.log(multiply(4, 5));


// OBJECT-----------------------------------------------------------------------------

// object are variable that store values and function both
// object are real world entity
// Value are stored as a key:value pairs
// function are stored as a key:function pairs

// example car, train, apple etc.

let user = {
    name: "unknown",
    age: 1,
    email: "unknown@mail.com"
}

console.log(user, ", type: ", typeof user);


let user2 = {};
user2.firstName = "Aditi",
user2.lastName = "Shukla",
user2.email = "aditi@mail.com"
user2.course = "B.tech",
user2.activeStatus = true

console.log(user2);


// ------------------------------
let user3 = {
    firstName: "Aditi",
    lastName: "Shukla",
    age: 5,
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
};
console.log(user3.fullName())


// constructor
function person(firstName, age) {
    this.firstName = firstName,
    this.age = age
};

let father = new person("alok", 45);
console.log(father);


//------------------------------scope--------------------------
// block level scope
let x = 10;
console.log(x);
if(1) {
    let x = 12;
    console.log(x);
}


// hoisting
// a variable can be defined before declaring a variable but only with "var"
z = 15;
var z;
