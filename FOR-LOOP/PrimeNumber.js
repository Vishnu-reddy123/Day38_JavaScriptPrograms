const readline = require("readline")
const line = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
let userInput = "";
line.question("Enter the number\n", function (number) {
    userInput = number;
    for(i = 2; i <= number / 2; i++)
    if((number % i == 0))
    console.log("Given number is not Prime");
    else console.log("Given number is Prime");
    line.close();
});