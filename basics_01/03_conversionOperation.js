let score = "33" //string type 

console.log(typeof score)
console.log(typeof (score))

let valueInNumber = Number(score) //score is string type so it is converted into Number datatype by passing the score value in Number datatype

console.log(typeof valueInNumber)

/*TAKING DIFFRENT VALUES OF score: 

//"33" => 33 (string converted to number)
//"33abc" =>  when value is consoled NaN (Not a Number) but when typeof is used it will show Number datatype
//true => 1 , false => 0
//"anu" => Value is NaN but datatype is Number 

 */

let isLoggedIn = 1 
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

//1 => true ; 0 => false
//"" => false
// "anu" => true


let anyNumber = 20 
let stringNumber = String(anyNumber)
console.log(stringNumber)
console.log(typeof stringNumber)

// =============Operations==============

/*
//console.log("1" + 2) // 12
//console.log(1 + "2") //12
//console.log("1" + 2 + 2) //122
//console.log(1 + 2 + "2") //32
//console.log(3 * 4 + 6 - 7 % 5 ) //use parentheses for readability


//console.log(true) //true
//console.log(+true) //1 
 */


