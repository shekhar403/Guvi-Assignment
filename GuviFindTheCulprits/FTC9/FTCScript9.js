let a = prompt("Enter a number?");
a = +a
//Don't modify any code below this
if (a) {
 console.log( 'OMG it works for any number inc 0' );
}
else
{
 console.log( "Success" );
}


// "0" is true , but 0 is false
// to get into the else block a should be false, since a = "0", it was not getting false. 
// converting it into number 0, so it will become false