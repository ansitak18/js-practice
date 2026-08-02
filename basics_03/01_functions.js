function sayMyName(){
    console.log("C");
    console.log("h");
    console.log("i");
    console.log("r");
    console.log("k");
    console.log("u");
    console.log("t");
    console.log("t");
}

sayMyName() //function called

function addTwoNums(num1 , num2){ //parameters => num1, num2
    console.log(num1 + num2 );
    
}

addTwoNums() //NaN => not a number because we did not pass any arguments
addTwoNums(7, 4) //11 =====arguments => 7, 4

//returning a function
function addMarks(score1 , score2){
    //let result = score1 + score2
    //return result
    //or without assigning new variable we can return the suum
    return score1 + score2 
    //console.log("Js Exam")//it will not work because whatever we write after return statement inside function becomes unreachable
}

const result = addMarks(67 , 78)
console.log("Result: ", result);


function loginUserMessage(userName = "Loo"){ //assigning value here ignores the if (nested) block as value is already given 
    if (userName === undefined) {            //if (!username) => both are similar
        console.log("Please enter a username ");
        return
    }
    //this code becomes unreachable because we already used return inside if block
    return `${userName} just logged in` 
}

loginUserMessage("chirkut") //we called the function correctly but this will not give any result because we did not console to the screen
console.log(loginUserMessage("chirkut")); //chirkut just logged in
//console.log(loginUserMessage()); //undefined just logged in ==> because we did not assigned any value to the userName 

//  ` ` => these backticks are called Template Literals 
//  ${} => these are called String Interpolation 
