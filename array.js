// Arrays - variables that hold multiple values

const fruits = ['APples', 'Banana', 'Mange', 'Guvava' ,'20'];
console.log(typeof fruits);
console.log(fruits);

console.log(fruits[3]);
var arr = new Array(5);
arr[0] = 10;
arr[1] = "Tushar"
arr[2] = true
arr[3] = null;
console.log(arr);

// Array Methods

fruits.push('hello') //Add elements in last
fruits.shift(); //Remove the first element
console.log(fruits);
fruits.unshift('rao') // Add elements in start
console.log(fruits);
console.log(Array.isArray(fruits)); //Chech that the given variable is array or not
console.log(fruits.pop()); //pop out last element

// Sort - sort the array
let a = ["Tushar","Rahul","Arya","Nikhil"]
console.log(a.sort());

// reverse - reverse the array
console.log(a.reverse());



// Concat and Join

console.log("concat - is used to merge two arrays");
let c = ["tushar", "rao" ,"sahab"]
let d = ["hello", "buddy"]
let e = ["Neha","Mahima"]
console.log(c.concat(d,e));

console.log("Join- is used to make array into one value")
let f = ["tushar", "rao" ,"sahab"]
console.log(f.join(" -/"))


// Slice and splice
console.log("slice- is used to take value from array and make them new array ")
console.log(f.slice(0,2));


console.log("splice - used to insert and delet value in b/w array")
console.log(f.splice(2,0,"Rahul"));
console.log(f.splice(1,1,"Rahul","Nikhil"))