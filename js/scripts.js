//Business Logic//

function Pizza(toppings, size){
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.price = function () {
  var price = 8;
  if (this.size === large) {
    price = size(1 + 4);
  } else if (this.size === medium) {
    price = size(1 +2);
  } else {
    price = size(1+4)
  }
  return price;

  console.log(price);


};
// Pizza.prototype.toppingAddition = function () {
//   if(this.toppings === plain){
//     price = toppings(+1)
//   }
//
// };


//User Interface Logic//
$(document).ready(function(){
  $("form#order").submit(function(event){
    event.preventDefault();

    var pizzaSize = $("input[type=radio][name=size]:checked").val();
    var pizzaTopping = $("input[type=radio][name=topping]:checked").val();

    var pizzaOrder = pizzaSize + " " + pizzaTopping;
    var finalPrice = new Pizza();

    $("#orderSummary").show();
    $("ul#orderSummary").append("<li>"+ pizzaOrder + "</li>")







  });
});
