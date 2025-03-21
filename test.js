let x = NaN;
console.log(typeof typeof x); // string because number is in string
// hoisting used with var only not with const and let
console.log(y);
var y = 21;
console.log(y);
let a =21;
{
  a=22;
  console.log(a); // when we dont declare any variable inside scope then it looks outside and change the value of outside variable  we access the values from inside but we cant access the values inside values from outside                  
}
{
  a=23;
}
console.log(a); 
// console.log(b); undefined
for(var i=0;i<=10;i++){
  console.log(i);
  
}
console.log(i);// not access i for let
console.log(i);