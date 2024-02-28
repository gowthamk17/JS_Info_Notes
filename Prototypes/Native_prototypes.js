const obj = {}; // same as const obj = new Object();

// Object function constructor is the proto of the created object
console.log(obj.__proto__ == Object.prototype);

// Object constructor is directly pointed to the Object
console.log(Object.prototype.constructor == Object);

// other data types are inherited from object also
let ar = [];
console.log(ar.__proto__ == Array.prototype); // array gets its [[prototype]] from Array functions prototype
console.log(ar.__proto__.__proto__ == Object.prototype); // Array gets its prototype from Objects prototype
console.log(ar.__proto__.__proto__.__proto__ == null && {}.__proto__.__proto__ == null); // Objects prototype is null

// short note
// __proto__ is for obj's
// prototype is for functions
// constructor are included in obj created with function pointed to the original function

// for primitives when we try to use their a method on them 
// a wrapper object instantly created and disposed those methods are from the 
// primitive objects prototype
console.log((5).toString());

// borrowing from global prototypes
let arrayLike = {
    0: "one",
    1: "two",
    2: "three",
    length: 3,
}

arrayLike.join = Array.prototype.join;
console.log(arrayLike.join('-'));