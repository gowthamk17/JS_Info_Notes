// set
const set = new Set([1,2,3,4,5]);

set.add(6);
set.delete(1);
console.log(set.has(3));

for (let i of set) console.log(i);

console.log(set.values());

console.log(set.size);

set.clear();

console.log(set.size);
