const name = "anu"
const repoCount = 20

//concatenation but this method not preferred 

//console.log(name + repoCount + " Github") //anu50 Github


//more readable and called ===String Interpolation===
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)


const gameName = new String('anshitaaa')


console.log(gameName.charAt(2)) //s

console.log(gameName.indexOf('h')) //3

const newString = gameName.substring(0, 4)//ansh

console.log(gameName.split('   '))


console.log(newString)

const anotherString = gameName.slice(-8, 4) //nsh
console.log(anotherString) 

const newStringOne = "     anu    "
console.log(newStringOne) //        anu     
console.log(newStringOne.trim()) //anu  ==trim() works on white spaces


/* IMP POINT */
const url = "https://artsytaa.com/anu%20ansita" //if someone gives space in urls in browser it automatically conerts it into %20

console.log(url.replace('%20', '-')) //search what to replace and insert what to be written after replacement

console.log(url.includes('barnwal')) //returns boolean value if it is there or not

