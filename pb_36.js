// q-36
// Print following statement in console from given JSON objects.

const a = {
  "Name": "Ramesh",
  "Subects": ["Maths", "Scence", "chemistry"],
  "Grade": {
    "Type": "marks",
    "Total": [88, 90, 99, 87]
  },
  "Range": {
    "opt": "100",
    "type": ["secure", "subject", "class"]
  },
  "achive": [
    {
      "Rank": "rank",
      "place": [1, 2, 3]
    },
    {
      "Ordinalindicator": "st"
    },
    "12"
  ],
  "joints": ["outof", "got", "and"]
}
// Output: Ramesh got 99 outof 100 marks
//         and secure 1st rank
var name=a.Name
var marks=a.Grade.Total[2]
var out=a.Range.opt
var secure=a.Range.type[0]
var rank=a.achive[0].place[0]
var ra=a.achive[0].Rank
var ordinal=a.achive[1].Ordinalindicator
console.log(name+" "+a.joints[1]+" "+marks+" "+a.joints[0]+" "+out+" marks")
console.log(a.joints[2]+" "+secure+" "+rank+ordinal+ " " +ra)
