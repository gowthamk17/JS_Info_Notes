// EventSource is a less version of webSocket,
// it can only receive message from server

// creating EventSource
const eventSource = new EventSource('server link');

// the data is received in the following format
// data: message1
// data: message2

// cross origin supported here

eventSource.close(); // closing the event

// message id - server side config
// data: msg1
// id: 1
// this id helps browser when reconnecting by saving it in lastEventId

// events
// message
// open
// close

// the current state is in readyState property - connecting, open, closew