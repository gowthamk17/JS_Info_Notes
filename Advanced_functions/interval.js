// setTimeout
let timerId = setTimeout(() => console.log("setTimeout"), 1000);

// cancel Timeout
// clearTimeout(timerId); // if used before setTimeout will be cleared

let intervalId = setInterval(() => console.log("setInterval"), 600);

clearInterval(intervalId);

// creating interval with only setTimeout
let delay = 100;
let i = 0;
setTimeout(function func() {
    i++;
    console.log(i);
    if (i < 10) {
        setTimeout(func, delay);
    }
}, delay);