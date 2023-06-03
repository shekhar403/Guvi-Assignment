// You cant change the value of the msg
let message;
if (null || 2 || undefined )
{
    message = "welcome boss";
}
else
{
    message = "Go away";
}
  console.log(message);


// let  message = "welcome boss";
// declaring let message inside if block will set its scope inside the block, outside it , it won't exist.
// So it will print undefined.
// to fix it removed let.