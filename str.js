// string 
/* string are cretaed using literals 
1. Single literals 'user'
2. double literals "user"
3. backticks `user`
*/

let text = "good mrng";
console.log(text, ", type: ", typeof text);

console.log(text.length);

let text2 = new String("good mrng");
console.log(text == text2);          // compare value
console.log(text === text2);        // compare two object

// string method
// length
console.log("length: ", text.length);

// char at index 
console.log(text.charAt(0));

// char code               return UTF-16 code
console.log(text.charCodeAt(0));

// char code point
console.log(text.codePointAt(0));

// index letter
console.log(text[2]);
console.log(text.at(-2));
console.log(text.at(2));

// concat
console.log(text.concat(" unknown"));

// upper and lower case
console.log(text.toLowerCase());
console.log(text.toUpperCase());

// slice
console.log(text.slice(1,6));

// indexof
let index = text.indexOf("mrng");
console.log(index);

// last index of
let text3 = "Please locate where 'locate' occurs!";
let index3 = text.lastIndexOf("John");
console.log(index3);