// array of objects
let people=[
  {
    name:"alice",
    age:20,
    city:"bathinda"

  },
  {
    name:"bob",
    age:21,

  }
]
let info = {
  namee:"tanisha",
  agee:20,
  cityy:"mumbai",
}
console.log(people[1].name);
people.pop();
console.log( typeof people);
let [name,age,city]=people;
console.log(name,age,city);
let {namee:username, agee,cityy:place="mohali",...data}=info; //changing name to username it change the name variable to usrname so we have to print username (destructuring of object)
console.log(username,agee,place);
console.log(place);
//  function
console.log(sum(sum(3,4),1));
sum(1,2)
function sum(a,b){
  console.log(a+b);
}
for(let i=0;i<10;i++){
  if(i==4){
    continue;
  }
  console.log(i);
  

}


