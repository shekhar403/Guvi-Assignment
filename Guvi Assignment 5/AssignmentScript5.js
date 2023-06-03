
// Part 1
function findAverage() {
    let numberOfElements = prompt("enter number of element , max : 10");
    let sum = 0;

    for (i = 0; i < +numberOfElements; i++) {
        sum += parseInt(prompt("enter number :", i));
    }

    let totalAverage = sum / +numberOfElements;
    console.log("Average : ", totalAverage);
    alert("Average : " + totalAverage)
}

function findVowels() {
    let userName = prompt("Please enter your name");

    userNameVowelArray = userName.split("").filter(checkVowel);
    console.log(userNameVowelArray);
    alert(userNameVowelArray);
}

function checkVowel(nameChar) {
    if (nameChar === "a" || nameChar === "e" || nameChar === "i" || nameChar === "0" || nameChar === "u" ||
    nameChar === "A" || nameChar === "E" || nameChar === "I" || nameChar === "O" || nameChar === "U") {
        return true;
    } 

    return false;
}

class guvi_student {
    mark1 = 0;
    mark2 = 0;

    constructor(mark1, mark2) {
        this.mark1 = mark1;
        this.mark2 = mark2;
    }

    printMark() {
        console.log("Mark1 : " + this.mark1 + " Mark 2 : " + this.mark2);
    }
}

function createStudent() {
    let student1 = new guvi_student(90, 80);
    let student2 = new guvi_student(80, 70);
    console.log("Student 1");
    student1.printMark();
    console.log("Student 2");
    student2.printMark();
}