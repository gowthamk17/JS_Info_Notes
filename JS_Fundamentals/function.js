let message = "ohayo"

function showMessage() {
    let message = "new world"
    console.log(message)
}

showMessage()
showMessage()

function printMsg(message = "Hello") {
    console.log(message)
}

printMsg(message)
printMsg()

function sum(a,b) {
    return a + b
}