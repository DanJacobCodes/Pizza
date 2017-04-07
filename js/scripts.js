//Business Logic//

function Pizza(toppings, size){
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.prices = function () {
  var price = 8;
  if (this.size === large) {
    price = size(1 + 4);
  } else if (this.size === medium) {
    price = size(1 +2);
  } else {
    price = size(1+4)
  }

  if (this.topping === supreme) {
    price = toppings(+4);
  } else if (this.toppping = veggie) {
      price = toppings(+2);
    } else {
        price = toppings();
      }
      return price;
    }

//User Interface Logic//
$(document).ready(function(){
  $("form#order").submit(function(event){
    event.preventDefault();

    var pizzaSize = $("input[type=radio][name=size]:checked").val();
    var pizzaTopping = $("input[type=radio][name=topping]:checked").val();

    var pizzaOrder = pizzaSize + " " + pizzaTopping;
    var finalPrice =  new Pizza;

    $("#orderSummary").show();
    $("ul#orderSummary").append("<li>"+ pizzaOrder + price + "</li>")







  });
});
