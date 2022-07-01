/**Create a javascript function called countdown that accepts a number argument and starts a
 * countdown up till that numeric value has become zero and on value becoming zero it should log “DONE” on the console. */

function countDown(num) {
  let counter = setInterval(function () {
    num--;
    if (num <= 0) {
      clearInterval(counter);
      console.log("DONE");
    } else {
      console.log(num);
    }
  }, 1000);
}

countDown(4);
