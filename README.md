# Pizza Order

#### A simple program to using radio buttons to order pizza, April 10th, 2017

#### By Dan Jacob

## Description

Pizza Order will allow users to simply order pizza by selecting a range of options using radio buttons. Users will be able to select size, and toppings for their pizza. In addition to ordering a pizza of their liking they will also be able to see the cost of their pizza.

## Specs
* When users select a size and toppings through radio buttons, user interface logic will gather input
  * Input: Large, Pepperoni

* Once size and topping have been selected users will able to see the final cost of their selection
  * Input: Large, Pepperoni
  * Output: $13

* When method .price() is called on the Pizza object, the price of the pizza object will be calculated in the Business Logic using branching to return a final cost.
  * Example User Input: Large, Pepperoni
  * Backend Logic: Pizza.prototype.price() else if (this.size === "large") {
    this.pizzaPrice += 9;
  }

* Variable in front end logic will collect data from user inputs, as well Pizza object   
  * var pizzaOrder = new Pizza(pizzaSize,pizzaTopping).price();



## Setup/Installation Requirements

* Download or clone this repository to your desktop
* Open index.html file to view on your browser!

## Support and contact details

If any issues occur contact me at dansamueljacob@gmail.com

## Technologies Used
 HTML, CSS, Bootstrap, JavaScript, jQuery

### License
Copyright (c) 2017 Dan Jacob
