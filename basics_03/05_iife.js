//IIFE ==> Immediately Invoked Function Expressions 
//IIFE are those functions which are defined and called for very fast execution
//IIFE functions are used to avoid global scope pollution by creating it's own private scope we studied earlier 


//named iffe
(function cartoon(){
    console.log(`DB CONNECTED`);  
})(); //use semi colon because iife does not know where to end the context

//()()

/*
First parentheses() is for function definition and 
second parentheses() is for execution/calling of a function 
as we wrapped the function definition inside () which is the 
first parentheses : example -->
 function cartoon() {
 } 
 -->is wrapped inside ()-->

  (function cartoon(){
  }) 

  and it becomes ()()
*/

//can also be written using arrow function
//unnamed iife
( () => {
    console.log(`DB CONNECTED TWO`)
})();

//unnamed iffe
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})("Chirkut");