// promise.all 
let promiseAll = Promise.all([
    fetch('https://jsonplaceholder.typicode.com/todos/1').then(res => res.json()),
    fetch('https://jsonplaceholder.typicode.com/todos/2').then(res => res.json()),
    fetch('https://jsonplaceholder.typicode.com/todos/3').then(res => res.json())
])
    .then(console.log)
    .then(() => {
        console.log('promise all');
        console.log('-------------------------------------------------------------');
    });

// promise.allSettled - wait for all promise to settle even if they are rejected
let promiseAllSettled = Promise.allSettled([
    fetch('https://jsonplaceholder.typicode.com/todos/1').then(res => res.json()),
    fetch('https://jsonplaceholder.typicode.com/todos/2').then(res => res.json()),
    fetch('https://jsonplaceholder.typicode.com/todos/3').then(res => res.json())
])
    .then(console.log)
    .then(() => {
        console.log('promise all settled');
        console.log('-------------------------------------------------------------');
    });


// promise.race - return the result of the first promise
let promiseRace = Promise.race([
    fetch('https://jsonplaceholder.typicode.com/todos/1').then(res => res.json()),
    fetch('https://jsonplaceholder.typicode.com/todos/2').then(res => res.json()),
    fetch('https://jsonplaceholder.typicode.com/todos/3').then(res => res.json())
])
    .then(console.log)
    .then(() => {
        console.log('promise race');
        console.log('-------------------------------------------------------------');
    });

// promise.any - return the result of the first promise
let promiseAny = Promise.any([
    fetch('https://jsonplaceholder.typicode.com/todos/1').then(res => res.json()),
    fetch('https://jsonplaceholder.typicode.com/todos/2').then(res => res.json()),
    fetch('https://jsonplaceholder.typicode.com/todos/3').then(res => res.json())
])
    .then(console.log)
    .then(() => {
        console.log('promise any');
        console.log('-------------------------------------------------------------');
    });

