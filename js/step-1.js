/* Step 1 calls for us to store information about each product when
 * a user wants to add it to their cart.  You will not see any update
 * in the HTML just yet, that comes in step two.  This just prepares all
 * of our data so that we can render it in the HTML later. */

var cart = []; // Creates an empty array for us to store our data in.
var total = 0; // Creates an integer variable for us to store our total cost in.


$(function() {
   // Set up a click handler event attached to any <a> tags with a class of add-to-cart
  $('a.add-to-cart').click(function(e) {
    e.preventDefault(); // Because a tags have a default behavior in the browser (navigating to a new page), this line lets us prevent that behavior so we can do something else with it.)

    /* Grab the SKU value of the product being purchased. Based on our HTML, we can access this value by getting the parent element (div.product) and returning it's data attribute called 'data-sku' */
    var sku = $(this).parent().data('sku');
    /* Similarly, grab the product name by getting the text within the <h2> tag of the product. */
    var name = $(this).parent().find('h2').text();

    /* Initialize an object that holds the values of the sku and name variables we just defined */
    var itemToBePurchased = {
      "sku": sku,
      "name": name,
      "price": 10 // adding a hard-coded price in here. If you were to add the price somewhere to the DOM, you could grab that value just as you did with the name and sku.
    };

    // Add our newly created object to our global cart array.
    cart.push(itemToBePurchased);

    // Update our total price. The += operator allows us to add onto the existing value of total, rather than replace it completely.
    total += itemToBePurchased.price;

    // Update the html within #cart-total with the new price
    $('#cart-total').html("Total Price: $" + total);

  });
});