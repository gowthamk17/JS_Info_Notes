// date
let now = new Date();
console.log( now );

// current date timestamp - ms from 1970
console.log(now.getTime());

// create a date obj for a specific date
let date = new Date("2001-06-17");
console.log(date);

// creating same day with date data's
let sameDate = new Date(2001, 5, 17);
console.log(sameDate);

// access date components from date object
console.log('year', date.getFullYear());
console.log('month', date.getMonth());
console.log('date', date.getDate());
console.log('hours', date.getHours());
console.log('minutes', date.getMinutes());
console.log('seconds', date.getSeconds());

console.log('time', date.getTime());

console.log('time zone offset', date.getTimezoneOffset());

// time taken for a 10_000 console.log
let date1 = Date.now();
for(let i = 0; i < 10_000; i++) {
    // console.log(i);
}
let date2 = Date.now();
console.log('time diff', date2 - date1);

// creating date from valid string
let dateStr = "2022-06-12T12:05:10+05:30";
let createdDate = new Date(dateStr);
console.log(createdDate);
