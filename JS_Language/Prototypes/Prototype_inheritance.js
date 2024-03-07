// all objects have a hidden [[Prototype]] property by spec it is null or point to any
// other object, if a value is not found in the obj it will checked in prototype chain

let user = {
    id: 0,
    name: "player",
    set userName (newName) {
        this.name = newName;
    }
};

let admin = {
    isAdmin: true,
    __proto__: user,
};

console.log(admin.id);  // get from user object

// can't write property by prototype
admin.id = 1;
console.log(admin.id); // 1
console.log(user.id);  // still 0

// prototype methods only access current object as this

admin.userName = "player admin";
console.log(admin.name);
console.log(user.name);

// for..in loop iterates over inherited properties too
for (const prop in admin) {
    console.log(prop);
}

// Object.keys only return current objects key only
console.log(Object.keys(admin));

// or we can use hasOwnProperty to check the key is current obj key or not
for (let key in admin) {
    if(admin.hasOwnProperty(key)) {
        console.log(key);
    }
}