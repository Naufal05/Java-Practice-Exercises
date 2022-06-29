// 1. . Write a JavaScript function to print the “Hello World” message

function displayMessage() {
  console.log("Hello World");
}
displayMessage(); //Hello World

// 2.   Write a function that returns the square of a number

function findSquare(num) {
  return num * num;
}
console.log(findSquare(5)); //25

// 3.   Write a function to convert Celsius to Fahrenheit

// F = (C * 9/5) +32

function calFarenheit(cal) {
  return (cal * 9) / 5 + 32;
}
console.log(calFarenheit(10)); //50F

// 4.    Write a function to find the area of a given Rectangle

function rectangleArea(a, b) {
  return `The are of the rectangle is ${a * b}`;
}
console.log(rectangleArea(5, 8));

// 5. Write a function to find the area and perimeter of a Circle

// Area = pir2  perimeter = 2pir

function circleValues(rad) {
  return `Area: ${Math.PI * rad * rad},   Perimeter: ${2 * Math.PI * rad}`;
}
console.log(circleValues(15));

// 6. Write a function to reverse a number

/**Algorithm
 * 1. Initialise reverse Num
 * 2. Loop while num >0
 *
 * 3. Return reverse Num
 */
