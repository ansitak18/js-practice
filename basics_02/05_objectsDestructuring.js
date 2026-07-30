//Destructuring of Objects 

const course = {
    coursename : "Js Advance",
    price: "999",
    courseInstructor: "Hitesh",

}

//to access elements inside object => objectname.keyName 
course.courseInstructor


//another way to access
const {courseInstructor} = course 
console.log(courseInstructor); //Hitesh

//or we can also use it like :- to shorten the key name
const {courseInstructor: instructor} = course
console.log(instructor); //Hitesh


//JSON API 

/**In Object form
{
    "name": "chirkut",
    "age": 19,
    "email": "chirkut@google.com"
}
 */

/* In array form
[
  {},

  {},

  {}
]
 
 */