// if -else and else if

let age = 19;

if (age == 18) {
    console.log("now you are eligible");
}else if( age > 18) {
    console.log("you are already eligible");
}else {
    console.log("you are not eligible");
}

// ternary

let allowAcces = (age > 18)? "you are eligible":"you are not eligible";
console.log(allowAcces);

// switch
switch(4) {
    case 1:
        console.log("1");
        break;
    case 2:
        console.log("2");
        break;
    case 3:
        console.log("3");
        break;
    case 4:
        console.log("4");
        break;
    default:
        console.log("not found");
        break;
}