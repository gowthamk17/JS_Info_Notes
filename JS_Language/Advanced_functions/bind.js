// bind - create a new function for a function with given this obj
let user = {
    name: "user11"
};

function sayHello() {
    console.log(`Hello, ${this.name}`);
}

// without binding
sayHello();

const bindedHello = sayHello.bind(user);

bindedHello();

// making argument bind
function mul(a,b) {
    console.log(a*b);
}

const double = mul.bind(null, 2);

double(2);
double(3);
double(4);

const triple = mul.bind(null, 3);

triple(2);
triple(3);
triple(4);
