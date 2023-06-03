function second() {
    console.log("second alert");
    alert("second alert");
}

function createObject() {
    var myObject = {
        name : "Shekhar",
        printName : function() {
            console.log(this.name);
        } 
    }

    // add element to object
    myObject.roll = 19;

    // update existing data
    myObject.name = "Harapriya";

    console.log(myObject.name);
    console.log(myObject.printName());
    console.log(myObject.roll);
}


const { read } = require("fs");
// Anonymous function
// (function (msg){alert(msg)});
// ('SO');

let userinput = []
userinput.pus