let id = Symbol("id");
let id2 = Symbol("id");

console.log(id == id2);

console.log(id.toString());

let user = { name: "gowtham" };
user[id] = "unique id";

console.log(user);

for (key in user) {
    console.log(key);
}

let id3 = Symbol.for("id");
let id4 = Symbol.for("id");
console.log(id3 === id4);

console.log(Symbol.keyFor(id3));

console.log(Object.getOwnPropertySymbols(user));