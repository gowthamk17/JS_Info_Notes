// iterables

let range = {
    from: 1,
    to: 100,
    [Symbol.iterator]: function() {
        return {
            current: this.from,
            last: this.to,
            next() {
                if (this.current < this.last) {
                    this.current++
                    return { done: false, value: this.current}
                } else {
                    return { done: true }
                }
            }
        }
    }
}

for (let n of range) {
    console.log(n);
}

// manually calling iterator
let str = "askadabaska";
let itera = str[Symbol.iterator]();
while (true) {
    const iter = itera.next();
    if(iter.done) break;
    console.log(iter.value);
}

// 