import $ from "jquery";
import formstyler from './lib/jquery.formstyler.js';
import Swiper from './lib/swiper.js';

window.jQuery = $;
window.$ = $;

require('@fancyapps/fancybox');

$(function() {

    // Стилизация элементов
    $('.select-style').styler();

    /* - - - Подключение fancybox - - - */
    $('[data-fancybox]').fancybox({
        buttons: [
            "zoom",
            //"share",
            "slideShow",
            "fullScreen",
            //"download",
            //"thumbs",
            "close"
        ],
        modal: true,
    });

    // Раскрытие | Скрытие меню
    $('.menu-top-btn').on('click', function(){

        $('.menu-top').addClass('menu-top_active');
    });

    $('.menu-top__close').on('click', function(){

        $('.menu-top').removeClass('menu-top_active');
    });

    $(document).on('mouseup', function (e){

		if (!$(".menu-top").is(e.target) && $(".menu-top").has(e.target).length === 0)
        {
			$('.menu-top').removeClass('menu-top_active');
		}
	});

    new Swiper('.product-slider', {
        spaceBetween: 30,
        navigation: {
            nextEl: '.product-slider__next',
            disabledClass: 'product-slider__str_disabled'
        },
    });
});