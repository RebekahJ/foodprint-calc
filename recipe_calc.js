var data = [];
data.push( { food: 'beef', epkg: 39.2 } );
data.push( { food: 'lamb', epkg: 27.0 } );
data.push( { food: 'cheese', epkg: 13.5 } );
data.push( { food: 'pork', epkg: 12.1 } );
data.push( { food: 'salmon_farm', epkg: 11.9 } );
data.push( { food: 'turkey', epkg: 10.9 } );
data.push( { food: 'chicken', epkg: 6.9 } );
data.push( { food: 'tuna_can', epkg: 6.1 } );
data.push( { food: 'egg', epkg: 4.8 } );
data.push( { food: 'potatoes', epkg: 2.9 } );
data.push( { food: 'rice', epkg: 2.7 } );
data.push( { food: 'peanut_butter', epkg: 2.5 } );
data.push( { food: 'nuts', epkg: 2.3 } );
data.push( { food: 'yogurt', epkg: 2.2 } );
data.push( { food: 'broccoli', epkg: 2.0 } );
data.push( { food: 'tofu', epkg: 2.0 } );
data.push( { food: 'dry_beans', epkg: 2.0 } );
data.push( { food: 'milk', epkg: 1.9 } );
data.push( { food: 'tomatoes', epkg: 1.1 } );
data.push( { food: 'lentils', epkg: 0.9 } );

// recipe stores ingredients and quantities in g
var rec1 = [];
rec1.push( { ing: "chicken", qug: 100 } );
rec1.push( { ing: "rice", qug: 75 } );

var ems1 = 0;

// loop over recipe entries
for ( var i = 0; i < rec1.length; i++ ) {

	// loop over possible ingredients
	for ( var j = 0; j < data.length; j++ ) {

		// if string matches, ing present in recipe, get carb contribution
		if ( rec1[i].ing === data[j].food ) {
			ems1 += ( 0.001 * rec1[i].qug ) * data[j].epkg ;
			break;
		}
	} // end ing loop
} // end recipe loop

console.log( "total emissions in kg is: " + ems1 );



