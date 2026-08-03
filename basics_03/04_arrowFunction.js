//Using this function inside Object 

const user = {
    username: "Chirkut",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);  //this => reference wrt current context 
        console.log(this);
        
    }

}

user.welcomeMessage()/**
 Chirkut, welcome to website

 //console.log(this) => written inside functional block gives the output written below
 {
  username: 'Chirkut',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}

 */

user.username = "Rizzy" //context changed 
user.welcomeMessage() /**
Rizzy, welcome to website   //=>it is the output for this called function

// ...whatever is returned here is because we logged this function inside the functional block

{
  username: 'Rizzy',          
  welcomeMessage: [Function: welcomeMessage]
}

*/

console.log(this); //here it returns {} => empty object because there is no global reference available but if we do this same thing in Browser Inspect then it will return some data and Window Object 



//this function do not work inside functions :

/*
function sketching(){
    let username = "Chirkut"
    console.log(this); //this used inside function returns multiple data 

    console.log(this.username); //undefined
      
}
sketching()
*/

//declaring function with holding it inside a variable
/** 
const sketching = function() {
    let username = "Chirkut"
    console.log(this.username); 
}
 */


//=======================Arrow Function================================

//Function Declaration using arrow function =>

const sketching = () => {
    let username = "Chirkut"
    console.log(this); //{}
    console.log(this.username); //undefined
    
}
sketching()

//using arrow function in different ways

//1st way

const addTwo = (num1, num2) => {
    return num1 + num2
}

console.log(addTwo(3, 4)); //7

//2nd way

const subtractTwo = (num3, num4) => num3 - num4
console.log(subtractTwo(8, 5)); //3

//3rd way 

const addTwoNums = (num5, num6, num7) => (num5 + num6 + num7)
console.log(addTwoNums(7, 6, 9)); //22

//Simply if we use {} curly braces then we need to use return keyword and if we don't then there is no need to use return
// getting value using return keyword => Explicit return
// getting value without using return keyword => Implicit return (here parentheses can be used for code readability)

//returning an object without using return keyword with arrow function

const userCalled = () => ({username: "Chirkut"}) //object {} is wrapped inside parentheses
console.log(userCalled()); // {username: 'Chirkut'}


//Arrow functionFirst parentheses() for function definition and second parentheses() for execution/calling of a function 
//as we wrapped the function definition inside () which is the first parentheses : example --> function cartoon() { }-->is wrapped inside ()-->(function cartoon(){ }) and it becomes ()()
//const myArray = [4, 5, 6, 7, 8]
//myArray.forEach(() => {})
//OR
//myArray.forEach(() => ())
    