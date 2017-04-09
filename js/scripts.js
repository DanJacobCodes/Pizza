//Business Logic//


function Pizza(toppings, size, cost){
  this.toppings = toppings;
  this.size = size;
  this.cost = 8;
}

Pizza.prototype.price = function() {
if (this.size === large) {
  this.cost += *1+4
}
else if(this.size === medium){
  this.cost += *1+2
}
else if(this.size === small){
  this.cost += *1+2
}

//User Interface Logic//
$(document).ready(function(){
  $("form#order").submit(function(event){
    event.preventDefault();

    var pizzaSize = $("input[type=radio][name=size]:checked").val();
    var pizzaTopping = $("input[type=radio][name=topping]:checked").val();

    var pizzaOrder = pizzaSize + " " + pizzaTopping;
    var finalPrice = price;

    $("#orderSummary").show();
    $("#orderSummary").append("<li>"+ pizzaOrder + " $" + finalPrice  + "</li>");






    });
  });
