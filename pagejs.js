var main = function() {

	$('.btn').click(function() {
		alert( "Handler for .click() called." );
		// show ingredient is selected
		$(this).toggleClass('active');
  		// display ingredient on right
  		$('<li>').text('New ingredient').appendTo('.ings');
	});

};

$(document).ready(main);