"use strict";

let user = {
    id: 101,
    name: "player"
};

let descriptor = Object.getOwnPropertyDescriptor(user, "name");

console.log(descriptor);

Object.defineProperty(user, "key", {
    value: 10101001,
})

descriptor = Object.getOwnPropertyDescriptor(user, "key");
console.log(descriptor);

// changing writable for id
Object.defineProperty(user, "id", {
    writable: false,
});
// user.id = 0; // without use strick error won't throw here
console.log(user.id);

// making id not iterable
Object.defineProperty(user, "id", {
    enumerable: false
});

for (let prop in user) console.log(prop); // id won't be in this list

// non-configurable 
// for pi
descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor);

// Object.getOwnPropertyDescriptors - for getting more than one property descriptor
// Ojbect.defineProperties - for changing more than one property configuration

// prevent user for adding more attributes
Object.preventExtensions(user);
// user.user = "me"; // -> this line will throw error

