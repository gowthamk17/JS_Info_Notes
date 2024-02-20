let obj = {
    user: "gowtham",
    i: 0,
    sayHi: function() {
        console.log("hii");
    },
    sayHi() {
        console.log(++this.i);
        console.log(this.sayHi())
    }
}

obj.sayHi();

