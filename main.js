
// First it creates the var myAge then assigns myAge to 21
let myAge = 21;

// Same as myAge it creates the var and assigns the value of 2
let earlyYears = 2;

earlyYears *= 10.5;

let laterYears = myAge - 2;

/* 
    earlyYears is set to 2, multiplies by 10.5, then subtracting 2 years.
    The result of that is applied to myAge which is then set to laterYears
*/

// Single step lets us multiple the laterYears by 4 to get the dog years
laterYears *= 4;

// console.log(earlyYears);
// console.log(laterYears);

let myAgeInDogYears = earlyYears + laterYears;


// assigning a string to my name, then setting it to lowercase
let myName = 'Chris';
myName.toLowerCase();

// String concantenation to "inject" myName and myAge into the exisitng string and creating a final string.
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${laterYears} years old in dog years.`);
