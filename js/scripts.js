//Business Logic//
var pricr =8;

function Pizza(toppings, size){
  this.orderSize = size;
  this.toppings = toppings;
}


Pizza.prototype.price = function () {

  var price = 8;

  if (this.orderSize === large) {
    price = size.(1 + 4);
  } else if (this.orderSizesize === medium) {
    price = size(1 + 2);
  } else {
    price = size(1 + 4);
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
    var finalPrice = price;

    $("#orderSummary").show();
    $("ul#orderSummary").append("<li>"+ pizzaOrder + " $" + finalPrice  + "</li>");






    });
  });
