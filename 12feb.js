for(var i =0;i<5;i++){
  setTimeout(()=>{
    console.log(i);
    

  },1000);
} //because var redeclares and uodates value globally so it prints 5 times 5 
// callback hell means nested callback
function confirmOrder(payment,price){
  payment(price);
  payment(price);// inversion of control money deducted two times
  console.log("order confirmed");
  
}
function payment(rs){
  // throw new Error("not done payment");
  console.log("money deducted",rs);
}
confirmOrder(payment,1000);
function orderPizza() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Pizza Ordered"), 1000);
  });
}

function prepareDough(pizza) {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Dough Ready"), 1000);
  });
}

function addToppings(dough) {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Toppings Added"), 1000);
  });
}

function bakePizza(toppedPizza) {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Pizza Baked"), 1000);
  });
}

function deliverPizza(bakedPizza) {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Pizza Delivered"), 1000);
  });
}

// // **Chaining Promises to Eliminate Callback Hell**
orderPizza()
.then(prepareDough)
.then(addToppings)
.then(bakePizza)
.then(deliverPizza)
.then((status) => console.log(status)) // "Pizza Delivered"
.catch((error) => console.log("Error:", error));
  async function makePizza() {
    try {
      const pizza = await orderPizza();
      const dough = await prepareDough(pizza);
      const toppedPizza = await addToppings(dough);
      const bakedPizza = await bakePizza(toppedPizza);
      const status = await deliverPizza(bakedPizza);
      console.log(status);
    } catch (error) {
      console.log("Error:", error);
    }
  }
  
  makePizza();
  try{
    console.log(feb14);
    console.log("vasskjfk");
  }
  catch(error){console.log(error);
  }
  

  
  