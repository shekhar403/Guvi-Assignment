function addNumbers() {
    count = 0;
    sum = 0;
    do {
        let number = prompt("Enter a number , Maximum count : 10, enter a negetive number to stop");

        if (+number < 0) {
            break;
        }

        sum += +number;
        count++;
    } while(count < 10);

    alert("sum : " + sum);
}

// Q2 : 10 reserve words
// abstract	
// arguments
// boolean	
// break	
// byte
// case	
// catch	
// char	
// const	
// continue

function findFactorial(num) {
    if (num == 0) {
        return 1;
    }

    return num * findFactorial(num - 1);
}