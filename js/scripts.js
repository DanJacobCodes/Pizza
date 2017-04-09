//Business Logic//


function Pizza(toppings, size, cost){
  this.toppings = toppings;
  this.size = size;
  this.cost = 8;
}

Pizza.prototype.price = function() {
if (this.size === "large") {
  this.cost += 4
}
else if(this.size === "medium"){
  this.cost += 2
}
else if(this.size === "small"){
  this.cost += 1
}
else if (this.toppings === "peppers"){
  this.cost += 1;
}
else if (this.toppings === "veggie"){
  this.cost += 2;
}
else if (this.toppings === "supreme"){
  this.cost += 3;
    }
    return this.cost;
  }



//User Interface Logic//
$(document).ready(function(){
  $("form#order").submit(function(event){
    event.preventDefault();

    var pizzaSize = $("input[type=radio][name=size]:checked").val();
    var pizzaTopping = $("input[type=radio][name=topping]:checked").val();

    var pizzaOrder = new Pizza(pizzaSize,pizzaTopping);
    var finalPrice = Pizza;

    $("#orderSummary").show(finalPrice);
    $("#orderSummary").append("<li>"+ finalPrice + " $" +  "</li>");


    });
  });
