
// reverse array
const arr = [1,2,3,4,5];
for(let i = 0;i<arr.length;i++){
  console.log(arr[i]**2);
}
for(let i=arr.length-1;i>=0;i--){
  console.log(arr[i]);
}
// reverse a string
let str = "apple";
let ans="";
for(let i=str.length-1;i>=0;i--){
  ans+=str[i];
}
console.log(ans);
let a = 10;
let b = 20;
let c = 30;
if(a+b>c&& a+c>b && b+c>a){
  console.log("valid triangle");
  
}
else{
  console.log("invalid triangle");
  
}
console.log(["2","1"]==21);
console.log(Math.ceil(-5.9));
console.log(Math.random());
console.log(Math.pow(2,3));
// write a program to generate random number

console.log(Math.floor(Math.random()*100));


