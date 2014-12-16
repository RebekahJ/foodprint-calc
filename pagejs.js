var main = function() {

	var recipe1 = [];

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