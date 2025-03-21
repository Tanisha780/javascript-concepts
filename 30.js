let number=10;
switch(number){
  case 1:
    console.log("one");
    break;
    case 5:
      console.log("five");
      default:
        console.log("no number");
}
let name = "  tAnisha   ";
console.log(name.trim()); // remove space frpm starting and ending not from in between
console.log(name.toUpperCase());// it always returns new string not changing the original value
console.log(name.toLowerCase().toUpperCase().trim());// method chaining
console.log(name.indexOf('ta'));
console.log(name.slice(0,4));

const monthName = ['january','july','march','august'];
console.log(monthName);
monthName.shift();
console.log(monthName);
monthName.shift();
console.log(monthName);
monthName.unshift('june');
console.log(monthName);
monthName.unshift('july');
console.log(monthName);
console.log(monthName.includes('august'));







