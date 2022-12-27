const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
let userInput = "";
rl.question("Enter the number from 1,10,100,1000,10000\n", function (number) {
    userInput = number;
    if (number == 1) {
        console.log("UNIT")
    } else if (number == 10) {
        console.log("TEN")
    } else if (number == 100) {
        console.log("HUNDRED")
    } else if (number == 1000) {
        console.log("THOUSAND")
    } else if (number == 10000) {
        console.log("TEN THOUSAND")
    }
    rl.close()
})

