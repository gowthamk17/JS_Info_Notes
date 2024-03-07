// strings

let str = 'Hello';

// length
console.log('1', "user".length);

// at
console.log('2', str[0]);
console.log('3', str[str.length - 1]);
console.log('4', str.at(0));
console.log('5', str.at(-1));

for (let char of str) {
    console.log('8', char);
}

console.log('7', str.toLowerCase());
console.log('8', str.toUpperCase());

console.log('9', str.indexOf('e'));
console.log('10', str.indexOf('i'));

console.log('11', str.includes('ll'));
console.log('12', str.startsWith('He'));
console.log('13', str.endsWith('lo'));

console.log('14', str.slice(1, 4));
console.log('15', str.substring(1, 4));
console.log('16', str.substr(1, 3));