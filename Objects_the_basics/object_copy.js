let obj1 = {user: "gowtham"}
let obj2 = obj1
obj2.name = "gowthamkumar"
console.log(obj1)
console.log(obj2)

console.log(obj1 === obj2)

let a = {};
let b = {};
console.log(a === b);

const obb1 = { user: "anonymous" }
obb1.user = "null"
console.log((obb1))

let clone = { clone: "cloned copy"};
Object.assign(clone, obb1, obj1, obj2)
console.log(clone)

clone.newObj = { new: "new" }

const newClone = structuredClone(clone)
console.log(newClone)

console.log(newClone.newObj === clone.newObj)

const log = console.log;

