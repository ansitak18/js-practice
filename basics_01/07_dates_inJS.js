// Dates

let myDate = new Date()
console.log(myDate); //2026-07-26T20:24:34.046Z

console.log(myDate.toDateString()); //Mon Jul 27 2026

console.log(myDate.toISOString()); //2026-07-26T20:24:34.046Z

console.log(myDate.toJSON()); //2026-07-26T20:24:34.046Z

console.log(myDate.toLocaleDateString()); //27/7/2026

console.log(myDate.toTimeString()); //01:54:34 GMT+0530 (India Standard Time)

console.log(typeof myDate); //Object


let myCreatedDate = new Date(2026, 9, 18) //month starts from 0(january) and goes till 11(december)
console.log(myCreatedDate.toDateString()); //Sun Oct 18 2026

myCreatedDate = new Date(2026, 8, 6, 5, 4)
console.log(myCreatedDate.toLocaleString()); //6/9/2026, 5:04:00 am

let myTimeStamp = Date.now() //can be written like this => let myTimeStamp = new Date.now()

console.log(myTimeStamp) //time shows in milliseconds 
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000)) //converted in seconds by division of 1000 and decimal value is avoided by using Math.floor()

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());//2 => tuesday
//`${newdate.getDay()} and the time` =>string interpolation


newDate.toLocaleString('default', {
    weekday: "long",
    month: "long",
    year: "numeric",
   
    //we can define many more properties to get the date in diffrent styles
})
//console.log(newDate)