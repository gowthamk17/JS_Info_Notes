// map
const map = new Map();
map.set(1, "1234");
// can also set obj as key
let user = {
    name: "hon"
}
map.set(user, "admin");

console.log(map.get(user));

// check exist
console.log(map.has(1));

// get size
console.log(map.size);

// iterators
map.set(2, "two");
map.set(3, "three");
map.set(4, "four");
map.set(5, "five");

for (let key of map.keys()) {
    console.log(key);
}

for (let value of map.values()) {
    console.log(value);
}

for (let pair of map) {
    console.log(pair);
}

// using entries
let map1 = new Map(Object.entries(user));
console.log(map1);

// creating obj from map
let obj = Object.fromEntries(map.entries());
console.log(obj);
