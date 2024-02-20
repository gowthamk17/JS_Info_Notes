const log = console.log;

function User(name) {
    if(!new.target) {
        return new User(name)
    }
    this.name = name
}

const newUser = new User("gowtham");
log(newUser);
log(User('newUser'));

