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
data.push( { food: 'Potatoes', epkg: 2.9, calpg: 0.77 } ); 
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

/**
* FUNCTION: emsCalc( recipe )
*	Calculates the emissions of a meal based on a recipe's ingredients
*
* @param {Array} recipe - array of objects { ing: {String}, qug: {Number} }
* @returns {Number} emissions in kg
*/
function emsCalc( recipe ) {

	var emtot = 0,
		caltot = 0;

	// loop over recipe entries
	for ( var i = 0; i < recipe.length; i++ ) {

		// loop over possible ingredients
		for ( var j = 0; j < data.length; j++ ) {

			// if string matches, ing present in recipe, get carb contribution
			if ( recipe[i].ing === data[j].food ) {
				emtot += ( 0.001 * recipe[i].qug ) * data[j].epkg ;
				caltot += recipe[i].qug * data[j].calpg;
				break; // skip to next recipe ingredient once current has been matched
			}
		} // end ing loop
	} // end recipe loop

	return [ emtot, caltot ];
		
}; // end calc function

// recipe stores ingredients and quantities in g
var rec1 = [];
rec1.push( { ing: "Chicken", qug: 100 } );
rec1.push( { ing: "Rice", qug: 75 } );

var rec2 = [];
rec2.push( { ing: "Cheese", qug: 50 } );
rec2.push( { ing: "Rice", qug: 75 } );

var ems1 = emsCalc( rec1 );
var ems2 = emsCalc( rec2 );

console.log( "rec1 total emissions in kg is: " + ems1[0] );
console.log( "rec2 total emissions in kg is: " + ems2[0] );
console.log( "rec1 cals is: " + ems1[1] );
console.log( "rec2 cals is: " + ems2[1] );


