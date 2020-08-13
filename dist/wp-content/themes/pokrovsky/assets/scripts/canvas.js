(function () {


    // let svg = Snap('#svg');
    // console.log(svg);
    // svg.attr({fill: '#000000'}) ;
    // let f4 = svg.filter('<feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />' +
    //     '<feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 15 -8" result="goo" />' +
    //     '<feComposite in="SourceGraphic" in2="goo" operator="atop"/>');
    // let f = svg.filter('url(#goo)');
    // // let f4 = svg.filter(Snap.filter.blur(12, 12));
    //
    // let bigCircle = svg.circle(1200, 100, 600);
    // let g = svg.gradient("r(0.5, 0.5, 0.5)rgba(80,202,205,1)-rgba(80,202,205,0.6)-rgba(80,202,205,0.3)-rgba(80,202,205,0)");
    // bigCircle.attr({fill:g,filter: f});
    //
    // let bigCircle2 = svg.circle(300, 500, 400);
    // let g2 = svg.gradient("r(0.5, 0.5, 0.5)rgba(41,80,113,1):30-rgba(41,80,113,0.7):70-rgba(41,80,113,0.4)-rgba(41,80,113,0)");
    // bigCircle2.attr({fill:g2,filter: f});
    //
    // let bigCircle3 = svg.circle(300, 0, 300);
    // let g3 = svg.gradient("r(0.5, 0.5, 0.5)rgba(166,96,71,1):30-rgba(170,110,85,0.7)-rgba(175,135,103,0.4)-rgba(185,169,134,0)");
    // bigCircle3.attr({fill:g3,filter: f4});
    // bigCircle3.animate({x:0,y:1200},2000,function () {
    //
    // });
    // let bigCircle4 = svg.circle(600, 500, 600);
    // let g4 = svg.gradient("r(0.2, 0.2, 0.3)rgba(166,96,71,1):30-rgba(170,110,85,0.7)-rgba(175,135,103,0.4)-rgba(185,169,134,0)");

    // bigCircle4.attr({fill:g4,filter: f4});



    // let mouse = $('#mouse');
    // $('#svg').on('mousemove',function (e) {
    //     console.log(e.clientX);
    //     mouse[0].setAttribute('cx', e.clientX+'px');
    //     mouse[0].setAttribute('cy', e.clientY-50+'px');
    // })
    let svg = Snap('#svg-bg');
    let figure = svg.path("M3.5 206.5L3.5 45.6431L266.5 4.09631V206.5L3.5 206.5Z");
    figure.attr({
        fill:"#2F5677" ,
        fillOpacity:"0.95" ,
        stroke:"#61AFAA",
        strokeWidth:"7"
    });
    svg.hover(function () {
        console.log('in');
        figure.animate({path:'M3.5 206.5 L3.5 45.6431 L266.5 4.09631 V206.5 L3.5 206.5Z'},'3000',mina.easeout)
    },function () {
        console.log('out');
        // figure.animate({path:'M3.5 206.5 L3.5 45.6431 L266.5 4.09631 V206.5 L3.5 206.5Z'},'1000',mina.easeout)
    })
    // svg.append(figure);
    //path( d="M3.5 206.5L3.5 45.6431L266.5 4.09631V206.5L3.5 206.5Z" fill="#2F5677" fill-opacity="0.95" stroke="#61AFAA" stroke-width="7")
    //
})();
