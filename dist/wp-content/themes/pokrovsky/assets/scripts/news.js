
(function () {
    // console.log('news');
    // const heightWrap = $('.others__wrap').height();
    // let heightContent = $('.others__wrap')[0].scrollHeight;
    // const heightToddler = heightWrap/(heightContent/100);
    // console.log(heightWrap);
    // console.log(heightContent);
    // console.log($('.others__wrap'));
    // console.log($('.others__wrap')[0].scrollHeight);
    // $('.js-scroll__toddler').css({'height':heightToddler+'%'});
    // $('.others__wrap').on('scroll', function (e) {
    //     // console.log('scroll',e);
    //     const top = $('.others__wrap')[0].scrollTop / ( (heightContent + heightWrap) /100);
    //     $('.js-scroll__toddler').css({'height':heightToddler+'%','top': top+'%'});
    //     console.log(top);
    // })
    $(window).on('beforeunload', function(){
        $(document).scrollTop(0);
    });

    initScroll();
})();

function initScroll() {
    // let heightWrap = $('.others__wrap').height();
    // let heightContent = $('.others__wrap')[0].scrollHeight;
    // let heightToddler = heightWrap/(heightContent/100);
    let param = updateParamScroll();
    // console.log(heightContent);
    $('.js-scroll__toddler').css({'height': param.heightToddler +'%'});

    window.addEventListener('load', () => {
        param = updateParamScroll();
        console.log('load', param);
        $('.js-scroll__toddler').css({'height': param.heightToddler +'%'});
    });

    window.addEventListener('resize', ()=> {
        param = updateParamScroll();
        console.log('resize',param);
        $('.js-scroll__toddler').css({'height': param.heightToddler +'%'});
    });
    $('.others__wrap').on('scroll', () => {scroll(param) });
}

function scroll(param) {
    const top = $('.others__wrap')[0].scrollTop / ( (param.heightContent - param.heightWrap) / (100 - param.heightToddler)) ^ 0;
    $('.js-scroll__toddler').css({'height':param.heightToddler+'%','top': top+'%'});
    // console.log(top);
}

function updateParamScroll() {
    const heightWrap = $('.others__wrap')[0].offsetHeight;
    const heightContent = $('.others__wrap')[0].scrollHeight;
    return new Object({
        heightWrap : heightWrap,
        heightContent : heightContent,
        heightToddler : heightWrap/(heightContent /100)
    })
}