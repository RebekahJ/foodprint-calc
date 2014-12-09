var main = function() {

	$('.list').click(function() {
		// show ingredient is selected
		$(button).toggleClass('active');
  		// display ingredient on right
  	
	});

	$('.dropdown-toggle').click(function() {
    	$('.dropdown-menu').toggle();
  	});


	$('.chocolate').click(function() {
  		$('<li>').text('New ingredient').appendTo('.ings');
	});

}

$(document).ready(main);