

/* a = 1

switch (typeof a){
    case 'string':
      console.log("Good morning");
    case 'boolean':
      console.log("Good afternoon");
    case 'number': 
      console.log( "Good evening");
      default:
     console.log("Hello kodcode");
}
*/

person = {
    id: 1, name: 'John',
    age: 30,
    address: { city: 'London', street: 'Abbey Road' },
    children: [{
      name: 'John Junior', 
      age: 5,
    }, {
      name: 'Lilly', 
      age: 2,
    }]
}
//console.log(person)
console.log(Object.values(person))


let myArray = [1, 2, 3, 4, 5]
let newArray = []
newArray = myArray
console.log(newArray)

person =  ["Avi"]
person2 = []
person2 = person
person2.name