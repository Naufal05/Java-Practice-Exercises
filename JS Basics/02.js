// To get the current date.
// Expected Output :
// mm-dd-yyyy, 


let today2 = new Date();
let dd = today2.getDate();
let mm = today2.getMonth()+1;
const yyyy = today2.getFullYear();

if (dd<10) {
    dd=`0${dd}`;
}

if (mm<10) {
    mm=`0${mm}`
}

today2 =`${dd}-${mm}-${yyyy}`;

console.log(today2)



