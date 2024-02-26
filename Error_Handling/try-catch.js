// try catch prevents script from dying due to an error throw
// does not work for parsing error only works for run time error

// exp - 1
try {
    console.log('before error throwed');
    throw "Error";
    console.log('after error thorwed');
} catch(err) {
    console.log('inside catch block');
}

console.log('-----------------------');

// catch is synchronous so if an error is thorwed inside an async func it won't catch it

try {
    console.log('try start');
    setTimeout(() => {
        // throw "Error";
    }, 100);
} catch(err) {
    console.log('inside catch');
}

console.log('-----------------------');

// Error Object

try {
    console.log('try start');
    error;
} catch (err) {
    console.log(err.name);
    console.log(err.message);
    console.log(err.stack);
}

console.log('-----------------------');

// can omit err input in catch in latest browsers
// a real world scenario for try/catch is when parsing json data if it was malformed it will throw an error

// finally - runs after try with or without error
try {
    throw 1;
} catch (err) {
    console.log(err.message);
} finally {
    console.log('finally block');
}

console.log('-----------------------');
