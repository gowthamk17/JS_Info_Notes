// OR ||
const firstName = ""
const lastName = ""

console.log("User", firstName || lastName || "Anonymous")


false || undefined || console.log("short circuite evaluation")

// AND &&

if (firstName && lastName) {
    console.log(firstName + lastName)
} else {
    console.log("Anonymous")
}

// get first falsy value
console.log(true && 1 && !null && undefined && 12)

// ! not
console.log(!1)
console.log(!!1 === Boolean(1))

