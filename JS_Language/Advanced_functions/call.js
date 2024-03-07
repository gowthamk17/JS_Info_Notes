// call method
let name = "gowtham";

function showName(age, id) {
    console.log(this.name, age, id);
}

showName();

let user = { name: "user" };
let client = { name: "client" };

showName.call(user, 22, 1111);
showName.call(client, 23, 2222);


// apply is the same as call, only difference is arguments are sent as array
showName.apply(user, [22, 1111]);
showName.apply(client, [23, 2222]);