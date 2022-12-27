const readline = require("readline")
const line = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
let userInput = "";
line.question("Enter the number\n", function (number) {
    userInput = number;
    sum = 0;
    for (i = 1; i <= number; i++) {
        sum = sum + 1/ i;
    }
    console.log("Harmonic value = " + sum);
    line.close();
});