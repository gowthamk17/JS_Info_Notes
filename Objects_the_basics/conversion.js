// to bool
console.log(Boolean({}));

let user = {
    name: "gowtham",
    balance: 100,
    [Symbol.toPrimitive](hint) {
        return hint === "string" ? `{ name: ${this.name}, balance: ${this.balance} }` : this.balance;
    },
    toString() {
        return `{ name: ${this.name}, balance: ${this.balance} }`;
    },
    valueOf() {
        return {}
    }
}

console.log("17" + user);
console.log(+user);
console.log(user + 1000);

// toString and valueOf
console.log(user.toString());
console.log(user.valueOf());
