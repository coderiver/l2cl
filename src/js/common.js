$(document).ready(function() {

	$('.js-loc-btn').click(function() {
		// if ($(this).hasClass('is-active')){
		// 	$('.js-loc-btn').removeClass('is-active');
		// 	$('.js-location').removeClass('is-active');
		// }
		// else {
		// 	$('.js-loc-btn').addClass('is-active');
		// 	if ($('.js-location').hasClass('is-active')) {
		// 		$('.js-location').removeClass('is-active');
		// 	}
		// 	else {
		// 		$('.js-location').addClass('is-active');
		// 	}
		// }
		$('.js-loc-btn').addClass('is-active');
		$('.js-location').addClass('is-active is-index');
		$('.js-weapon').removeClass('is-index');
		setTimeout(function() {
			$('.js-weapon-btn').removeClass('is-active');
			$('.js-weapon').removeClass('is-active');
		}, 700);
	});

	$('.js-weapon-btn').click(function() {
		// if ($(this).hasClass('is-active')){
		// 	$('.js-weapon-btn').removeClass('is-active');
		// 	$('.js-weapon').removeClass('is-active');
		// }
		// else {
		// 	$('.js-weapon-btn').addClass('is-active');
		// 	if ($('.js-weapon').hasClass('is-active')) {
		// 		$('.js-weapon').removeClass('is-active');
		// 	}
		// 	else {
		// 		$('.js-weapon').addClass('is-active');
		// 	}
		// }
		
		$('.js-weapon-btn').addClass('is-active');
		$('.js-weapon').addClass('is-active is-index');
		$('.js-location').removeClass('is-index');
		setTimeout(function() {
			$('.js-loc-btn').removeClass('is-active');
			$('.js-location').removeClass('is-active');
		}, 700);
	});
	
	$('.js-item').mouseenter(function() {
		$('.js-parent').addClass('is-active');
		$('.js-item').removeClass('is-active');
		$(this).addClass('is-active');
	});
	$('.js-item').mouseleave(function() {
		$('.js-parent').removeClass('is-active');
		$('.js-item').removeClass('is-active');
	});

});