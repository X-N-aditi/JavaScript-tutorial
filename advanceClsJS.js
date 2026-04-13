/*
class n js 
class are blueprint of object oriented programming ,  they have schema of orgainising object's behaviour
and object is a systematic manner 

to create a class we use "class" keyword
*/

// class Car {
//     constructor(brand, price) {
//         this.brand =  brand;
//         this.price =  price;
//     }
//     detail(brand, price) {
//         console.log("brand: " + this.brand + ", price: " + this.price);
//     }
// }
// const myCar = new Car("Ford" , 12000000);
// console.log(myCar.detail());

// inhertance
// extending 1 class property in another class is called inheritance
// super() refers to parent class , this refers to current class
// class Car {
//     constructor (brand) {
//         this.brand = brand;
//     }
//     detail(brand) {
//         console.log("Brand: " + brand);
//     }
// }
// class BMW extends Car {
//     constructor(brand, color) {
//         super(brand);
//         this.color = color;
//     }
//     wholeDetail (brand, color) {
//         console.log("Brand: " + this.brand + ", color: " + this.color);
//     }
// }
// const car1 = new BMW("BMW", "black");
// console.log(car1.wholeDetail());

// getter setter
// class Car {
//     constructor (brand) {
//         this.brand = brand;
//     }
//     set bnm(x) {
//         this.brand = x;
//     }
//     get bnm() {
//         console.log(this.brand);
//     }
// }
// const car1 = new Car("toyato");
// console.log(car1.bnm);



// Note:---- class declaration are not hoisted like function in JS



// ---------------------------static ----------------------------
class Car {
    constructor(brand) {
        this.brand = brand;
    }
    static rating() {
        console.log("rating: " + 5);
    }
}
const myCar1 = new Car("Farari");
console.log(Car.rating());