// if a function is going to be an asynchronous we can send another function to call when 
// asynchronous action is completed the is called. The function which was send as an argument is called callback


function asyncFunc(firstArg, callback) {
    // doing some async work
    callback();
}

function callback() {
    // things to do after the asyncFunc is completed.
}