// used for garbate collecting the key objects
// only objects can be used as keys
// when the object reference is removed it removed from map also

const weakMap = new WeakMap();
let user = { name: "john" };
weakMap.set(user, "..");

user = null;
// now the item will be removed from set and garbage collected 
// weakset does the same