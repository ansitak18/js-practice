
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

//for (let i = 0; i < array.length; i++){
//    const element = array[i]
//}

/*
=============IMP POINT===============
Inside browser : The global scope is different and =============== 
Inside coding environment which is terminal Node : the global scope is different 
*/

function one(){
    const user = "Chirkut"

    function two(){
        const website = "Youtube"
        console.log(user);
        console.log(website);
        
    }

    //console.log(website); //website not defined as we are using it outside the function block 
    
    two() //second function called

    /*If we don't call the second function 
    the console statements written inside 
    the second functional block won't work */
}

one() //first function called 

//===========================

//if block scope 

if (true) { 
    const username = "chirkut" 
    if(username === "chirkut") {
        const website = " Youtube"
        console.log(username + website); //chirkut Youtube
        
    }
    //console.log(website) //show error as it is written outside its scope
}

//console.log(username); //show error as it is written outside its scope


//FUNCTION DECLARATION TECHNIQUES

//1st way

function addOne(num){
    return num + 1
}

addOne(6)

/*
In this first kind of function declaration we an also call the function at first and it will work in the same way

addOne(6)

function addOne(num){
return num + 1
}
==> this will work exactly same like the 
one written above 

 */

//2nd way

const addTwo = function(num) { //this is also a function and also called as Expressions
    return num + 2
}

addTwo(4)

/*
but in this 2nd method of function declaration
we cannot call the function before declaring it 
otherwise it will show error in this method we 
are holding the function in a variable and declaring it.

*/