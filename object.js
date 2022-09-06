const person = {
    firstName: 'Tushar',
    lastName: 'Rao',
    age: 20,
    hobbies: ['gaming','coding','blaw-blaw'],
    address:{
        ward:12,
        city: 'farrukh nagar',
        state: 'haryana'
        }
}
console.log(person);
person.email = 'rao59511@gmail.com'
console.log(person);





// Array with to do 
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
console.log(todos);
console.log(todos[1].text);


// TO get JSON string (It is used to send the data into server)
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);