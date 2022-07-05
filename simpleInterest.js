// to find the simple interest

function simpleint(principle, rate, time) {
  var finalAmt = principle + principle * time * rate;
  return finalAmt;
}

console.log(simpleint(2000, 5, 2));
