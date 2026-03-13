
//Write a JS to store an array of objects having height and name.
//display name and height of person with highest height. 

const obj=[{height:165 , name:"Yash"},{height:140,name:"Neel"},{height:168,name:"Rahul"}]


// method 1
var sort=obj.sort((a,b)=>b.height-a.height);
console.log(" in objects max hight is "+sort[0].height + " name is "+ sort[0].name)



// method 2

let max_height=0
for (let i=0;i<obj.length;i++){
       let a=obj[i].height
       if(a>max_height){
              max_height=a
       }

  
}

console.log(max_height)
let name_index;
for(let j in obj){
       if (obj[j].height==max_height){
              name_index=j
       }
}

console.log(" in objects max hight is "+max_height + " name is "+ obj[name_index].name)