// mixins are a way to inherit from more than one classs
// we utilise the Object.assign to copy methods from an object to a class
let mixin = {
    printHello() {
        console.log('printHello');
    }
};

class Nothing {}

class Another extends Nothing {}

Object.assign(Another.prototype, mixin);

const another = new Another();
another.printHello();

// mixins can also inherit from another mixis

let mixinChild = {
    __proto__: mixin,
    printYo() {
        console.log('yo');
    }
};

Object.assign(Another.prototype, mixinChild);

another.printYo();

// one of the use case of mixin is they can be used for addiing eventHandlers for classes