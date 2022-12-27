const readline = require("readline")
const line = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
let userInput = "";
line.question("Enter the number \n", function (number) {
userInput = number;
 if (number == 1) {
    console.log("SUNDAY");
}
else if (number == 2) {
    console.log("MONDAY");
}
else if (number == 3) {
    console.log("TUESDAY");
}
else if (number == 4) {
    console.log("WEDNESDAY");
}
else if (number == 5) {
    console.log("THURSDAY");
}
else if (number == 6) {
    console.log("FRIDAY");
}
else if (number == 7) {
    console.log("SATURDAY");
}
else {
    console.log("Enter the number between 1 t0 7");
}
line.close();
});