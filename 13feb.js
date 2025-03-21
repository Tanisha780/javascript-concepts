//write a program to return a array having square of all element in array
const arr = [1,2,3,4,5,6];
let ans =[];
for(let element of arr){
  ans.push(element*element);
}
console.log(ans);
// using map function built in hof
let ans1=arr.map(function(item,idx){
  console.log(idx);
  
  console.log("hello");
  
  return item * item;
});
console.log(ans1);
// filter
let ans2=arr.filter(function(element){
  return element%2==0;
})
console.log(ans2);
//reduce 
let ans22 = arr.reduce(function(acc,ele){
  console.log(acc,ele);
  return ele+acc;
  
},0) 
console.log(ans22);

// dom manipulation
