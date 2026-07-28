const marvel_heroes = ["Thor", "Ironman", "Spiderman"];
const dc_heroes = ["Superman", "Flash", "Batman"];

//marvel_heroes.push(dc_heroes); //it will take array as single data and returns array inside and array

//console.log(marvel_heroes); //[ 'Thor', 'Ironman', 'Spiderman', [ 'Superman', 'Flash', 'Batman' ] ]
/*here indexing goes like : 
Thor => 0 
Ironman => 1
Spiderman => 2
[ 'Superman', 'Flash', 'Batman' ] => 3 and to access elements inside the 3rd index value 
we have to write like :
console.log(marvel_heroes[3][1]) => which returns Flash 
and it's NOT a good syntax because of complexity
*/

//====TO MERGE ARRAYS====
//1st method using concat()  
//const allHeroes = marvel_heroes.concat(dc_heroes);
//console.log(allHeroes);


//More preferrable => 2nd method is Spread method => it spreads the elements inside array individually and used like (...arrayName)
const allNew_heroes = [...marvel_heroes, ...dc_heroes]
console.log(allNew_heroes);


const another_Arr = [1, 2, 3, [4, 5, 6], 7, [6,7, [4,5]]]
const real_another_Arr = another_Arr.flat(2); //flat returns a new array with all subarray elements concatenated recursively to the specific depth
// flat(depth) => depth means how many subarrays we want to solve and if it can be given as infinity also if depth is not defined but try to give exact depth 
console.log(real_another_Arr);

console.log(Array.isArray("Chirkut"));//returns false => checks if array is there or not
console.log(Array.from("Chirkut")); // whetever is given converted to array
console.log(Array.from({name: "Chirkut"}));//it returns an empty array [] because we have not defined if we want array for the keys or  for the values

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); //of => converts to array 
