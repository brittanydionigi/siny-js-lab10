/* In step two, we want to actually render the cart on the page
 * a user wants to add it to their cart. We will add a new function
 * refreshCart to handle this logic. */

var cart = []; // Creates an empty array for us to store our data in.
var total = 0; // Creates an integer variable for us to store our total cost in.


/* Define a function to refresh the cart in the HTML. We are passing in a parameter called 'itemToBePurchased'
 * which contains all the product information we are storing so we can put it into the HTML */
function refreshCart(itemToBePurchased) {
  var html = "<li>"; // create a list tag and hold it in a variable called 'html'
  html += "<h5>" + itemToBePurchased.name + "</h5>"; // add an <h5> to our html variable
  html += "<p>Price: $" + itemToBePurchased.price + "</p>"; // add the price in a <p> tag to our html
  html += "</li>"; // close our li tag.

  /* The html variable now should look like this: <li><h5>Item Name</h5><p>Price: $XX</p></li> */
  $('#cart-items').append(html); // Append our newly created HTML to our unorder list #cart-items
}


$(function() {
    $('a.add-to-cart').click(function(e) {
    e.preventDefault(); // Because a tags have a default behavior in the browser (navigating to a new page), this line lets us prevent that behavior so we can do something else with it.)

    var sku = $(this).parent().data('sku');
    var name = $(this).parent().find('h2').text();

    var itemToBePurchased = {
      "sku": sku,
      "name": name,
      "price": 10 // adding a hard-coded price in here. If you were to add the price somewhere to the DOM, you could grab that value just as you did with the name and sku.
    };

    cart.push(itemToBePurchased);
    total += itemToBePurchased.price;

    $('#cart-total').html("Total Price: $" + total);

    /* call our refreshCart function, and pass in our newly created object so we can render the appropriate data */
    refreshCart(itemToBePurchased);

  });
});