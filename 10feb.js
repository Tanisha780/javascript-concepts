//higher order function
// function outerFunction(){
//   console.log("hello");
// function innerFunction(){
//   console.log("hy");
  
// }
//   return  innerFunction();
    
  
  
// }
// outerFunction();

function greet(sayBye){
  console.log("Hello!");
  //callback(); //Executing the passed function
sayBye();
}

function sayBye() {
  console.log("Goodbye!");
}
greet(sayBye);
// odd or even
function abc(check){
 if(check=="odd"){
  return function (n){
    if(n%2==0){
      return false;
    }else{
    return true;}

  }
 }
 else if(check=="even"){
  return function (n){
    if(n%2!=0){
      return false;
    }
    return true;

  }

 }
}
let checkOdd = abc("odd");
console.log(checkOdd(0)+" 0 is not an odd number");
let checkEven = abc("even");
console.log(checkEven(0)+" 0 is an even number");
//setTimeOut and setInterval it is a part of runtime environment
// higher order function 

// constsayHello=()=>{
//   console.log("hello");
  
// }
// setTimeout(sayHello,4000);
let interval = setInterval(() => {
  console.log("Repeating message");
},2000);


console.log(interval);
setTimeout(()=>{
  clearInterval(interval);

},5000) //after 5 seconds it stops printing repeating message because of clearInterval function
let abcdef="hello"
let a = {
  abcdef,
  name:"tanisha"
}
console.log(a);


