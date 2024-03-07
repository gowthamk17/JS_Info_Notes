// creating obj
let user = new Object();
let anotherUser = {}

// console.log(user, anotherUser)

// creating with values

let currentUser = {
    name: "gowtham",
    age: 22,
    "is he robot": false
}

// console.log(currentUser.name)
// console.log(currentUser.age)

currentUser.isAdmin = true;

// console.log(currentUser.isAdmin)

delete currentUser.isAdmin

// console.log(currentUser.isAdmin)

// console.log(currentUser["is he robot"])

// access multi work key using expression
let isHeRobot = "is he robot"

// console.log(currentUser[isHeRobot])

let favFruit = "apple"

currentUser[favFruit] = 10

// console.log(currentUser[favFruit])

function createUserObj(name, age) {
    return {
        name,
        age
    }
}

const sessionUser = createUserObj("user123", 99)
// console.log(sessionUser)

// using reserved keywords for key
// console.log({for: "for", const: "constant", let: "local scope"})

// let obj = {}
// console.log(obj.__proto__)
// obj.__proto__ = 44
// console.log(obj.__proto__)
// obj.__proto__ = {a: {}}
// console.log((obj.__proto__))

let obb = { test: undefined }
// console.log(obb.test === undefined)
// console.log("test" in obb)

// if (obb["abc"]) {
//     console.log("hit")
// }

// console.log(Object.keys(obb))

// for (let prop in obb) {
//     console.log(prop)
// }

