// create a function from a string
const sum = new Function('a', 'b', 'return a+b');

console.log(sum(2, 4));
