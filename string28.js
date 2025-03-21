let name = "tanisha";
console.log(name[8]);// undefined
console.log(name[name.length-2]);
let company="google";
console.log(name+" "+company);// string concatenation
console.log(`my name is ${name} working in ${company}`);// another way to print the value with backtaque and dollar $ sign this is known as template literals
const a = 21;
if(a>25){
  console.log("a is greater than 25");}
  else{
    console.log("a is less than 25");
    
  }
  // false values->undefined,null,0,"",nan,false else all are true

  
const b = 10;
if(b){
  console.log("if");
  
}
else{
  console.log("else");
  
}
console.log(a?30:20);//ternary ooperator
// it returns true because of in a we have number 21 which is true value if the value is true then thats why it returns 30 in answer
console.log(b-"0kjdff");
console.log(b-"0xA"); // due to hexadecimal it returns value







