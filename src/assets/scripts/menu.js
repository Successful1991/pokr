import { gsap } from "gsap";


document.addEventListener('DOMContentLoaded',function () {
    animateMenu();
    newsAnimate();
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
            if(i%2 !== 0) {
              tl.fromTo(el, {yPercent:-2000,},{delay: o*100, duration: 0.9, yPercent:0}, "-=1.4")
                // .fromTo(el, {yPercent:-500,},{ duration: 0.5, yPercent:0}, "-=1")
                .fromTo(el, {opacity: 0},{delay: o*100, duration: 0.2, opacity: 1}, "-=1.5")
                .fromTo(el, {xPercent: 80},{delay: o*100, duration: 0.5, xPercent: 10}, "-=1")
                .fromTo(el, {rotate: -90},{delay: o*100, duration: 0.4, rotate: 0}, "-=0.8")
                .fromTo(el, {xPercent: 10},{delay: o*100, duration: 0.3, xPercent: 0}, "-=0.5")
            } else {
                // tl.from(el, {
                //     xPercent:-40,
                //     yPercent:-1000,
                //     rotate: 90,
                // }, "-=0.85")
                tl.fromTo(el, {yPercent:-2000,},{ delay: o*100, duration: 0.9, yPercent:0}, "-=1.4")
                // .fromTo(el, {yPercent:-500,},{ duration: 0.5, yPercent:0}, "-=1")
                    .fromTo(el, {opacity: 0},{ delay: o*100, duration: 0.2, opacity: 1}, "-=1.5")
                    .fromTo(el, {xPercent: -80},{ delay: o*100, duration: 0.5, xPercent: -10}, "-=1")
                    .fromTo(el, {rotate: -90},{ delay: o*100, duration: 0.4, rotate: 0}, "-=0.8")
                    .fromTo(el, {xPercent: -10},{ delay: o*100, duration: 0.3, xPercent: 0}, "-=0.5")
            }

        })
        }
    });

}

function newsAnimate() {
    console.log(gsap);
    let tl = gsap.timeline({
        defaults: { // children inherit these defaults
            duration: 4,
            ease: "power0",
        },
    });
    tl.addLabel("news", 0);
    tl.addLabel("newsel", 2);
    tl.fromTo('.news__content',{scale: 0.3, opacity: 0},{transformOrigin:"50% 25%", scale: 0.5, opacity: 1, duration: 0.3},"news")
        .fromTo('.news__content',{scale: 0.3},{scale: 1, delay: 4.5, duration: 0.3}, '>');

let cor =
    [[100,100],[0, 100],[-100,100],
    [100,0],[0,0],[-100,0],
    [100,-100], [0,-100],[-100,-100]];
// let cor =
//     [[-100,-100],[0, -100],[100,-100],
//     [-100,0],[0,0],[100,0],
//     [-100,100], [0,100],[100,100]];

    $('.js-news__el').each((i,el) => {
        // fromTo(el,{xPercent: cor[i][0], yPercent: cor[i][1]},{xPercent: cor[i][0], yPercent: cor[i][1], duration: 1})
        let index = 0.6+((i+1)/10);
        tl.fromTo(el,{xPercent: cor[i][0], yPercent: cor[i][1]},{xPercent:0, yPercent:0, duration: 0.4} ,"news+="+index)
    })


}