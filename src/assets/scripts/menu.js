import { gsap } from "gsap";



document.addEventListener('DOMContentLoaded',function () {
    if($(window).width() > 1024){
        animateMenu();
        newsAnimate();
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

function newsAnimate() {
    gsap.set(".news__content", {scale: 0.3});
    gsap.set($(".js-news__el")[4], {scale: 1.4, zIndex: 10});
    gsap.fromTo('.news__content',0.3,{autoAlpha: 0},{ autoAlpha: 1});
    let tlNews = gsap.timeline({onComplete: args => {
            gsap.to($(".js-news__el")[4],{scale: 1, duration: 0.4});
            gsap.to('.news__content',0.4, { delay: 0.45, scale: 1,transformOrigin:"50% top"});
        },
        delay: 0.4
    });

    const wrap = $('.news__content')[0];
    let heightCentr = wrap.offsetHeight /2;
    let widthCentr = wrap.offsetWidth /2;

    $('.js-news__el').each((i,el) => {
        if(i !== 4) {
            let x = (((widthCentr - el.offsetWidth / 2 ) - el.offsetLeft ) / el.offsetWidth ) * 100;
            let y = (((heightCentr - el.offsetHeight / 2 ) - el.offsetTop ) / el.offsetHeight ) * 100;
            tlNews.fromTo(el,0.4,{xPercent: x, yPercent: y},{xPercent:0, yPercent:0}, "-=0.2");
        }

    });


}