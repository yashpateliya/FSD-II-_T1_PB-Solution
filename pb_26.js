// Write a JSON script by entering user detail of three different person
// having same age group in string format method. Print the following
// result in object form. (1) User Details (2) Name of 2nd person and
// his/her age

const person={
    "person1":{
        "name":"Yash",
        "age":20,
        "city":"Vadodra"
    },    "person2":{
        "name":"Abc",
        "age":18,
        "city":"Vadodra"
    },    "person3":{
        "name":"XYZ",
        "age":23,
        "city":"Godhara"
    },
   
           
}
// user details


console.log(person.person1)
console.log(person.person2)
console.log(person.person3)

// name of 2nd person and his/her age

console.log("Name of 2nd person is "+person.person2.name + " and his age is "+ person.person2.age)
