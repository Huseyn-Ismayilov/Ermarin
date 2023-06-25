$(document).ready(function () {
	var lastScroll = 0;

	jQuery(document).ready(function ($) {
		$(window).scroll(function () {
			setTimeout(function () {
				var scroll = $(window).scrollTop();
				if (scroll > lastScroll) {
					$(".site_header").addClass("scroll_down");
				} else if (scroll < lastScroll) {
					$(".site_header").removeClass("scroll_down");
				}
				lastScroll = scroll;
			}, 100);
		});
	});
});

// end

$('.site_header .toggle, .mobile_menu .close_btn').click(function () {
	$('.mobile_menu').toggleClass('opened');
	$('.nav_menu').toggleClass('opened');
	$('.site_header .toggle').toggleClass('opened')
});

$('.mobile_menu .menu .dropdown .nav_link').click(function (e) {
	$(this).next().toggleClass('opened');
	return false;
});
$('.mobile_menu .menu .back_btn').click(function (e) {
	$(this).parent().removeClass('opened');
});

// end


// end
if ($(window).width() < 991) {
	$(document).click(function (event) {
		if (!$(event.target).closest(".site_header .toggle, .mobile_menu .inner").length) {
			$("body").find(".mobile_menu .inner").parent().removeClass("opened");
			$('.site_header .toggle').removeClass('opened');
		}
	});
}

if ($(window).width() < 991) {
	$('.site_footer .menu .title').click(function () {
		$(this).parent().find('ul').slideToggle()
		$(this).toggleClass('opened');
		return false;
	});
}




// var hero_slider = new Swiper(".hero .slider", {
// 	slidesPerView: 1,

// 	// navigation: {
// 	// 	nextEl: '.next_arrow ',
// 	// 	prevEl: '.prev_arrow'
// 	// },
// 	pagination: {
// 		el: ".swiper-pagination",
// 	},
// });


var hero = new Swiper(".hero .slider", {
	pagination: {
		el: ".swiper-pagination",
		type: "progressbar",
	},
	navigation: {
		nextEl: ".next_arrow",
		prevEl: ".prev_arrow",
	},
});

var infinite_slider = new Swiper(".infinite_slider .slider", {
	loop: true,
	spaceBetween: 10,
	speed: 3000,
	slidesPerView: 'auto',
	autoplay: {
		delay: 0,
		disableOnInteraction: false,
		reverseDirection: true,
	},
});






var slider_nav = new Swiper(".services .slider_nav", {
	slidesPerView: 5,
	spaceBetween: 24,
	freeMode: true,
	slidesPerView: 'auto',
	watchSlidesProgress: true,
});

var slider_main = new Swiper(".services .slider_main", {
	spaceBetween: 10,
	slidesPerView: 1,
	centeredSlides: true,
	loop: true,
	roundLengths: true,
	loopAdditionalSlides: 30,

	breakpoints: {
		// 640: {
		// 	slidesPerView: 2,
		// 	spaceBetween: 20,
		// },
		// 768: {
		// 	slidesPerView: 4,
		// 	spaceBetween: 40,
		// },
		1024: {
			spaceBetween: 10,
			slidesPerView: 1.7,
		},
	},
	navigation: {
		nextEl: ".services .next_arrow ",
		prevEl: ".services .prev_arrow",
	},
	pagination: {
		el: ".swiper-pagination",
		type: "progressbar",
	},
	thumbs: {
		swiper: slider_nav,
	},
});



var projects = new Swiper(".projects .slider", {
	slidesPerView: 1,
	spaceBetween: 4,
	navigation: {
		nextEl: ".projects .next_arrow ",
		prevEl: ".projects .prev_arrow",
	},
	pagination: {
		el: ".projects .swiper-pagination",
		type: "progressbar",
	},
});


var blog_slider = new Swiper(".blog_slider .slider", {
	freeMode: true,
	slidesPerView: 'auto',
	spaceBetween: 16,
	// breakpoints: {
	// 	"@0.00": {
	// 		slidesPerView: 1,
	// 	},
	// 	"@0.75": {
	// 		slidesPerView: 2,
	// 	},
	// 	// "@1.00": {
	// 	// 	slidesPerView: 3,
	// 	// },
	// 	"@1.50": {
	// 		slidesPerView: 2.5,
	// 	},
	// },
	navigation: {
		nextEl: ".blog_slider .next_arrow ",
		prevEl: ".blog_slider .prev_arrow",
	},
});


var blog_slider = new Swiper(".site_footer .contact_info_slider", {
	freeMode: true,
	slidesPerView: 'auto',
	spaceBetween: 50,
	navigation: {
		nextEl: ".contact_info_slider .next_arrow ",
		prevEl: ".contact_info_slider .prev_arrow",
	},
});


$(function () {

	var embed = $('.youtube');
	$('.video').append(embed);

	$('.pop_open').click(function () {
		$('.gray_mask').fadeIn(200);
		$('#popup').fadeIn(300);
		$('.video').append(embed);
	});

	$('.gray_mask, .pop_close').click(function () {
		$('#popup').hide();
		$('.gray_mask').hide();
		$('.video').empty();
	});

	$('.gray_mask, .pop_close').click(function () {
		$('#popup').hide();
		$('.gray_mask').hide();
		$('.video').empty();
	});

});