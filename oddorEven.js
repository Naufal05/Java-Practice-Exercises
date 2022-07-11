// Print all even numbers from 0 – 10

function printOdd(num) {
  for (let i = 1; i < num; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
}

function printEven(num) {
  for (let i = 1; i < num; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

console.log(printEven(10));
console.log(printOdd(10));
