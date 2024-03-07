// websocket enables continuous connection between server and a client
// protocals named ws and wss (secured)

// initializing a socket
const socket = new WebSocket('wss://socketsbay.com/wss/v2/1/demo/');

// socket has four events and one method
// open - triggered when connection is established
// message - data received from the server
// error - there's an error from server
// close - triggered when connection is closed either intentionally or accidently or there's an error

// send - method used to send data to server

socket.onopen = function (event) {
    document.body.innerHTML += "<div>[Open] WebSocket connection established</div>";
    socket.send("i am atomic");
};

socket.onmessage = function(event) {
    document.body.innerHTML += `<div>[Message] received data from server ${event.data}</div>`;
};

socket.onerror = function(event) {
    document.body.innerHTML += '<div>[Error] error occurred</div>';
};

socket.onclose = function(event) {
    if (event.wasClean) {
        document.body.innerHTML += '<div>[Close] connection closed cleanly</div>';
    } else {
        document.body.innerHTML += '<div>[Close] connection did not closed cleanly</div>';
    }
};

// if websocket has been accepted by server it will send 101 status code which represends protocol change

// two types of data can be received in browser from ws connection
// 1. text
// 2. binary data
// text is self explanatory
// for binary data type
socket.binaryType = 'arraybuffer'; // blob by default

// socket.bufferedAmount
// used to check the data to send are still in queue in case user had 
console.log(socket.bufferedAmount); // 0 indicates no buffer

setTimeout(() => {
    socket.close(); // closing the socket
}, 5000);