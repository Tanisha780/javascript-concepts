let a = 20;
function printHello(){
  console.log("hello");
  function printBye(){
    console.log("bye");
  }
  printBye();
  console.log(a);
  
  }
printHello(); // if we dont call function with bracket it return all function definition
function getSum(a,b){
  let ans = a+b;
}
getSum(1,2);
// console.log(ans);
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;// plus with 1 because random generates the values between 0 to any number so it have to start from 1 so thats why we apply the plus sign here math floor converts the float number to integer value 
}
console.log(rollDice()); //Random number between 1 to 6
console.log(rollDice());
console.log(rollDice());
// function expression     
// console.log(add(1,2)); cannot access
let add = function(a,b){
  return a+b;
}
console.log(add(1,2));
// arrow functions
let Add=()=>{console.log("hy");
}
Add();
let Addd=(a,b)=> a+b;
console.log(Addd(3,4));
