// dates is an object
let myDate=new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toTimeString());

let myDate2=new Date('2023-10-01')
console.log(myDate2.toString());
console.log(myDate2.toDateString());
console.log(myDate2.toISOString());
console.log(myDate2.toJSON());          
console.log(myDate2.toLocaleDateString());
console.log(myDate2.toTimeString());
console.log(myDate2.getFullYear());               // get year
console.log(myDate2.getMonth());                // get month
console.log(myDate2.getDate());                 // get date
console.log(myDate2.getDay());                  // get day
console.log(myDate2.getHours());                // get hours
console.log(myDate2.getMinutes());              // get minutes
console.log(myDate2.getSeconds());              // get seconds
console.log(myDate2.getMilliseconds());         // get milliseconds
console.log(myDate2.getTime());                 // get time in milliseconds since January 1, 1970
console.log(myDate2.getTimezoneOffset());       // get timezone offset in minutes
console.log(myDate2.getUTCFullYear());          // get UTC year
console.log(myDate2.getUTCMonth());             // get UTC month
console.log(myDate2.getUTCDate());              // get UTC date
console.log(myDate2.getUTCDay());               // get UTC day
console.log(myDate2.getUTCHours());             // get UTC hours
console.log(myDate2.getUTCMinutes());           // get UTC minutes
console.log(myDate2.getUTCSeconds());           // get UTC seconds
console.log(myDate2.getUTCMilliseconds());      // get UTC milliseconds
console.log(myDate2.setFullYear(2024));         // set year
console.log(myDate2.setMonth(11));              // set month
console.log(myDate2.setDate(25));               // set date
console.log(myDate2.setHours(10));              // set hours                                                        