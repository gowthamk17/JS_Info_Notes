// number data type

// syntactic sugars

// using _ for readability
let billion = 1_000_000_000;
console.log('1', billion);

// using 'e' for hiding 0's
let billionWithE = 1e9;
console.log('2', billionWithE);

let microSecond = 1e-6;
console.log('3', microSecond);

// hex number system
console.log('4', 0xff);
console.log('5', 0x00);

// binary number system
console.log('6', 0b101);
console.log('7', 0b111);

// ocatal number system
console.log('8', 0o1);
console.log('9', 0o10);

// toString(base)
let num = 111;
console.log('10', num.toString(2));
console.log('11', num.toString(16));

// calling toStirng straight from literal
console.log('12', 111..toString(2));
console.log('13', (111).toString(2));

// Math.floor
console.log('14', Math.floor(1.1));
console.log('15', Math.floor(-1.1));

// Math.ceil
console.log('16', Math.ceil(1.1));
console.log('17', Math.ceil(-1.1));

// Math.round
console.log('18', Math.round(1.1));
console.log('19', Math.round(-1.1));
console.log('20', Math.round(1.9));
console.log('21', Math.round(-1.9));

// Math.trunc
console.log('22', Math.trunc(1.1));
console.log('23', Math.trunc(-1.1));

// toFixed
num = 1.234
console.log('24', num.toFixed(2));
console.log('25', num.toFixed(5));

// precision
console.log('26', 0.1 + 0.2);
console.log('27', 9999999999999999);

// isNaN
console.log('28', NaN === NaN);
console.log('29', isNaN(NaN));
console.log('30', isNaN(1234));

// isFinite
console.log('31', isFinite(Infinity));
console.log('32', isFinite(NaN));
console.log('33', isFinite("str"));
console.log('34', isFinite(1234));

// parseInt, parseFloat
console.log('35', parseInt('2332ff'));
console.log('36', parseFloat('1.22.34'));
console.log('37', parseInt('0xff', 16));

// math methods
console.log('38', Math.random());
console.log('39', Math.trunc(Math.random() * 100, 2));
console.log('40', Math.max(1,2,3));
console.log('41', Math.min(1,2,3));
console.log('42', Math.pow(2, 10));
