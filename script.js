// Variables - Var,Let,COnst

// Data types - Sting,number,Boolean,null,Undefined
const name = 'Tushar';
const age = 20;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;

console.log(typeof name);
console.log(typeof age);
console.log(typeof rating);
console.log(typeof isCool);
console.log(typeof x);
console.log(typeof y);
console.log(typeof z);

// Concatination
console.log('..............String Concatination.................')


console.log('My name is'  + name +  'and I am'+ age +  'years old')


// Template Strings
console.log('...............Template Strings.................')
console.log(`My name is ${name} and I am ${age} years old`);

const hello = `My name is ${name} and I am ${age} years old`;
console.log(hello)

 
// String Methods
console.log('...............String Methods................')
let str = "Tushar Rao Sahab"
// 1
let a = str.length;
// 2
let b = str.toLowerCase();
// 3
let c = str.toUpperCase();
console.log(a)
console.log(b)
console.log(c)
// 4
let d = str.includes("Rao")
console.log('include method - is used to seacrh word/character')
console.log(d)
// Starts with and endsWith
console.log("startsWith- seach the first word of string")
console.log("endsWith- search the end word of string")
console.log(str.startsWith("Tushar"))
console.log(str.startsWith("Hello"))
console.log(str.endsWith("Sahab"))


// Search
console.log("IT is used to find the index")
console.log(str.search("Rao"))


// Match
console.log("match-is used to return the positio and collect them to make arrray")

var f = "Tushar Tushar is rai is is is rao tushar"
console.log(f.match(/is/g))


// indexOf
console.log("indexOf - it is used to return the index of first word coming")
console.log("lastIndexOf- is used to search from the last and return the postion")

// Replace
console.log("Replace - Is used to replace")

var h = 'He is a bad guy'
console.log(h.replace("bad", "good"))

// For replacing from all places we use glabol function
var i = 'He is a very bad is very bad guy is'
console.log(i.replace(/is/g,"are"))


// Trim
console.log("Trim - is used to remove extra spacing from left/right")


// charAt()
console.log("charAt - first we define a position then it will return the character")

let s = "TUshar Rao Sahab";
console.log(s.charAt(4));


// charCodeAt- retuns sky code or / returns charcters when we write sky code
console.log("Character Code")
console.log(s.charCodeAt(10));



// fromCharCode-
console.log("From character code")
console.log(String.fromCharCode(65));

// Split
console.log("Split strings and convert it into array ")
console.log(s.split(" "))

// Repeat - is used to repeat string
console.log(s.repeat(3));



// Slice - is used to take word/character from a string
console.log(s.slice(3));
console.log(s.slice(3,10));


// substr - it is used to return sting just like slice 

// substring- jsut like slice but does not count last (3,7) it dose not count 7

// tostring - convert numeric value into string
