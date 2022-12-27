let a = Math.floor(Math.random() * 900 + 100);
let b = Math.floor(Math.random() * 900 + 100);
let c = Math.floor(Math.random() * 900 + 100);
let d = Math.floor(Math.random() * 900 + 100);
let e = Math.floor(Math.random() * 900 + 100);
console.log("a: " + a);
console.log("b: " + b);
console.log("c: " + c);
console.log("d: " + d);
console.log("e: " + e);
if(a > b && a > c && a > d && a > e){
    console.log("a is maximum: " + a);
elseif(a < b && a < c && a < d && a < e)
    console.log("a is minimum: " + a);
}
if(b > a && b > c && b > d && b > e){
    console.log("b is maximum: " + b);
    elseif(b < a && b < c && b < d && b < e)
    console.log("b is minimum: " + b);
}
if(c > a && c > b && c > d && c > e){
    console.log("c is maximum: " + c);
    elseif(c < a && c < b && c < d && c < e)
    console.log("c is minimum: " + c);
}
if(d > a && d > b && d > c && d > e){
    console.log("d is maximum: " + d);
    elseif(d < a && d < b && d < c && d < e)
    console.log("d is minimum: " + d);
}
if(e > a && e > b && e > c && e > d){
    console.log("e is maximum: " + e);

elseif(e < a && e < b && e < c && e < d)
    console.log("e is minimum: " + e);
}


