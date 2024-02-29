// checks weather a object is belong to a Class or not it also considers prototyping to
let arr = [];
console.log(arr instanceof Array); // true
console.log(arr instanceof Object); // true

// Symbol.hasInstance for changing the prototype lookup
class Sample {
    static [Symbol.hasInstance]() {
        return false;
    }
}

const sample = new Sample();
console.log(sample instanceof Sample); // false

Sample[Symbol.hasInstance] = (obj) => obj.isSample;
const newSample = { isSample: true };
console.log(newSample instanceof Sample); // true

// in case we changed prototype object of a class the prototype will stop there


// using toString instead instanceof
// extract toString from object and bind it to another class to get its type
let toString = Object.prototype.toString;

console.log(toString.call([])); //[object Array]
console.log(toString.call(3)); //[object Number]

// Symbol.toStringTag
// we can change the toString for our class also
console.log(toString.call(Sample)); // [object Function]
Sample[Symbol.toStringTag] = "Sample";
console.log(toString.call(Sample)); // [object Sample]

