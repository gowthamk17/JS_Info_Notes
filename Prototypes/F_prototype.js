// when creating a object by function we can use prototype
// key to add [[prototype]] to the created object

let item = {
    id: 123,
}

function User(name) {
    this.name = name;
}

User.prototype = item;

let newUser = new User("gowtham");

console.log(newUser.id);


// we can create a new object from the created object
function App(id) {
    this.id = id;
}

let app1 = new App(32);
console.log(app1);
let app2 = new app1.constructor(12);
console.log(app2);

console.log(app2.constructor == App);

// 