function compareMarks(m1, m2) {
    if (+m1 === +m2) {
        console.log("Equal");
        alert("Equal");
    }
    else {
        console.log("Not Equal");
        alert("Not Equal");
    }
}

function testIncDec() {
    let a = 1; // a = 1
    console.log(a++); // prints 1, a = 2
    console.log(a); // prints 2, a = 2 
    let b = 1; // b = 1
    console.log(b--); // prints 1, b = 0
    console.log(b); // prints 0
}

function findFactorial(num) {
    if (num == 0) {
        return 1;
    }

    return num * findFactorial(num - 1);
}