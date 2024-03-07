let user = {
    name: "user1",
    id: 123,
    get userName() {
        return this.name + '-' + this.id;
    },
    set userName(value) {
        [this.name, this.id] = value.split('-');
    }
}
console.log(user.userName);
user.userName = 'uid-11';
console.log(user.name);
console.log(user.id);

// set a private property and use it by accrssors
Object.defineProperty(user, "_secretKey", {
    value: "",
    enumerable: true,
    writable: true,
    configurable: true,
});

Object.defineProperty(user, "secretKey", {
    get() {
        this._secretKey;
    },
    set(newSecretKey) {
        this._secretKey = newSecretKey;
    },
    enumerable: true,
    configurable: true,
})

user.secretKey = 123;
console.log(user._secretKey);

