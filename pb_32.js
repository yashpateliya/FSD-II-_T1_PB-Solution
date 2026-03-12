// Write a JSON object which contains array of 3 objects. Each object
// contains 2 properties name and age. Now, sort an array values by age
// in descending order. Print name in terminal as per the sorted age.




const Student={
    "students": [
        {
            "name": "Yash",
            "age": 20
        },
        {
            "name": "Guarav",
            "age": 23
        },
        {
            "name": "Chhaya",
            "age": 19
        }
    ]
};


var sort=Student.students.sort((a,b)=>b.age-a.age);
console.log(sort);



// Print name
for (let i=0;i<Student.students.length;i++){
    console.log(Student.students[i].name)
}