// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// for (var i = 0; i <=10; i++) {
//  if(numsArr[i] %2 == 0 )
//  {
//  numsArr[i] = even
//  }
// }
// console.log(numsArr);

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// for (var i = 0; i <=10; i++) {
//     if(numsArr[i] %2 === 0 ) {
//         numsArr[i] = "even";
//     }
// }

// console.log(numsArr);
for (var i = 0; i <=10; i++) {
    if(numsArr[i] %2 !== 0 ) {
        numsArr[i] = "even";
    }
}

console.log(numsArr);