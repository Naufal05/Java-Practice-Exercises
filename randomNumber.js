function genRandom(start, end) {
  return Math.floor(Math.random() * end) + start;
}

console.log(genRandom(1, 10)); // random int between 1 to 10
