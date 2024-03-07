// instead of __proto__ in objects we should use getPrototypeOf ans setPrototypeOf

let user = {
    id: 23,
};

let admin = Object.create(user);

console.log(admin);