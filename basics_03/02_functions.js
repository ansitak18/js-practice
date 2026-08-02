//Using Rest Operator .=> ..variableName 

function CustomerCartPrice(...num1){
    return num1
}

console.log(CustomerCartPrice(300, 500, 60, 3570));

/**
 [ 300, 500, 60, 3570 ]
 If we pass multiple values and dont use rest operator 
 then it will take only one passed value and using rest 
 operator forms an array of all the values passed to it. 

 */

function cartPrice(val1, val2, ...num2){
    return num2
}

console.log(cartPrice(450,650, 250, 900,560)); // [ 250, 900, 560 ]

/*
Here:
450 => val1 
650 => val2
[250, 900, 560] => passed to num1 and returned in the form of array

 */

// ... => Rest Operator and Spread Operator but use cases are different but represented similarly 

const users = {
    userName: "Chirkut",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.userName} and price is ${anyObject.price}`);
    
}

handleObject(users) //function called 

/*
Passing an object directly into the function at the same like this :

handleObject({
    username: "sam",
    price: 390
})


Output  : Username is sam and price is 390  
*/

//Passing arrays

const newArray = [200, 500, 670, 890]

function returnSecondValue(getArray){
    return getArray[2]
}

console.log(returnSecondValue(newArray)); //670
console.log(returnSecondValue([300, 789, 650, 456])); //650
