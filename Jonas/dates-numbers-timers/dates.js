'use strict';

// --- 1. Create a date (4 ways)

// a: gives you current date/time

/*
const now = new Date();
console.log(now);
// Fri Jun 03 2022 10:11:09 GMT+0200 (Central European Summer Time)

// b: parse date from date string

console.log(new Date('Jun 03 2022 10:11:43'));
// Fri Jun 03 2022 10:11:43 GMT+0200 (Central European Summer Time)

console.log(new Date('December 24 2015'));
// Thu Dec 24 2015 00:00:00 GMT+0100 (Central European Standard Time)

// c: pass in year, month, day, hour, minute, sec
// JS months are zero based >> 10: Nov, 11: Dec
console.log(new Date(2040, 9, 5, 12, 7, 49));
// Fri Oct 05 2040 12:07:49 GMT+0200 (Central European Summer Time)

// JS auto-corrects the date
console.log(new Date(2040, 10, 31));
// Sat Dec 01 2040 00:00:00 GMT+0100 (Central European Standard Time)

// d: initial Unix time
console.log(new Date(0));
// dates.js:29 Thu Jan 01 1970 01:00:00 GMT+0100 (Central European Standard Time)

// 3 days later
console.log(new Date(3 * 24 * 60 * 60 * 1000));
// Sun Jan 04 1970 01:00:00 GMT+0100 (Central European Standard Time)
*/

// --- 2. Working with date
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
// Thu Nov 19 2037 15:23:00 GMT+0100 (Central European Standard Time)

// methods
console.log(future.getFullYear()); // 2037
console.log(future.getMonth()); // 10; zero based
console.log(future.getDate()); // 19
console.log(future.getDay()); // 4; day of the week; 0 = Sunday, 4 = Thursday
console.log(future.getHours()); // 15
console.log(future.getMinutes()); // 23
console.log(future.getSeconds()); // 0

future.setFullYear(2040);
console.log(future);
// Mon Nov 19 2040 15:23:00 GMT+0100 (Central European Standard Time)

future.setMonth(0);
console.log(future);
// Mon Jan 19 2040 15:23:00 GMT+0100 (Central European Standard Time)

future.setDate(15);
console.log(future);
// Sun Jan 15 2040 15:23:00 GMT+0100 (Central European Standard Time)

future.setHours(13);
console.log(future);
// Sun Jan 15 2040 13:23:00 GMT+0100 (Central European Standard Time)

future.setMinutes(15);
console.log(future);
// Sun Jan 15 2040 13:15:00 GMT+0100 (Central European Standard Time)

console.log(future.toISOString()); // 2037-11-19T14:23:00.000Z

// --- timestamp

console.log(future.getTime()); // 2142253380000
console.log(new Date(2142253380000));
// Thu Nov 19 2037 15:23:00 GMT+0100 (Central European Standard Time)

// current timestamp
console.log(Date.now()); // 1654257065809
