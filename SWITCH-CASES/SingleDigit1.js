const readline = require("readline")
const line = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
let userInput = "";
line.question("Enter the number \n", function (number) {
userInput = number;
switch (number){
    case 0:
        console.log("ZERO"); 
            break;
            case 1:
        console.log("ONE");
        break;
        case 2:
        console.log("TWO");
        break;
        case 3:
        console.log("THREE");
        break;
        case 4:
        console.log("FOUR");
        break;
        case 5:
        console.log("FIVE");
        break;
        case 6:
        console.log("SIX");
        break;
        case 7:
        console.log("SEVEN");
        break;
        case 8:
        console.log("EIGHT");
        break;
        default:
            console.log("Enter the number between 0 to 8");
            break;
}
line.close();
});