function Pizza(size,toppings) {
  this.size = size;
  this.toppings = toppings;
  this.pizzaPrice = 0;
}

Pizza.prototype.price = function () {
  if (this.size === "small") {
    this.pizzaPrice += 5;
  }
  else if (this.size === "medium") {
    this.pizzaPrice += 7;
  }
  else if (this.size === "large") {
    this.pizzaPrice += 9;
  }
  if (this.toppings === "peppers") {
    this.pizzaPrice += 2;
  }
  else if (this.toppings === "veggie") {
    this.pizzaPrice += 3;
  }
  else if (this.toppings === "supreme") {
    this.pizzaPrice += 5;
  }
    return this.pizzaPrice;
}


$(document).ready(function(){
  $("form#order").submit(function(event){
    event.preventDefault();

    var pizzaSize = $("input[type=radio][name=size]:checked").val();
    var pizzaTopping = $("input[type=radio][name=topping]:checked").val();

    var pizzaOrder = new Pizza(pizzaSize,pizzaTopping).price();



    $("#orderSummary").show();
    $("#orderSummary").append("<li>" +"$" + pizzaOrder + "</li>");


      });
    });
