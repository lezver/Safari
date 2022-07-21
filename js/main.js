$(function(){
    $('.popup__link').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
    });
    $('.gallery__slider').slick({
        infinite: false,
        prevArrow:'<button type="button" class="slick-btn slick-prev"><img src="images/arrowL.svg" alt="svg"></button>',
        nextArrow:'<button type="button" class="slick-btn slick-next"><img src="images/arrowR.svg" alt="svg"></button>'
    });
    $('.gallery__foto').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		}
	});
	$('.menu__btn').on('click',function(){
		$('.menu__list').toggleClass('menu__list-active');
	});
});