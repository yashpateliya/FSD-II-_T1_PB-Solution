// Write one JSON string with date property (yyyy-mm-dd) and print
// date in India standard time.

const example={
    "str":"This will our JSON file",
    "date":"2006-2-22"
}

var d=example.date
console.log("our date :-" + d)
var ind_date=new Date(d)  
console.log("our new date :-" + ind_date)



// dont forget to add "" in date 
// class - Date
//   22 -2 -2006 ERROR
// 2006-2-22 CORRECT YYYY-MM-DD