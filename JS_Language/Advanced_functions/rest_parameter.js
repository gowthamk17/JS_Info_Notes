// rest parameter for array
function sum(a, b, ...rest) {
    let total = a + b;
    for (let value of rest) total += value;
    return total;
}

console.log(sum(1,2));
console.log(sum(1,3,4,5));

// using spread operation on input
let arr = [1,3,4,5,5];
console.log(sum(0,0, ...arr));
