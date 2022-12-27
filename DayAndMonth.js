const readline = require("readline")
const line = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
let userInput = "";
line.question("Enter the day \n", function (day) {
    line.question("Enter the month \n", function (month) {
    userInput = day;
    userInput = month;
if ((month == 3 && day >= 20 && day <= 31))
            console.log("True");
        else if ((month == 4 && day >= 1 && day <= 30))
            console.log("True");
        else if ((month == 5 && day >= 1 && day <= 31))
            console.log("True");
        else if ((month == 6 && day >= 1 && day <= 20))
            console.log("True");
        else
            console.log("False");
            line.close();
    })
})
