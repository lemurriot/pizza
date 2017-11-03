
function Pizza(size, cheapToppings, expensiveToppings) {
  this.size = size;
  this.cheapToppings = cheapToppings;
  this.expensiveToppings = expensiveToppings;
};

Pizza.prototype.pizzaPrice = function() {
  var pizzaPrice = 10
  if (this.size == "small") {
    pizzaPrice = pizzaPrice - 1;
  } else if (this.size == "large") {
    pizzaPrice = pizzaPrice + 2;
  }
  if (this.cheapToppings.length >= 1) {
    pizzaPrice = pizzaPrice + (this.cheapToppings.length * 1.5)
  }
  if (this.expensiveToppings.length >= 1) {
    pizzaPrice = pizzaPrice + (this.expensiveToppings.length * 2.5)
  } return pizzaPrice;

}



//end of Business Logic
$(document).ready(function() {
  $("#size-add").click(function (event) {
    $(".toppings").show();
    $(".size-query").hide();
    var pizzaSize = $("select#size-select").val();
    $("#show-size").append(pizzaSize);
  });
  $("form#pizzaform").submit(function (event){
    event.preventDefault();
  var pizzaSize = $("select#size-select").val();

  var cheapToppings = [];
    $("input:checkbox[name=cheap-topping]:checked").each(function() {
    var allCheapToppings = $(this).val();
    cheapToppings.push(allCheapToppings);
  });//end of 'add'' cheap toppings select
        console.log(cheapToppings);

      var expensiveToppings = [];
      $("input:checkbox[name=expensive-topping]:checked").each(function() {
      var allExpensiveToppings = $(this).val();
      expensiveToppings.push(allExpensiveToppings);
  });//end of 'add' exp toppings select
      console.log(expensiveToppings);

var yourPizza = new Pizza(pizzaSize, cheapToppings, expensiveToppings);
console.log(yourPizza.pizzaPrice());

  }); //end of submit
});//end of doc ready
