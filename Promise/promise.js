let promise = new Promise(function(resolve, reject) {
    // reject("rejected");
    setTimeout(() => {resolve("result")}, 1000);
});
console.log(promise);

// .catch -> in case of error inside promise to catch it;
promise.catch(console.log);

// .then -> run after promise is completed or rejected;
promise.then(console.log)

// finally -> funr when the promise is finnished or rejected
promise.finally(() => console.log("promise completed"));

// .then chaining
let anotherPromise = new Promise(function(resolve, rejected) {
    resolve(1);
}).then(function(res) {
    res = res * 2;
    return res;
}).then(function(res) {
    res = res * 3;
    return res;
}).then(function(res) {
    console.log(res);
});

// example of then chaining
let todoPromise = fetch('https://jsonplaceholder.typicode.com/todos/1')
                    .then(res => res.json())
                    .then(res => console.log(res));