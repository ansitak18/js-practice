//singleton  => when created from constructor 
//constructor type object => Object.create  <= Syntax

//NOT singleton => when created using literals 

//  ======OBJECT LITERALS======


const mySym = Symbol("key1") //symbol => primitive datatype

const JSUser = {
    name: "Chirkut", //Key: "Value"  key=> bydefault string, Value can be of any datatype
    age: 18,
    "Home location": "Jharkhand", //multiple word key names are defined inside "key name " or 'key name ' and accessed using ["key name "] or ['key name ']
    email: "chirkut@google.com",
    isLoggedIn: false,
    [mySym]: "myKey1", //symbols are defined inside [] as object elements and accessed using [] with no '' or ""
    lastLoginDays: ["Monday", "Saturday"]
}


//the object elements can be accessed using two types
console.log(JSUser.email); //using . 
console.log(JSUser["email"]); //using [] sqaure brackets method but write the key name in string form otherwise it will show error 
console.log(JSUser["Home location"]);//the key has two words which cannot be accessed using . so here we will use []
console.log(JSUser[mySym]); //returns symbol value defined inside object
console.log(typeof JSUser[mySym]);
console.log(JSUser);
/**object output
{
  name: 'Chirkut',
  age: 18,
  'Home location': 'Jharkhand',
  email: 'chirkut@google.com',
  isLoggedIn: false,
  lastLoginDays: [ 'Monday', 'Saturday' ],
  Symbol(key1): 'myKey1'
}
*/

//changing values 

JSUser.email = "chirkut@chatgpt.com"
//Object.freeze(JSUser) //it stops the user to change value of objects
//JSUser.email = "chirkut@leetcode.com"

console.log(JSUser);
/*
{
  name: 'Chirkut',
  age: 18,
  'Home location': 'Jharkhand',
  email: 'chirkut@chatgpt.com',
  isLoggedIn: false,
  lastLoginDays: [ 'Monday', 'Saturday' ],
  Symbol(key1): 'myKey1'
}
*/

JSUser.greeting = function(){
    console.log("Hello JS user");
    
}

JSUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); //this is used to refer . dot is used to access the keys of objects 
    
}

console.log(JSUser.greeting);//[Function (anonymous)]

console.log(JSUser.greeting()); //Hello JS user 
                                //undefined
console.log(JSUser.greetingTwo());  //Hello JS user, Chirkut 
                                    //undefined

