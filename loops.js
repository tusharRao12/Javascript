// For loops
// for(initailization;condition;increment)
console.log("For loops - -- ")
for(var a=1;a<10;a++){
    console.log("Hellow Rao Sahab")
}
// For each loop- calls a provided function once for each element in an array, in order.
// Syntax - array.forEach(function(value,index,arr){
// });
var a = ["Tushar","Rahul","Nikhil"];
a.forEach(function(value){
console.log(value)
})
var b = ["Tushar","Rahul","Nikhil"];
b.forEach(function(value, index){
console.log(index +":"+ value)
})


// While
let i = 0;
while(i<10){
    console.log(i)
    i++;
}






const todos = [
    {
        id:1,
    text:'Take out trash',
    isCOmpleted:true
    },
    {
        id:2,
        text:'Meeting with boss',
        isCOmpleted:true
    },
    {
        id:3,
        text:'Dentist Appointment',
        isCOmpleted:false
    }
]
for(let i = 0; i<todos.length;i++){
    console.log(todos[i].text);
}