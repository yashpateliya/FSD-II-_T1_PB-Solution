// pb_29.js
// Write a JSON script to define Name,DOB,Age and birthplace of one
// person. Then print his birthdate in console as well as in chrome after
// clicking birthdate button.

const person={
    Name:"Yash",
    DOB:"2006-02-22",
    Age:20,
    birthplace:"Vadodra"


}

console.log(person.DOB)
function showBirthdate(){
    alert("Birthdate is "+person.DOB)
}

 
// html code
//   "<body>
//   <button id="birthdateButton" onclick="showBirthdate()">Show Birthdate</button>"
//  " </body>"

 
 