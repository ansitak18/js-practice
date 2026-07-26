const balance = 4000
console.log(balance) //4000 => no datatype justified here

const score = new Number(100)
console.log(score) //[Number: 100] => datatype justified as Number 

console.log(score.toString().length) //3 => because 100 has 3 characters
console.log(score.toFixed(2));

const newNumber = 34.74635
console.log(newNumber.toPrecision(3)) //34.7
//134.74635 toPrecision(3) //135
//1265.8948 toPrecision(3) //1.27e+3 => because the number has 4 digit before decimal and precision has given 3 so use precision carefully



const hundreds = 1000000;
console.log(hundreds.toLocaleString()); //Indian value system to mark commas in digits
//toLocalString('') => US based 



//=================MATHS========================

console.log(Math); //Object type [Math] {}
console.log(Math.abs(-4)); //4   abs => absolute changes -ve  to +ve 
console.log(Math.round(4.6)); //5 => gives round off value
console.log(Math.ceil(4.2)); //5 => ceil => gives round off value closest greater than the actual value 
console.log(Math.floor(4.9)); //4 => floor => gives round off value closest lower than the actual value 
console.log(Math.min(4,6,7,2)); //2
console.log(Math.max(4,6,7,2)); //7


console.log(Math.random()); //gives random value between 0 to 1 

/* for a rolling dice we multiply random value with 10 to 
get logical values and add 1 because random can also give 
values like 0.0036376376 so in this case even if we multiply 
it by 10 we dont get values from1 that's why we add 1*/

console.log((Math.random()*10) + 1); 
console.log(Math.floor(Math.random()*10) + 1); //to get lower values 


//when there is a range of minimum and maximum values
const min = 10 
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min); //this gives values between 10 to 20 