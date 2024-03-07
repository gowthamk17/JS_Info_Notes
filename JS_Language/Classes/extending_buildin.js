// build in classes like array's and map's are extendable
class superArray extends Array {
    get isEmpty() {
        return this.length === 0;
    }
}

const arr = new superArray([1,2,3]);
console.log(arr.isEmpty);

console.log(arr);