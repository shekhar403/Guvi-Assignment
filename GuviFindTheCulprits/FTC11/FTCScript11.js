let login = 'Employee';
let message = (login === "Employee" || login === "Director") ? "Greetings" : (login === "" ? "No Login" : "")
console.log(message);

login = 'Director';
message = (login === "Employee" || login === "Director") ? "Greetings" : (login === "" ? "No Login" : "")
console.log(message);

login = 'Sweeper';
message = (login === "Employee" || login === "Director") ? "Greetings" : (login === "" ? "No Login" : "")
console.log(message);