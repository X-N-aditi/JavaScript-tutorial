/* Asynchronous Programming  ------------------------------
                            Async programming are that , in which when one task is running
in background and 1 task is running , so it save times and utilize full CPU power
it prevent freezing appliction
*/

// JS follow a approch to exceute program , it uses TOP to Bottom  and left to right , async change this

// sync function
// function first() {
//     console.log("first function executed");
// }
// function second() {
//     console.log("second function executed");
// }
// first();
// second();

// Async -------------------------------------------TimeOut----------------------------
// JS timeOut for Async
// it set a time to schedule a function to run after a delay
// setTimeout(myFunction, 3000);
// function myFunction() {
//     console.log("My Function is executed");
// }

// function ForLoop() {
//     for(let i = 1; i < 7; i++) {
//         console.log("ForLoop: " + i);
//     }
// }
// function WhileLoop() {
//     let i = 9;
//     while(i > 0) {
//         console.log("While Loop: " + i);
//         i--;
//     }
// }
// setTimeout(ForLoop, 2000);
// setTimeout(WhileLoop, 10000);

// Async----------------------------------Callback----------------------------------
/*
callback is a function that runs later 
it is afunction that passed as a argument in another function, so it can run later
it is especially used in event handling
*/
// function fetchUser(callback) {
//     setTimeout(function() {
//         const user = {name: "Alien", age: 1000};
//         callback(user);
//     }, 4000);
// }
// function displayUser(user) {
//     console.log(user.name + ", " + user.age);
// }
// fetchUser(displayUser);


// cons: problem is "pyramid of doom" or callback hell



// ASync-------------------------------Promise-----------------------------------------------
// promise shows Completeion or Faliure of Async function
// it shows 3 states--------"Pending", "Rejected", "fulfilled"

/*
Why Promises?
Many callbacks become hard to read and hard to maintain.

----------------------------------
let myPromise = new Promise(function(resolve, reject) {

  resolve(value); // when successful
  reject(value);  // when error
});
-----------------------------------
*/

let myPromise = new Promise(function(resolve, reject) {
  ok = false;

  if (ok) {
    resolve("OK");
  } else {
    reject("Error");
  }
});
function myDisplayer(value) {
    return value;
}
myPromise.then(
  function(value) {console.log(myDisplayer(7));},
  function(value) {console.log(myDisplayer(31));}
);

// Note:- We can not access Promise property state and result
// Core Method for Promise
/* .then(onFullFilled, onRejected)
   .catch(onRejected)
   .finally(onfinally)
*/


//Async --------------------------------Await------------------------------------
/*
promise chain can become long 
Async and await were created to reduce nesting and improves readability
*/

function Displayer(value) {
    console.log(value);
}

function Step1() {
    return Promise.resolve("A");
}

function Step2(value) {
    return Promise.resolve("B " + value);
}

function Step3(value) {
    return Promise.resolve("C " + value);
}

async function run() {
    let v1 = await Step1();
    let v2 = await Step2(v1);
    let v3 = await Step3(v2);
    Displayer(v3);
}

run();

// Note:  Using await outside an async function causes an error.

// Async -------------------------Fetch()----------------------------------------------
// fetch is a modern way to request data from server
// fetch() is Async and return a promise

// getting JSON Data
// fetch("data.json").then(function(response) {
//     return response.json();
// }).then(function(data) {
//     console.log(data);
// })


//-----------------------Module import and export---------------------------------
export function add(a, b) {
  return a + b;
}

import { add } from './math.js';
let result = add(2, 3);

// module name space 
// when we write "import Math as Mt" then Mt is the Namespace
// dynamic import use async await function 