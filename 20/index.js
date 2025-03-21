let form =document.getElementsByTagName("form")[0];
console.dir(form);
form.addEventListener("submit",(event)=>{
  event.preventDefault();
  console.log(form[0].value);
  console.log(form[1].value);
})
// promise
let pr= new Promise((resolve,reject)=>{
  console.log("promise");
  resolve();
  console.log("tata");
  
  // reject()
});
console.log(pr);

console.log("bye");
// 21feb.js
let pr1= new Promise((resolve,reject)=>{
  console.log("promise");
  // resolve();
  reject("rejected");
  console.log("tata");});
  setTimeout(() => {
    pr1.then(function g() {
      console.log("hie");
    }).catch(function h(value) {
      console.log("hyeey", value);
    });
  }, 4000);
  
    pr1.then(function i(){
      console.log("hie");
      
    }).catch(function j(value){
      console.log("hyeey",value);
      
    })
  
  
  

//on fulfilled and on rejected 

function createPromise() {
  return new Promise(function exec(resolve, reject) {
    setTimeout(function () {
      console.log("rejecting the promise");
      reject("Done");
    }, 1000);
  });
}

let p = createPromise();
p.then(
  function fulfillHandler1(value) {
    console.log("we fulfilled1 with a value", value);
  },
  function rejectHandler(value) {
    console.log("we reject1 with a value", value);
  }
);
p.then(
  function fulfillHandler2(value) {
    console.log("we fulfilled2 with a value", value);
  },
  function rejectHandler(value) {
    console.log("we reject2 with a value", value);
  }
);

// for (let i = 0; i < 10000000000; i++) {}

console.log("ending");
// practice questions
// creating a promise that resolves with " hello world " after 2 seconds
let pr11=new Promise((resolve,reject)=>{
  
  resolve("succeed"); // value in resolved
  

})


// setTimeout(()=>{
  
//   pr11.then(function h(){
// console.log("hello world");// that prints the value on the screen

//   })
 
// },2000)
// write a promise that rejects with an error message  " something went wrong!"
let p2=new Promise((resolve,reject)=>{
  reject("something went wrong");
})
// use .then()  to handle resolved promise
let p3=new Promise((resolve,reject)=>{
  resolve();

})
p3.then(function(){
  console.log("p3 is resolved");
  
})
// use .catch() to handle rejected promise
let p4 = new Promise((resolve,reject)=>{
  reject("rejected");

})
p4.catch(function(){
  console.log("in p4 we have an error");
  
})
// this keyword
let c={
  name:"tanisha",
  age:34,
  say:function(){
    console.log(this.name);
  }
  
}
c.say();
// 24 feb

function savetoDb(data){
  return new Promise(function exec(resolve,reject){
    setTimeout(function(){
      let internetSpeed = Math.floor(Math.random()*10)+1;
      if(internetSpeed>5){
        console.log(data);
        console.log(internetSpeed);
        
        
        resolve("data saved to db")
        
      }
      else{
        console.log(internetSpeed);
        
        reject("error saving in data check internet connection")
      }
    },3000);
  });
}
savetoDb("hellowrold")

.then((value)=>{
  console.log("writing file");
  // console.log(a); error info state is rejected 
  
  return value;
  

})

.then((value)=>{
  console.log("uploading the file");
  
}
).catch(()=>{
  console.log("downloading rejected");
  
})
// promise.all if all the values are resolved then then method executes if one of the promise is rejected then it will reject all the promise
// prommise.allSettled,prmoise.race,promise.any learning topics
// async function fetchData() {
//   return new Promise(resolve => setTimeout(() => resolve("Data Loaded"), 2000));
// }

// async function displayData() {
//   let data = fetchData();  // ❌ Does not wait, returns a Promise
//   console.log(data);
// }

// displayData();
async function fetchData() {
  let promise = new Promise((resolve,reject) => setTimeout(() => resolve("Data Loaded"), 2000));
  let result = await promise;  // Execution waits here until promise resolves
  console.log(result);
}

fetchData();
fetch("https://dog.ceo/api/breeds/image/random")
.then((data)=>{
  data.json().then((dogImage)=>{
    console.log(dogImage);
    
  })
})
// another syntax of async and await for fetch apis
let newImage;
const apiCall=async ()=>{
  const response=await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await response.json();
  
  newImage=data.message;
  let dogImg=document.createElement("img");
dogImg.src=newImage;
document.getElementsByTagName("form")[0].append(dogImg);
}

apiCall();
let dogButton = document.getElementsByClassName("dog-button")[0];

dogButton.onclick=apiCall;
//iterator generator polyfills