/**mplement a javascript function as sum(1)(2)(3) which
 * should sum the numbers and give 6 as an output. */

function sum(x) {
  return function (y) {
    return function (z) {
      return x + y + z;
    };
  };
}

console.log(sum(1)(2)(3));
