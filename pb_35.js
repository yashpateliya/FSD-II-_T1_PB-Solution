

// q-35
// Below JSON object a is given. Print below sentence in console from the
// given object.
// Hi ! We are students of LJU .
// Exam - FSD2
const a = {
"A" : "LJU",
"B" : ["CSE", { 'M' : [ { "N" : "FSD2" } , "Exam" ]}],
"C" : [ {
"D" : "Hi",
"E" : ['are', 4, {'F' : ['semester', 'We']} ]
}],
"G" : {"H" : "students", "I" : ["of","!"] },
"J" : [{"K" :".", "L":"-"},"FSD-2"]  }

var hi=a.C[0].D
console.log(hi)
var ex=a.G.I[1]
var we=a.C[0].E[2].F[1]
var are=a.C[0].E[0]
var stu=a.G.H
var of=a.G.I[0]
var lju=a.A
console.log(hi+ ex +we+are+stu+of+lju) 
