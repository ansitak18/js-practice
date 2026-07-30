//singleton objects => constructor method

const ZomatoUser = new Object() //singleton object

ZomatoUser.id = "34qwe"
ZomatoUser.name = "Rizzy"
ZomatoUser.isLoggedIn = false

console.log(ZomatoUser); //{ id: '34qwe', name: 'Rizzy', isLoggedIn: false }

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Rizzy",
            lastname: "Loo"
            //Like this we can nest as many loops as we want

        }
    }
}

//Accessing elements inside object 
console.log(regularUser.fullname);//{ userfullname: { firstname: 'Rizzy', lastname: 'Loo' } }

console.log(regularUser.fullname.userfullname);//{ firstname: 'Rizzy', lastname: 'Loo' }

console.log(regularUser.userfullname);//undefined => As we have accessed the inner nested loop directly.

console.log(regularUser.fullname.userfullname.firstname);//Rizzy

console.log(regularUser.fullname.userfullname.lastname);//Loo

//console.log(regularUser.fullname?.userfullname); //incase when we are fetching data from api and not sure if the variavle does exists or not 
 

//Combining Objects 

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}


//This combines but keeps them separately inside oone {}
const obj3 = { obj1, obj2 } //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
console.log(obj3);



const obj4 = Object.assign(obj1, obj2) //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
console.log(obj4);

const obj5 = Object.assign({}, obj1 , obj2) //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
console.log(obj5);

/* 
Object.assign() => It is a static method. 

Object.assign(obj1, obj2) and Object.assign({}, obj1, obj2)
==>both gives the same output but using {} like this guarantees
that it will combine all the objects passed and give desired result

Using {} ==> {} => this is an empty object and assuming it is the target where all the source objects are passed
Source Objects => obj1 , obj2 and whatever objects we want to combine can be passed
*/

const obj6 = {...obj1, ...obj2} //MORE PREFERRED ==> spread operator
console.log(obj6); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


//when we receive values from database ==> mostly in the form of array of objects  
const users = [
    {
        id: 1,
        email: "rizzy@gmail.com"
    },
    {
        id: 2,
        email: "rizzy@github.com"
    },
    {
        id: 3,
        email: "rizzy@microsoft.com"
    },
]

users[1].email
console.log(users);
/*
  [
    { id: 1, email: 'rizzy@gmail.com' },
    { id: 2, email: 'rizzy@github.com' },
    { id: 3, email: 'rizzy@microsoft.com' }
  ]
 */

console.log(ZomatoUser);

console.log(Object.keys(ZomatoUser));   //[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(ZomatoUser));   //[ '34qwe', 'Rizzy', false ]
console.log(Object.entries(ZomatoUser));   //[ [ 'id', '34qwe' ], [ 'name', 'Rizzy' ], [ 'isLoggedIn', false ] ]

console.log(ZomatoUser.hasOwnProperty('isLoggedIn'));   //true

