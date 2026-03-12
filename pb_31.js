// Write a script to define two JSON objects named as “division1” and
// “division2” having an array to store names of students. These name
// should be sorted alphabetically in the object and should be be written
// to the file. At last, both division objects should be visible with names
// sorted alphabetically in file.

const division={division1:["Ravi","Het","Manish","Aashish"],
                division2:["Niti","Ajay","Cat"]}

const fs=require("fs")
fs.writeFileSync("division.txt",JSON.stringify(division))



var sort=division.division1.sort()
var sort1=division.division2.sort()
console.log(division)
fs.writeFileSync("division_sorted.txt",JSON.stringify(division))