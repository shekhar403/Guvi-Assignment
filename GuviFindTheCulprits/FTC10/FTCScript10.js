let value = prompt('How many runs you scored in this ball');
value = +value
if (value === 4) {
      console.log("You hit a Four");
} else if (value === 6) {
      console.log("You hit a Six");
} else {
      console.log("I couldn't figure out");
}


// value is a string. convert it to num  / int to make it work. (+value or parseInt(value))