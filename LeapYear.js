const readline = require("readline")
const line = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
let userInput = "";
line.question("Enter the year \n", function (year) {
userInput = year;
    if ((year % 4 == 0) && (year % 100 != 0 ) || (year % 400 == 0)) {
        console.log(year + ' is a leap year');
    }
    else{
        console.log(year + ' is not a leap year');
    }
line.close();
});
