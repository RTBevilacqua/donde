'use strict'

$(function(){
	$('#city-choice').hide();
	$('#new-york').hide();
	$('#los-angeles').hide();
	$('#los-angeles-gallery').hide();
	$('#los-angeles-info').hide();
	$('#new-york-reserve').hide();
	$('#new-york-info').hide();
	$('#contact-form').hide();
	$('#about').hide();
	$('#new-york-gallery').hide();

//click brings up CITY options
	$('#main-cities').on('click', function(){
		$('#city-choice').show();
		$('#new-york').hide();
		$('#los-angeles').hide();
		$('#new-york-reserve').hide();
		$('#new-york-info').hide();
		$('#contact-form').hide();
		$('#about').hide();
		$('#intro').css('opacity', '0');

	})


//click brings up ABOUT page.
	$('#main-about').on('click', function(){
		$('#about').show();
		$('#intro').css('opacity', '0');
		$('#city-choice').hide();
		$('#new-york').hide();
		$('#los-angeles').hide();
		$('#new-york-reserve').hide();
		$('#new-york-info').hide();
		$('#contact-form').hide();
	})

//click brings up CONTACT.
	$('#main-contact').on('click', function(){
		$('#contact-form').show();
		$('#city-choice').hide();
		$('#new-york').hide();
		$('#los-angeles').hide();
		$('#new-york-reserve').hide();
		$('#new-york-info').hide();
		$('#about').hide();
		$('#intro').css('opacity', '0');
	})

//click brings up next menu for New York City.
	$('#city-choice-nyc').click(function(){
		$('#new-york').show();
		$('#city-choice-nyc').css('width', '100%');
		$('#city-choice-la').css('opacity', '0');
		$('#intro').css('opacity', '0');
	})

//click brings up INFO page
	$('#ny-info').click(function(){
		$('#new-york-info').show();
	})


//click brings up next menu for Los Angeles.
	$('#city-choice-la').click(function(){
		$('#los-angeles').show();
		$('#city-choice-la').css('width', '100%');
		$('#city-choice-nyc').css('opacity', '0');
		$('#intro').css('opacity', '0');
	})

//click brings up nyc gallery.
	$('#ny-gallery').on('click', function(){
		$('#new-york-gallery').show();
		$('#los-angeles').hide();
		$('#new-york-info').hide();
		$('#about').hide();
		$('#intro').css('opacity', '0');

	})

}) //end of DR