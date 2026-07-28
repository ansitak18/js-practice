//array 

const myArr = [1, 2, 3, 4, 5];
// arrays can contain heterogeneous datatypes (more than one type of data)
//arrays are resizeable 
//array elements can be accessed using index locations (starting from zero)
console.log(myArr[1]);

//performing copy operations in arrays creates **shallow copies** instead deep copies
/*shallow copy: 
==> it's a copy whose properties share the same references as those of the source 
object.

==> It means whatever we change in this copy, it will affect the source object 
only and only if refrence types are (objects, arrays inside arrays (nested))

==> Shallow copy does NOT affect original value for primitive values like numbers, strings, booleans.

//value not affecting in original object 
const arr1 = [1, 2, 3];
const arr2 = [arr1];

arr2[0] = 100;

console.log(arr1); // [1, 2, 3]
console.log(arr2); // [100, 2, 3]

//value affecting both

const arr1 = [{ value: 1 }, { value: 2 }];
const arr2 = [arr1];

arr2[0].value = 100;

console.log(arr1); //[{ value: 100 }, { value: 2 }]
console.log(arr2); //[{ value: 100 }, { value: 2 }]

*/

const favCartoons = ['Doraemon', 'HaddiBuddy', 'Oggy', 'Krish']

favCartoons.push('Shinchan');//adds element to array at last

console.log(favCartoons);
favCartoons.pop();//deletes the last element
console.log(favCartoons);

favCartoons.unshift('Baltiboy');
console.log(favCartoons);

/* 
unshift() => adds element to the first but it affects the other elements
location as they have to shift to make space for the newly added element 
So using unshift() method increases load for the system so avoid it for 
large arrays which contains so many elements. Other than that we can use 
this method for smaller array objects.
 */

favCartoons.shift(); //removes the element from the starting and again it increases load to the system same as unshift() method 
console.log(favCartoons)

console.log(favCartoons.includes(100)); //checks if array includes this element or not

console.log(favCartoons.indexOf('Bheem'));//returns -1 because Bheem doesn't exist in the array


const newArr = favCartoons.join() //converts the array to string
console.log(favCartoons);  //prints array 
console.log(newArr); //Doraemon,HaddiBuddy,Oggy,Krish
console.log(typeof newArr); //returns string type

//slice , splice 

console.log("A ", myArr);

const myN1 = myArr.slice(1, 3); 
//slice does not manipulates the original array 
//it takes the range-1 
console.log(myN1);

console.log("B ", myArr);

const myN2 = myArr.splice(1, 3); 
//splice manipulates the original array 
//it also takes the range it is told to 
//in original array it only left with elements which do not overlap with elements taken inside splice() range
console.log(myN2); //[2, 3, 4]
console.log("C ", myArr); //[1, 5] ==> original array affected using splice()





