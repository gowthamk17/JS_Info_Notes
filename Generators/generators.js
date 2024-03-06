// generator functions
// there are a special functions that return different value every time 
// on the first call it does not execute instead it gives us and generator function
// which we can call with next() function to execute
// by using yield keyword for every call the function will run till yield or return
// upon return the function in completed after that only the return value is returned
function* generatorFunc() {
    yield 1;
    yield 2;
    yield 3;
    return 4;
}
const generator = generatorFunc();
console.log(generator);
console.log(generator.next()); // 1, false
console.log(generator.next()); // 2, false
console.log(generator.next()); // 3, false
console.log(generator.next()); // 4, true
console.log(generator.next()); // undefined, true -> after return it does not return value
console.log(generator.next()); // undefined, true

// generators are iteralbe
const newGenerator = generatorFunc();
for (let value of newGenerator) {
    console.log(value);
}

// since it is an iterator rest is also allowed
const arr = [0, ...generatorFunc()];
console.log(arr); // return value not included