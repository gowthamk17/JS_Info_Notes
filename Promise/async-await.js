// async func alwasy return an promise
async function func1() {
    return 1;
}

console.log(func1());


// await - wait till the promise is resolved

async function func2() {
    let res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    res = res.json();
    console.log(res);
}

func2();