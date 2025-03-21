// if we return with id then it returns us object
let headImage=document.getElementById("mainImg");
console.dir(headImage);
// if we return with class name then it returns in collection
// const paragraph= document.getElementById("description");
// paragraph[0].innerHTML="hello";
// console.log(paragraph);
// query selector selects the first element whatever it gets first there are many tags but it return first tag
const p=document.querySelector("p");
console.dir(p)
const h = document.querySelector("h1");
console.dir(h);
// innerHtml shows text in the form of tags not only text in this we change the format of text
// innertext shows only text we cant change anything in innerText
// textContent
// getattribute
let heading2= document.querySelector("h1");
heading2.style.backgroundColor="red" // inline css we cant change the value further if we give inline css
// class-List 1. add 2.removes 3. toggle
let element = document.getElementById("my-div");
element.classList.add("highlight");

console.log(element.classList);
element.classList.remove("box");
console.log(element.classList);
element.classList.toggle("hiddens");
console.log(element.classList);
console.log(element.parentElement);
console.log(element.parentElement.children);
 let jj= document.createElement("h3");
 jj.innerText= "hy this is heading";
heading2.appendChild(jj) // prepend means it add at the first poisition
// 18feb.js
let btn = document.querySelector(".btn");
btn.onclick =()=>{
  console.log("hello");
}
let img = document.querySelector("img");
img.onclick =()=>{
  console.log("image clicked");
}
img.onmouseenter= ()=>{
console.log("mouse entered");

}
img.onmousemove=()=>{
  console.log("moved");
}
function printBye(){
  console.log("byeeeeeeeeee");
  
}
// event Listener in this we attatch multiple functions 
btn.addEventListener("click",()=>{
  console.log("byiii");
})
// another method
btn.addEventListener("click",printBye)
// with clicking image we change the src of an image
btn.addEventListener("click",function(){
  let imgee= document.querySelector("img");
  setTimeout(()=>{
     img.src= "https://static.vecteezy.com/system/resources/previews/022/267/874/large_2x/rose-flower-pictures-beautiful-roses-love-rose-flower-beautiful-flowers-wallpapers-ai-generated-free-photo.jpg"

  },3000)
 
})


let btn1 = document.querySelector("bttn");
function generateColor(){
  let r = Math.floor(Math.random()*255);
  let g = Math.floor(Math.random()*255);
  let b= Math.floor(Math.random()*255);
  let color = `rgb (${r},${g},${b})`;
}

//  this keyword used with normal function only not with the arrow function
// globally window object
// 19feb.js
"use strict";
console.log(this);
function tanisha(){
  console.log("this",this); // window object(this subsitution)
}
tanisha();
window.tanisha()
// with arrow function this keyword works with parent mode dont depend upn the strict or non strict mode
let obj = {
  name:"tanisha",
  age:20,
  display:()=>{
    const innerFunction=()=>{
      console.log(this);
      
    };
    innerFunction();
    
  }
  

}
obj.display();// undefined
let student1={
  name:"tanisha",
  age:21,
  display:function(place,time){
    console.log(this.name);
    console.log(place,time);
    
    
  }

}
let student2={
  name:"kuldeep",
  age:21,
 

}
student1.display.call(student2,"mumbai","11");// change this value from tanisha to kuldeep
// in apply method we pass the arguments in the form of array otherwise it is same as call method
// in bind method it returns the value in the form of function
student1.display.apply(student2,["mumbai","12"]);
let hello = student1.display.bind(student2,"pune","13");
console.log(hello);
hello();
//20feb.js
const person={
  name:"Bob",
 
  greet:function(){
    setTimeout(()=>{
      console.log(this);
      
    },1000)
  }
} 
person.greet();
// let box=document.getElementsByClassName("box");
// box.addEventListener("click",()=>{
//   console.log("div was clicked");
  
// })
// let help=document.getElementsByClassName("help-me")[0];
// help.addEventListener("click",(event)=>{
//   console.log("button was clicked");
//   event.stopPropagation();
  
// })
let input = document.querySelector("input");
input.addEventListener("keydown",(event)=>{
  console.log("key down presed");
  console.log(event.target.value);
  
  
})

