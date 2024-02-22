// arrow functions have to this
let user = {
    name: "user",
    title: "userTItle",
    sayName: () => {
        console.log(this.name); // prints undefined
    },
    sayTitle: function() {
        console.log(this.title);
    }
};

user.sayTitle();
user.sayName();

// have no arguments


function wrapper(c) {
    const noArgs = (a) => {console.log(arguments)};
    noArgs();
}

wrapper("wrapper arugument");
