// let n = 123;
// console.log(add(n));
// function add(n)
// {
// let sum = 10;
// for(var i=0;i<n.length;i++){
//  sum+=n[i]
//  }
//  return sum;
// }

let n = 123;
console.log(add(n));
function add(n)
{
let sum = 0;
for(var i=0;i<n.toString().length;i++){
 sum+=parseInt(n.toString()[i]);
 }
 return sum;
}