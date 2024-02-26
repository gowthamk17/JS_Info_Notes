// creating custom error

class customError extends Error{
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
};

try {
    console.log("TRy Block");
    throw new customError("this is an custom error");
} catch (err) {
    console.log(err.name);
    console.log(err.message);
}

// 