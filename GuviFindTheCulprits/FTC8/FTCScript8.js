// var a = "2" > "12";

// fix 1:
let num1 = "2"
let num2 = "12"
var a = +num1 > +num2

// fix 2 :
// var a = 2 > 12

//Don't touch below this
if (a) {
  console.log("Code is Blasted")
}
else
{
  console.log("Diffused") 
}


// "2" > "12" will return true as the strings are being compared.
// to compare number compare the number formats or convert the strings to number / Int