//console.log(2>1) //true-output
//console.log(2 != 1) //true

//console.log("2" > 1) //true => here both are different datatypes but js convert it into number by itself but not a good practice to compare two different types
//console.log("02" > 1) //true => different datatype but js takes it as number


//the comparisons written down give unpredicted values so avoid these types of comparisons
console.log(null > 0)  //false
console.log(null == 0) //false
console.log(null >= 0) //true

console.log( undefined > 0)  //false
console.log( undefined == 0) //false
console.log( undefined>= 0) //false