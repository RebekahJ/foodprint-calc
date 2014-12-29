/** DATA **/
// Put in separate file?

// EWG, google (USDA) data
var data = [];
data.push( { food: 'Beef', epkg: 39.2, calpg: 2.5 } ); // 85% lean, 15% fat, broiled.
data.push( { food: 'Lamb', epkg: 27.0, calpg: 2.94 } ); //1/4" fat, cooked
data.push( { food: 'Cheese', epkg: 13.5, calpg: 4.02 } ); // cheddar
data.push( { food: 'Pork', epkg: 12.1, calpg: 1.73 } ); // ham, slice, bone
data.push( { food: 'Salmon (farmed)', epkg: 11.9, calpg: 2.08 } ); // atlantic, raw
data.push( { food: 'Turkey', epkg: 10.9, calpg: 1.89 } ); // whole, roasted
data.push( { food: 'Chicken', epkg: 6.9, calpg: 2.19 } ); // meat
data.push( { food: 'Tuna (canned)', epkg: 6.1, calpg: 1.84 } ); //bluefin, cooked
data.push( { food: 'Egg', epkg: 4.8, calpg: 1.55 } ); //boiled
data.push( { food: 'Potatoes', epkg: 2.9, calpg: 0.77 } ); //
data.push( { food: 'Rice', epkg: 2.7, calpg: 3.65} ); // white, long-grain, RAW
data.push( { food: 'Peanut butter', epkg: 2.5, calpg: 5.88 } ); //smooth
data.push( { food: 'Nuts', epkg: 2.3, calpg: 6.07 } ); // mixed, roasted
data.push( { food: 'Yogurt', epkg: 2.2, calpg: 0.59 } ); //greek, non-fat
data.push( { food: 'Broccoli', epkg: 2.0, calpg: 0.34} );
data.push( { food: 'Tofu', epkg: 2.0, calpg: 0.76} );
data.push( { food: 'Dry beans', epkg: 2.0, calpg: 1.87 } ); //cooked
data.push( { food: 'Milk', epkg: 1.9, calpg: 0.50 } ); // 2% fat
data.push( { food: 'Tomatoes', epkg: 1.1, calpg: 0.18 } );
data.push( { food: 'Lentils', epkg: 0.9, calpg: 1.16 } ); //boiled


/** FUNCTIONS **/

/**
* FUNCTION: emsCalc( recipe )
*	Calculates the emissions and calories of a meal based on a recipe's ingredients
*
* @param {Array} recipe - array of objects { ing: {String}, qug: {Number} }
* @returns {Array} emtot: emissions in kg, caltot: calories in recipe serving
*/
function emsCalc( recipe ) {
	
	var emtot = 0,
		caltot = 0;

	// loop over recipe entries
	for ( var i = 0; i < recipe.length; i++ ) {

		// loop over possible ingredients
		for ( var j = 0; j < data.length; j++ ) {

			// if string matches, ing present in recipe, get carb and cal contribution
			if ( recipe[i].ing === data[j].food ) {
				emtot += ( 0.001 * recipe[i].qug ) * data[j].epkg;
				caltot += recipe[i].qug * data[j].calpg;
				break; // skip to next recipe ingredient once current has been matched
			}
		} // end ing loop
	} // end recipe loop

	return [ emtot, caltot ];
} // end calc function

/**
* FUNCTION: equCalc( emis )
*	Gives equivalent activity
*
* @param {Number} emis - total emissions in kg per recipe serving, calculated by emsCalc
* @returns {Number} quantity of chosen activity
*/
function equCalc( emis ) {
	
	var equtot = 0;

	// need conversion factors

	return equtot;
} // end calc function



/** EVENT HANDLERS **/

// Monitor if first calculation or amended recipe
var firstcalc = true;

var main = function() {

	// temp here until name form is working (then will happen in function on enter)
	var recipe1 = [];

	/*
	// GET RECIPE NAME (FINISH!)
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

	// SELECT INGREDIENT BUTTON
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

  			// remove button (finish)
  			//var rem = $('<button/>');
  			//$('.ings').append(rem);

  			// add ingredient and quantity to recipe array
  			recipe1.push( { ing: this.id, qug: quant} );
  		}
  		else {
  			alert("Invalid input. Please enter a number.")
  		}

	});

	// GO! CALC EMS + CALS
	$('.btn-go').click(function() {

		if ( recipe1.length < 1 ) {
			alert("Please select some ingredients.");
		}
		else {
			// calculate emissions:
			var tots = emsCalc( recipe1 );
			var totems_r = Math.round(tots[0]*100)/100;
			var totcals_r = Math.round(tots[1]*100)/100;

			$('<p class="ems">').text("Total emissions: " + totems_r + " kg").appendTo('.result');
			$('<p class="ems">').text("Total calories: " + totcals_r ).appendTo('.result');

			if ( firstcalc ) {
				firstcalc = false;
			}
		}

	});

};

$(document).ready(main);