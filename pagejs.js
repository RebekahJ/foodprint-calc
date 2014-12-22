/** DATA **/
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

/** FUNCTIONS **/

/**
* FUNCTION: emsCalc( recipe )
*	Calculates the emissions of a meal based on a recipe's ingredients
*
* @param {Array} recipe - array of objects { ing: {String}, qug: {Number} }
* @returns {Number} emissions in kg
*/
function emsCalc( recipe ) {
	
	var emtot = 0;

	// loop over recipe entries
	for ( var i = 0; i < recipe.length; i++ ) {

		// loop over possible ingredients
		for ( var j = 0; j < data.length; j++ ) {

			// if string matches, ing present in recipe, get carb contribution
			if ( recipe[i].ing === data[j].food ) {
				emtot += ( 0.001 * recipe[i].qug ) * data[j].epkg ;
				break; // skip to next recipe ingredient once current has been matched
			}
		} // end ing loop
	} // end recipe loop

	return emtot;
} // end calc function


/** EVENT HANDLERS **/

// Monitor if first calculation or amended recipe
var firstcalc = true;

var main = function() {

	// temp here until name form is working (then will happen in function on enter)
	var recipe1 = [];

/*
	// get recipe name (FINISH!)
	$(".get-name").keypress(function(event) {

		// Create array and print instructions once recipe name has been entered (FIX!)
    	if (event.which == 13) {
        	event.preventDefault();
        	$("form").submit();

        	// get recipe name

        	// create array to hold recipe
        	var recipe1 = [];

        	// Print line inclding recipe name
        	$('<p>').text("Select ingredients for " + myrecipe + " from the list below and add quantities (in grams) when prompted:").appendTo(".instructions");
    	}
	});
*/

	$('.btn-ing').click(function() {

		// show ingredient has been included:
		$(this).toggleClass('active');

		if ( !firstcalc ) {
				$(".result").empty();
		}

		var quant_str = prompt("Please enter a quantity of " + this.id + " in g:", 0);

		//var quant = parseInt(quant_str, 10); // no good if typo in input number
		var quant = Number(quant_str); // Returns NaN if any non-numeric characters present

		if ( typeof quant === 'number' && quant === quant ) {
  			// display ingredient on right
  			$('<li>').text(this.id + ": " + quant + " g").appendTo('.ings');

  			// add ingredient and quantity to recipe array
  			recipe1.push( { ing: this.id, qug: quant} );
  		}
  		else {
  			alert("Invalid input. Please enter a number.")
  		}

	});

	$('.btn-go').click(function() {

		if ( recipe1.length < 1 ) {
			alert("Please select some ingredients.");
		}
		else {
			// calculate emissions:
			var totems = emsCalc( recipe1 );

			if ( firstcalc ) {
				// print result
				$('<p class="ems">').text("Total emissions: " + totems + " kg").appendTo('.result');
				firstcalc = false;
			}
			else {
				$('<p class="ems">').text("Total emissions: " + totems + " kg").appendTo('.result');
			}
		}

	})

};

$(document).ready(main);