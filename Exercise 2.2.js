let min = parseInt(prompt("Please enter the minimum number:"));
let max = parseInt(prompt("Please enter the maximum number:"));
if (min > max) {
    console.log("Error: The minimum number cannot be greater than the maximum number.");
    alert("Error: The minimum number cannot be greater than the maximum number. Try again.gain.");
}

else{

let number = parseInt(prompt("Please enter a number between " + min + " and " + max + ":"));
if (number >= min && number <= max) {
    console.log("The number " + number + " is between " + min + " and " + max + ".");
    alert("The number " + number + " is between " + min + " and " + max + ".");
}
else {
    console.log("The number " + number + " is not between " + min + " and " + max + ".");
    alert("The number " + number + " is not between " + min + " and " + max + ".");
}
}

