// fetch method is used for network operations
// response headers -> received with response as a map object
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => console.log(res.headers));

// request headers -> send with fetch call for out going headers

// using abortController, it has a signal property which emits 'about' event which
// changes the property aborted to true
const controller = new AbortController();
controller.signal.addEventListener('abort', () => console.log('aborted'));
controller.abort();
console.log(controller.signal.aborted);
