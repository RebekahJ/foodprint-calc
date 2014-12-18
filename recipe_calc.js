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

// recipe stores ingredients and quantities in g
var rec1 = [];
rec1.push( { ing: "chicken", qug: 100 } );
rec1.push( { ing: "rice", qug: 75 } );

var rec2 = [];
rec2.push( { ing: "cheese", qug: 50 } );
rec2.push( { ing: "rice", qug: 75 } );

var ems1 = emsCalc( rec1 );
var ems2 = emsCalc( rec2 );

console.log( "rec1 total emissions in kg is: " + ems1 );
console.log( "rec2 total emissions in kg is: " + ems2 );



