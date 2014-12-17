var main = function() {

	// get recipe name
	$(".get-name").keypress(function(event) {
    	if (event.which == 13) {
        	event.preventDefault();
        	$("form").submit();

        	// get variables recipe name
        	// create array to hold recipe
        	var recipe1 = [];

        	// Print line inclding recipe name
        	$('<p>').text().appendTo(".instructions");
    	}
	});

	$('.btn').click(function() {
		var quant = prompt("Please enter a quantity of " + this.id + " in g:", 0);

		// show ingredient has been included:
		

  		// display ingredient on right
  		$('<li>').text(this.id + " " + quant + " g").appendTo('.ings');

  		// add ingredient and quantity to recipe array
  		recipe1.push( { ing: this.id, qug: quant} );
	});

};

$(document).ready(main);