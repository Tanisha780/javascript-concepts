// in this it removes the elements in both the arrays not only in one  because it points the same reference 
let a = [1,2,3,4,5];
let b = a;
a.pop();
console.log(a);
console.log(b);
const d = [1,2,3,4,5];
//d = [1,2,3,4];
//console.log(d);
console.log(a==d);
let  e =["afsd","tanisha","abc","xyz","a"
]
//let f  = e[0];
//console.log(f);
let [k, f, g, ...h]= e; // destructuring of array 
// ...h is a rest operator means that rest the elements stored in another array
console.log(k+"\n"+f+"\n"+g);
console.log(h);






