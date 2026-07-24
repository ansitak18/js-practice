const accountId = 12309
let accountEmail = 'billu@google.com'
//var accountCity = 'Jharkhand'
let accountDate

/* 
Using var is not a good practice because it changes the values inside scopes {} also if the name of the variable is same 
so Companies and coders strictly prefer to use const for constant values and let keyword for variables
*/

//accountId = 0464 //not to be used like this because it is already defined using const 

accountEmail = 'killu@google.com'
accountCity = 'New York' // not preferrable but we can declare any variable without using keyword specifiers in js 

console.log(accountId)

console.table([accountId, accountEmail, accountCity, accountDate])