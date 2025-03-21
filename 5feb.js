const fruit = ["apple","guava","orange"];
fruit.length= 2; // it removes the element 
console.log(fruit[1]); 
let info = {
  name:"tanisha",
  age:22,
  occupation:"software engineer",
  name:"kuldeep", //duplicate over ride 
  age:-21,
  books:["rd sharma","hc verma","harry potter"],
  hobbies:{
    reading:"reading books",
    playing:"playing cricket",
  }
};
const age = "rajkumar";
console.log(info);
console.log(typeof info);
console.log(info["age"]); // to access particular value we have to write into the string value it is used when we have a variable and we store value in that variable like rajkumar in age then we used this type
console.log(info[age]); // undefined 
console.log(info.age); // we dont have to apply string here because of dot operator mostly used 
console.log(info.name);
console.log(info.books[1]);
info.marks=23;
delete info.marks;
delete info.name;
delete info;// not working  deleting only key
console.log(info.hobbies.playing); // object inside object nested object
console.log(info.length); // not a function in object it is a function of array







