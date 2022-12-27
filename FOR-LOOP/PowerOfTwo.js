const prompt = require("prompt-sync")({ sigint: true });
const number = parseInt(prompt("Enter a number : "));
for (a = 1; a <= number; a++) {
    Power = (2 ** a)
}
console.log("Power of 2 = " + Power)