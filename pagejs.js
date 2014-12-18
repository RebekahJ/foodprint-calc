/** Data **/
// Put in separate file?

// EWG data
var data = [];
data.push( { food: 'Beef', epkg: 39.2 } );
data.push( { food: 'Lamb', epkg: 27.0 } );
data.push( { food: 'Cheese', epkg: 13.5 } );
data.push( { food: 'Pork', epkg: 12.1 } );
data.push( { food: 'Salmon (farmed)', epkg: 11.9 } );
data.push( { food: 'Turkey', epkg: 10.9 } );
data.push( { food: 'Chicken', epkg: 6.9 } );
data.push( { food: 'Tuna (canned)', epkg: 6.1 } );
data.push( { food: 'Egg', epkg: 4.8 } );
data.push( { food: 'Potatoes', epkg: 2.9 } );
data.push( { food: 'Rice', epkg: 2.7 } );
data.push( { food: 'Peanut butter', epkg: 2.5 } );
data.push( { food: 'Nuts', epkg: 2.3 } );
data.push( { food: 'Yogurt', epkg: 2.2 } );
data.push( { food: 'Broccoli', epkg: 2.0 } );
data.push( { food: 'Tofu', epkg: 2.0 } );
data.push( { food: 'Dry beans', epkg: 2.0 } );
data.push( { food: 'Milk', epkg: 1.9 } );
data.push( { food: 'Tomatoes', epkg: 1.1 } );
data.push( { food: 'Lentils', epkg: 0.9 } );

/** Functions **/

var main = function() {

	// temp here until name form is working (then will happen in function on enter)
	var recipe1 = [];

	// get recipe name
	$(".get-name").keypress(function(event) {

		// Create array and print instructions once recipe name has been entered (FIX!)
    	if (event.which == 13) {
        	event.preventDefault();
        	$("form").submit();

        	// get variables recipe name


        	// create array to hold recipe
        	var recipe1 = [];

        	// Print line inclding recipe name
        	$('<p>').text("Select ingredients for " + myrecipe + " from the list below and add quantities (in grams) when prompted:").appendTo(".instructions");
    	}
	});

	$('.btn-in').click(function() {

		// show ingredient has been included:
		$(this).toggleClass('active');

		var quant = prompt("Please enter a quantity of " + this.id + " in g:", 0);

		// If quantity provided is not a number, ask again until quantity is numeric:
		/*if (typeof quant !== number || quant !== quant) {
			quant = prompt(" Please enter a number of grams:", 0);
		}*/

  		// display ingredient on right
  		$('<li>').text(this.id + " " + quant + " g").appendTo('.ings');

  		// add ingredient and quantity to recipe array
  		recipe1.push( { ing: this.id, qug: quant} );
	});

	$('.btn-go').click(function() {

		if ( recipe1.length < 1 ) {
			alert("Please select some ingredients.");
		}
		else {
		// calculate emissions:

		//copy from recipe_calc.js

		// print result
		$('<p>').text("Total emissions: ").appendTo('.result');
		}

	})

};

$(document).ready(main);