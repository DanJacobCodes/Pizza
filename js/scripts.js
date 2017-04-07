//Business Logic//

function Pizza(toppings, size){
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.price = function () {
  var price = [];
  if (this.size === small) {


  }

};



//User Interface Logic//
$(document).ready(function(){
  $("form#order").submit(function(event){
    event.preventDefault()

    $( "input[type=radio][name=size]:checked" ).val();
    $( "input[type=radio][name=topping]:checked" ).val();








}
