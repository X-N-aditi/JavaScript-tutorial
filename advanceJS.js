// JS -----------------------Meta programming---------------------------------------------
/* Meta programming refers program manipulation
1. Modify , inspect and control obj at runtime
2. Intercept running programs
3. Modify function and classes
*/

// with Object.keys() you can 
// inspect object property 
const user = {name: "Unknown", age: 600};
const myArr = Object.keys(user);
console.log(myArr);

// modify object behaviour
const User1 = {name: "unknown1", age: 2000};
Object.defineProperty(User1, "name", {get() {return "secret";}});
let name = User1.name;
console.log(name);

// generate dynamic code
const fn = new Function("a", "b", "return a + b");
let result = fn(3, 5);
console.log(result);


// -----proxy are used to intercept property opertaion like reading and writing
const User2 = {name: "unknwn3", age:40000};
const proxy = new Proxy(user, {
    set(target, property, value) {
        log(property + " ; " + value);
        return target[property];
    }
});
function log(message) {
  const time = new Date().toLocaleTimeString();
  console.log("[" + time + "] " + message + "<br>");
}
// change property
proxy.name = "NotAvailble";
proxy.age = 45;




//-------------------------------------Window-----------------------------------------------
// The Browser Object Model (BOM) allows JavaScript to "talk to" the browser.
/* the window object---
                        all global objects, function, variables are window object


window.document.getElementById("header");
                                                            this is same
document.getElementById("header");
*/

// we can define window size  by 
// window.inneHeight()------------(in pixel)
// window.innerWidth()------------(in pixel)

/* other method

window.open() - open a new window
window.close() - close the current window
window.moveTo() - move the current window
window.resizeTo() - resize the current window

*/

