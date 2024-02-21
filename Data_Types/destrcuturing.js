// destructuring arr
let arr = ["one", "two"];
let [first, second] = arr;
console.log(first, second);

// swapping values
[first, second] = [second, first];
console.log(first, second);

// rest values
let arr1 = [1,2,3,4,5];
let [one, two, ...rest] = arr1;
console.log(one, two, rest);

// default value
let [str1, str2 = "defaultValue"] = "a";
console.log(str1, str2);

// object destructuring
let vector = {
    x: 10,
    y: 22
};
let {x, y} = vector;
console.log(x, y);

// if want to use other values
let {x: horizontal, y: vertical} = vector;
console.log(horizontal, vertical);

// rest in obj
let obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
};
let {a, ...restKeys} = obj;
console.log(a, restKeys);

// for functions
function sum({ a = 10, b = 10} = {}) {
    console.log(a + b);
}

sum({a: 1 });
sum();