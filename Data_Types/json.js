let user = {
    id: 2323,
    name: "player",
    unde: undefined,
    sayHi() {
        console.log("ie");
    }
};
let converted = JSON.stringify(user, null, 4);
console.log(converted);
// undefined, function are skipped

// toJson
let obj = {
    toJSON() {
        return { id: 333 }
    }
};

console.log(JSON.stringify(obj));

// parse
console.log(JSON.parse(converted));
