// let num = 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)

let myArray = []
for (i = 1; i <= 10; i++) {
    if (i % 3 == 0) {
        myArray.push(i)
        console.log(myArray.join(" "))
        myArray = []
        continue
    }
    myArray.push(i)

    if (i == 10) {
        console.log(myArray.join(" "))
    }
    
}