// arrays

// declaration
let arr = new Array();
let arr1 = [1,2,3];

// length
console.log(arr1.length);
console.log(arr1);

console.log(arr1.pop());

arr1.push(4);
console.log(arr1);

console.log(arr1.shift());
console.log(arr1);

arr1.unshift(1);
console.log(arr1);

let frArr = [];
frArr[999] = 0;
frArr[0] = 0;
console.log(frArr);
console.log(frArr.user);

// for 
for (let i = 0; i < arr1.length; i++) console.log(arr1[i]);

// for...of
for (let i of arr1) console.log(i);

// for...in works but bad practise
for (let i in arr1) console.log(i);

// changin arr length truncates or add values to arr
arr1.length = 5;
console.log(arr1);

let arr2 = [
    [0, 1],
    [1, 0]
];
console.log(arr2);

// array methods
// splice
arr = [1,2,3,4,5];
arr.splice(2, 1, undefined);
console.log(arr);

// use slice to copy an array
let arr3 = arr.slice();
console.log(arr3, arr3 === arr);

// concat arrays
console.log(arr3.concat(arr2, 99));

// to concat an arraylike obj
const arrayLike = {
    0: "neu",
    1: "while",
    3: "nope",
    [Symbol.isConcatSpreadable]: true,
    length: 2,
}
console.log(arr3.concat(arrayLike));

// using forEach
arr3.forEach((value, index, array) => {
    console.log(`${value} is at ${index} in ${array}`);
})

// search in an array

// indexOf/lastIndexOf
// works the same as strings no noteworthy to check

// includes - works the same as string
// -> it handles NaN correctly indexOf does not check the index of a NaN element
// by default these search methods use === comparison

// find, findIndex, findLastIndex
// find is used to track an element with an specific condition when the function returned 
// true current item is returned if none found with that condition return undefined
// findIndex is the same but it returns the index, findLastIndex check from behind
let users = [
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 1 },
    { id: 2 },
]
console.log(users.find(item => item.id == 1));

// filter -> same as find but for all of array doest not stop at first green signal
console.log(users.filter(item => item.id > 3));

// map -> runs an function all items and return the result look like forEach but forEach 
// does not save the return
console.log(users.map(item => item.id * 2));

// sort -> by default string for number we need to give an callback for compare func
console.log(users.sort((a,b) => a.id - b.id));

// reverse -> reverse an array in place method
console.log(users.reverse());

// split & join
console.log("1,2,3,4,5".split(','));
console.log([1,2,3,4,5].join(';'));

// reduce -> calcualate a single value from an array
arr = [1,2,3,4,5]
console.log(arr.reduce((sum, value) => sum + value, 0));

// arrays are object so,
console.log(typeof {} === typeof []);

// to check if a variable is an array
console.log(Array.isArray([]));
console.log(Array.isArray({}));


