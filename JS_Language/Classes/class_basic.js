// creating a simple class
class Simple {
    constructor(aValue) {
        this.aValue = aValue;
    }
    printValue() {
        console.log(this.aValue);
    }
};

const simpleObj = new Simple("chsv");
simpleObj.printValue();

console.log(typeof Simple); // class is actually a function

console.log(Simple == Simple.prototype.constructor); // same as a function constructor points to itself

// console.log(Object.getOwnPropertyNames(Simple.prototype));

// diff between class and function
// we can't call class as like a function
// Simple();  // will throw error

// console.log(Simple); // when printing converting to toString it was show as class

// class methods enumerable's are set to false in prototype by default
// so when using for...in class does not include methods


// just like function we can make expressions and pass around
const cExp = class {
    constructor() {}
};

// we can use getter/setter in obj just as in literal objects

