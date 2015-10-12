$(document).ready(function() {

	$('.js-logo').click(function() {
		$('.js-loc-btn').removeClass('is-active');
		$('.js-location').removeClass('is-active');
		$('.js-weapon-btn').removeClass('is-active');
		$('.js-weapon').removeClass('is-active');
		return false;
	});

	$('.js-loc-btn').click(function() {
		$('.js-loc-btn').addClass('is-active');
		$('.js-location').addClass('is-active is-index');
		$('.js-weapon').removeClass('is-index');
		$('.js-weapon-btn').removeClass('is-active');
		setTimeout(function() {
			$('.js-weapon').removeClass('is-active');
		}, 700);
	});

	$('.js-weapon-btn').click(function() {
		$('.js-weapon-btn').addClass('is-active');
		$('.js-weapon').addClass('is-active is-index');
		$('.js-location').removeClass('is-index');
		$('.js-loc-btn').removeClass('is-active');
		setTimeout(function() {
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