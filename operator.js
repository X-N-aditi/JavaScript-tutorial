// JS operator
/*
1. Arithmatc
2. Assignment
3. Comparison
4. Conditional
5. Incement/decrement
*/

// arithmatic   (+, -, *, /, %, **)
let x = 10;
let y = 5;
console.log("Addition: ", x+y);
console.log("Substraction: ", x-y);
console.log("Multiplication: ", x*y);
console.log("Division: ", x/y);
console.log("Exponent: ", x**y);
console.log("Modulus: ", x%y);

// Increment or decrement   (++, --)
console.log("pre increment: ", ++x);        // 11
console.log("post increment: ", x++);        // 11           in place 12
console.log(x);
console.log("pre decrement: ", --x);         // 11
console.log("post decrement: ", x--);         // 11         in place  9

// Assignment (= , +=, -=, /=, *=, **=, %=, :)
let z = 5;
console.log(z);

z += 5;
console.log(z);

z -= 3;
console.log(z);

z *= 20;
console.log(z);


//  Comparision   (==, <=, >=, <, >)

console.log("x == y ", x == y);
console.log("x>y ", x>y);
console.log("x<y", x<y);
console.log("y>=x", y>=x);

// Conditionl (&&,  ||)

if(x > y && x > z) {
    console.log(true);
}else if(x > y) {
    console.log("x is greater");
}


