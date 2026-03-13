// pb_27.js 
// Write a JSON script to store information related to books based on
// their id, topic,edition and author. (Minimum details of three books
// having id=1,2,3)



const json = [
  { id: 1, topic: "Horror", edition: 2012, author: "Yash" },
  { id: 2, topic: "Self Help", edition: 2019, author: "Rahul" },
  { id: 3, topic: "Philosophy", edition: 2020, author: "Neel" }
];

console.log(json);


// or

const Books={
    "books":[
        {
            "id":1,
            "topic":"FSD",
            "edition":2023,
            "author":"Yash"
        },
        {
            "id":2,
            "topic":"DM",
            "edition":2022,
            "author":"Neel"
        },
        {
            "id":3,
            "topic":"TOC",
            "edition":2021,
            "author":"Rahul"
        }
    ]
}

console.log(Books);




