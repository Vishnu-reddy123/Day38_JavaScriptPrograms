let a = Math.floor(Math.random() * 10)
let b = Math.floor(Math.random() * 10)
let c = Math.floor(Math.random() * 10)
console.log("a = " + a);
console.log("b = " + b);
console.log("c = " + c);
d1 = a + b * c;
d2 = c + a / b;
d3 = a % b + c;
d4 = a * b + c;
console.log("Value of d1 = " + d1);
console.log("Value of d2 = " + d2);
console.log("Value of d3 = " + d3);
console.log("Value of d4 = " + d4);
if (d1 > d2 && d1 > d3 && d1 > d4) {
    console.log("maximum value d1 = " + d1);
} else if (d1 < d2 && d1 < d3 && d1 < d4) {
    console.log("minimum value d1 = " + d1);
}
if (d2 > d1 && d2 > d3 && d2 > d4) {
    console.log("maximum value d2 = " + d2);
} else if (d2 < d1 && d2 < d3 && d2 < d4) {
    console.log("minimum value d2 = " + d2);
}
if (d3 > d1 && d3 > d2 && d3 > d4) {
    console.log("maximum value d3 = " + d3);
} else if (d3 < d1 && d3 < d2 && d3 < d4) {
    console.log("minimum value d3 = " + d3);
}
if (d4 > d1 && d4 > d2 && d4 > d3) {
    console.log("maximum value d4 = " + d4);
} else if (d4 < d1 && d4 < d2 && d4 < d3) {
    console.log("minimum value d4 = " + d4);
}