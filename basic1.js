// javascript ---------
// 1 HTML for define content of web page
// 2 CSS for degining layout
// 3 JS for programming the behaviour of web pages


// statement              ----------------------------------------------------------------------
let x = 10;                           
console.log(x);


// comments              ------------------------------------------------------------------
// single line comment                 
/* Multi
line 
comment */

// Variable             container to store value -------------------------------------------------
// in  javascript "let" and "const" are used to define varibale  in modern js
// "var" is used in older version of js , it has global scope

let y = 11;           // 1 js page level scope
console.log(y);
if (1) {
    let y = 12;            // loop level scope or block level scope
    console.log(12);
}

// if we declare a variable using let then we can change its value and it can not be redeclare
let z = 13;
z = 14;
console.log(z);    

// let z  = 15;

// if we declare a varible using "const" then we can not changes it's value bcz  i is behave like
//  a constant, and we can not redeclare
const pi = 3.14;
// pi = 4.17;
alert(pi);
// const pi = 3.15;


// if we declare a varible using "var", it has global scope and also it can be redeclare
var age = 22;
console.log(age);
var age = 100;
console.log(age);



// identfier   ----------------------------------------------------------------
// javascript varible name are defined via identiier
// identifir has some rules
/*
1. Names can not start with digits
2. Names contains only alphabets , digit and special char like $ and _
3. Every identifier is unique , like Apple, APPLE, apple all are different
4. Names can not be an JS Reserve keywords like class, for, if , else, try etc.
*/

// if we use _ at starting of the identifer(varible) names , then it become private 
// let _name = "unknown";

// it can not be accessed directly outside of class



// Javascript DataTypes ------------------------------------------------------
// js has 8 type of data
/*
1. String
2. Number
3. boolean
4. Bigint
5. Object
6. Undefined
7. Null
8. Symbol
*/

// Number
let height = 15;
console.log(height, ", type: ", typeof height);

let weight = 15.3;
console.log(weight, ", type: ", typeof weight);

// String
let email = "unknown@mail.com"
console.log(email, ", type: ", typeof email);

// Booelan
let isAdmin = true;
console.log(isAdmin , ", type: ", typeof isAdmin);

// BigInt
let BigValue = 1234567890123456789012345n;
console.log(BigValue , ", type: ", typeof BigValue);

// Object
let user = {
    phoneNo: 26381738
};
console.log(user, ", type: ", typeof user);

let fruits = ["apple", "banana"];
console.log(fruits, ", type: ", typeof fruits);

// undefined
let example = undefined;
console.log(example, ", type: ", typeof example)

let p;
console.log(p, ", type: ", typeof p);

// Null
let we = null;
console.log(we, ", type: ", typeof we);

// Symbol
let pq = Symbol();
console.log(pq, ", type: ", typeof pq);

