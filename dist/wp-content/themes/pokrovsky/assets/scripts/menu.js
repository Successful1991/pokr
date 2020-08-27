import { gsap } from "gsap";


document.addEventListener('DOMContentLoaded',function () {
    animateMenu();
});



function animateMenu() {
    let list = $('.js-menu .menu__link');
    let tl = gsap.timeline({
        delay: 0.2,
        paused: true, // default is false
        defaults: { // children inherit these defaults
            duration: 1,
            ease: "none"
        },
        smoothChildTiming: true,
    });


    $('.js-burger').on('click', function () {
        list.forEach( (el, i) => {
            console.log(i);
            console.log(i%2);
            console.log(el);
            if(i%2 !== 0) {
                tl.from(el, {
                    top: -70,
                    xPercent:-50,
                    yPercent:-150
                })
            } else {
                tl.from(el, {
                    xPercent:-50,
                    yPercent:-150
                })
            }

        })
    });

}