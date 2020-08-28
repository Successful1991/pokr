import { gsap } from "gsap";


document.addEventListener('DOMContentLoaded',function () {
    animateMenu();
});



function animateMenu() {
    let list = $('.js-menu .menu__link');
    let tl = gsap.timeline({
        // delay: 1.2,
        defaults: { // children inherit these defaults
            duration: 1.5,
            ease: "power0",
        },
    });


    $('.js-burger').on('click', function () {
        if($('.burger__icon').hasClass('burger-close') ) {
            let o = 0;
        list.each( (i,el) => {
            o++;
            console.log(i);
            console.log(i%2);
            console.log(el);
            tl.delay(o/10);
            if(i%2 !== 0) {
              tl.fromTo(el, {yPercent:-1000,},{duration: 0.9, yPercent:0}, "-=1.4")
                // .fromTo(el, {yPercent:-500,},{ duration: 0.5, yPercent:0}, "-=1")
                .fromTo(el, {opacity: 0},{ duration: 0.2, opacity: 1}, "-=1.5")
                .fromTo(el, {xPercent: 80},{ duration: 0.5, xPercent: 10}, "-=1")
                .fromTo(el, {rotate: -90},{ duration: 0.4, rotate: 0}, "-=0.8")
                .fromTo(el, {xPercent: 10},{ duration: 0.3, xPercent: 0}, "-=0.5")
            } else {
                // tl.from(el, {
                //     xPercent:-40,
                //     yPercent:-1000,
                //     rotate: 90,
                // }, "-=0.85")
                tl.fromTo(el, {yPercent:-1000,},{duration: 0.9, yPercent:0}, "-=1.4")
                // .fromTo(el, {yPercent:-500,},{ duration: 0.5, yPercent:0}, "-=1")
                    .fromTo(el, {opacity: 0},{ duration: 0.2, opacity: 1}, "-=1.5")
                    .fromTo(el, {xPercent: -80},{ duration: 0.5, xPercent: -10}, "-=1")
                    .fromTo(el, {rotate: -90},{ duration: 0.4, rotate: 0}, "-=0.8")
                    .fromTo(el, {xPercent: -10},{ duration: 0.3, xPercent: 0}, "-=0.5")
            }

        })
        }
    });

}