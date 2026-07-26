//Primitive 

//7 types : String , Number , Boolean , null , undefined , Symbol , BigInt 

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId) //false because Symbol makes it unique even if the value passed to the variable is same 


//Non- primitive (Reference)

//Array , Objects , Functions 

const heroes = ["shaktiman" , "baalveer" , "hero" , "bheem"]
console.log(typeof heroes);
//typeof heroes => object


let myObj = {
    name: "anu",
    age: 22
}
console.log(typeof myObj);
//typeof myObj => Object

const myFunction = function(){
    console.log("baccho ko bachane wala baalveer")
}

console.log(typeof myFunction);
//typeof myFunction => function --->and called as object function


//====================STACK AND HEAP MEMORY=====================

//Stack (Primitive) , Heap (Non-primitive)


//1]Stack example 

let myYoutubeName = "artsytaadotcom"

let anotherName = myYoutubeName
anotherName = "arsitAns"
console.log(myYoutubeName) //artsytaadotcom
console.log(anotherName)   //arsitAns

//in stack the variable gets a copy of original variable 

let userOne = {
    email: "user@google.com",
    password: "123"

}

let userTwo = userOne

userTwo.email = "billu@google.com"

console.log(userOne)
console.log(userTwo)
//in heap the original value gets changed because it gets a reference value which changes

