
// {} => called scope of a program when used with functions , if-else statements and loops
// {} => called object declaration when used with objects

//var c = 300; //global variable => AVOID USING VAR AS MUCH AS POSSIBLE 
let a = 400; //global variable

if (true) {
    let a = 10; // block or local variable
    const b = 20; //block or local variable 
    var c = 60;  //declaration using var does not work either it is local or global variable
    console.log(a); // 10 => local variable
    
}

console.log(a); // 400 => global variable
//console.log(b); //error : b is not defined because it was defined inside if block and we are using it outside 
console.log(c); // 60 => but it should have shown 300 which was global variable but it doesn't follow so we avoid using var

for (let i = 0; i < array.length; i++){
    const element = array[i]
}

/*
=============IMP POINT===============
Inside browser : The global scope is different and =============== 
Inside coding environment which is terminal Node : the global scope is different 
*/