// Defining the function:
function sum(num1, num2) {
  return num1 + num2;
}

// Calling the function:
console.log(sum(3, 6)); // 9

// declaring a function named greet()
function greet() {
  console.log("Hello there");
}
greet();

function sayThanks(name) {
  console.log(`Thanks for the purchase ` + name + ` Enjoy Shopping`);
}

sayThanks("Naufal");

//Default Parameter

function greeting(name = "stranger") {
  console.log(`Hello, ${name}!`);
}

greeting("Nick"); // Output: Hello, Nick!
// greeting(); // Output: Hello, stranger!

// helper function

function multiplyByNineFifths(number) {
  return number * (9 / 5);
}

function getFahrenheit(celsius) {
  return multiplyByNineFifths(celsius) + 32;
}

console.log(getFahrenheit(15)); // Returns 59

//Hoisitng

// program to display value
// a = 5;
// console.log(a);
// var a;

// program to display value
// console.log(a);
// var a = 5;

function greet() {
  b = "hello";
  console.log(b); // hello
  var b;
}
greet(); // hello
// console.log(b); //ReferenceError

//function hoisting

// program to print the text
greet2();

function greet2() {
  console.log("Hi, dude.");
}
