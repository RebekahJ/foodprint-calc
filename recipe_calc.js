var data = [];
data.push( { food: 'chicken', cpkg: 75 } );
data.push( { food: 'cheese', cpkg: 100 } );
data.push( { food: 'arborio', cpkg: 35 } );

// recipe stores ingredients and quantities in g
var rec1 = [];
rec1.push( { ing: "chicken", qu: 100 } );
rec1.push( { ing: "arborio", qu: 75 } );

var carb1 = 0;

// loop over recipe entries
for ( var i = 0; i < rec1.length; i++ ) {

	// loop over possible ingredients
	for ( var j = 0; j < data.length; j++ ) {

		// if string matches, ing present in recipe, get carb contribution
		if ( rec1[i].ing === data[j].food ) {
			carb1 += rec1[i].qu * data[j].cpkg;
			break;
		}
	} // end ing loop
} // end recipe loop

console.log( "total carbs is: " + carb1 );



