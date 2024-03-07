let user = { name: "gowtham" };

console.log(user?.name);
console.log(user?.age);

user.sayHi = () => {
    console.log("HI");
}

user.sayHi()
user.sayHello?.()

console.log(user["name"])
console.log(user?.["age"])