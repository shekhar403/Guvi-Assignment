// Part 1
function Calculator(x, y) {
    let sum = x + y;
    let mul = x * y;
    let div = x / y;
    let sub = x - y;
    
    console.log("Sum:" + sum);
    console.log("Multiplication:" + mul);
    console.log("Division:" + div.toFixed(2));
    console.log("Subtraction:" + sub);
  }

// Part 2
  function CheckValue(x, y) {
    if (x && y) {
      console.log(x);
      console.log(y);
    }
      
  }

  // Part 3
  function printNameJS() {
    console.log("GUVI Geek Technologies, Chennai")
    alert("GUVI Geek Technologies, Chennai");
  }