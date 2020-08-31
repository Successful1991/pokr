import { gsap } from "gsap";

document.addEventListener('DOMContentLoaded',function () {
    if($(window).width() > 1024){
        animateMenu();
    } else {
        $('.js-burger').on('click', function () {
            if( $('.js-menu').hasClass('js-menu-active')) {
                menuClose();
            } else {
                menuOpen();
            }
        })
    }
});


function animateMenu() {
    let listWrap = $('.js-menu .menu__list');
    let tl = {
        1: gsap.timeline(),
        2: gsap.timeline(),
        3: gsap.timeline()
    };

    listWrap.each( (i,elem) => {
        $(elem).find('.menu__link').each( (iu,el) => {
            tl[i+1].fromTo(el, {autoAlpha: 0},{ease: "expo.inOut", duration: 1, autoAlpha: 1} , "<0.2")
                .fromTo(el, {yPercent: 1000},{ease: "expo.out", duration: 1.5, yPercent: 0} , "<");
           tl[i+1].pause();
        });
    });

    $('.js-burger').on('click', function () {
            if( $('.js-menu').hasClass('js-menu-active')) {
                gsap.fromTo('.js-menu',{autoAlpha: 1},{autoAlpha: 0, duration: 0.4, ease: "expo.inOut"});
                $('.header').removeClass('header-cursor-active');
                $('.burger__icon').removeClass('burger-close');
                $('.js-menu').removeClass('js-menu-active');
                setTimeout(function () {
                    tl[1].pause();
                    tl[2].pause();
                    tl[3].pause();
                    tl[1].progress(0);
                    tl[2].progress(0);
                    tl[3].progress(0);
                },300);

            } else {
                let menu = gsap.timeline();
                menu.fromTo('.js-menu',{autoAlpha: 0},{autoAlpha: 1, duration: 1.5, ease: "expo.inOut"});
                menu.add(function () {
                    tl[1].play();
                    tl[2].play();
                    tl[3].play();
                    gsap.from('.menu__title',{autoAlpha: 0,duration: 1.5, ease: "expo.inOut"})
                },'<-=0.8');
                $('.header').addClass('header-cursor-active');
                $('.burger__icon').addClass('burger-close');
                $('.js-menu').addClass('js-menu-active');
            }
    });
}

function menuOpen() {
    $('.header').addClass('header-cursor-active');
    $('.burger__icon').addClass('burger-close');
    $('.js-menu').addClass(['js-menu-active','menu-active']);
}

function menuClose() {
    $('.header').removeClass('header-cursor-active');
    $('.burger__icon').removeClass('burger-close');
    $('.js-menu').removeClass(['js-menu-active','menu-active']);
}
