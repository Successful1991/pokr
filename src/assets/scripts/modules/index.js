// import $ from 'jquery'
// import slick from 'slick-carousel'

function init() {
    // sliders init start
    $('.js-floor__filter').on('click','.floor__list',function(e){
        console.log(e);
        console.log(this);
    });
    $('.js-floor__filter').on('click', '.floor__list-el',function (e) {
       let section = this.data('section');
       let floor = this.data('floor');
    });


    $('.js-call').on('click touchstart', e => {
        e.preventDefault();
        $('.js-popup__forms').addClass('active');
        $('.js-popup__forms').find('.js-wb').addClass(['wb-show','wb-animate']);
    });
    $('.js-popup__forms-close').on('click', e => {
        $('.js-popup__forms').removeClass('active');
        $('.js-popup__forms').find('.js-wb').removeClass(['wb-show','wb-animate']);
    });


    $('.js-burger').on('click touchstart', e => {
       if( $('.js-menu').hasClass('menu-active')) {
           $('.header').removeClass('header-cursor-active');
           $('.burger__icon').removeClass('burger-close');
           $('.js-menu').removeClass('menu-active');

        } else {
           $('.header').addClass('header-cursor-active');
           $('.burger__icon').addClass('burger-close');
           $('.js-menu').addClass('menu-active');
       }
        // $('.js-menu').addClass('menu-active');
    });

    $('.js-close').on('click', e => {
        $('.js-menu').removeClass('menu-active');
    });
    $('.lang').on('touchstart', e => {
        $('.lang').addClass('active');
        $(document).on('touchstart', remove);

    });
    function remove(e) {
        if(!$(e.target).hasClass('lang-list__item')){
            $('.lang').removeClass('active');
            $(document).off('touchstart', remove);
        }

    }


     $(".js-form-tel").mask("(999)999-9999");

    const pathEnd = 'M3.5,87.5V3.5l110,17.37v66 Z';
    const pathStart = 'M3.5,87.5v-66L113.5,3.4V87.5 Z';
    $('.button-hover').on('mouseenter',hoverSvg);
    $('.button-hover').on('mouseleave',unhoverSvg);

    function hoverSvg() {
        let svg = Snap($(this).find('svg')[0]);
        let figure = svg.select('path');
        figure.animate({'d':pathEnd},1400,mina.bounce,function () {});

    }

    function unhoverSvg() {
        let svg = Snap($(this).find('svg')[0]);
        let figure = svg.select('path');
        figure.animate({'d':pathStart},1400,mina.bounce,function () {});

    }
}



document.addEventListener('DOMContentLoaded',function () {
    init();
});



