// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var new_string = "";
 
// for (var i = 1; i < 11; i++) {
//  new_string += numsArr[i] + , 
// }
// console.log(new_string);

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";
 
for (var i = 1; i < 11; i++) {
    if (i !== 10) {
        new_string += numsArr[i] + ",";
    }
    else{
        new_string += numsArr[i];
    }
 
}
console.log(new_string);