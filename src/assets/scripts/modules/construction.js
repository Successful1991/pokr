(function () {
    $('.construction__filter').on('click', '.js-select__items label', function (e) {
        $('.select-bg').click();
    });

    $('.js-construction').on('click', '.js-card__button',function (e) {
        $('.js-popup__date-text').html($(this).closest('.js-pagination__card').find('.js-card__date-text').html());
        getListImage(this.dataset.id);


        $('.js-popup__date-text').html($(this).closest('.js-pagination__card').find('.js-card__date-text').html());
        sliderInit();
        $('.js-popup').addClass('popup__active');
    });

    $('.js-popup__close').on('click', function () {
        $('.js-popup').removeClass('popup__active');
        setTimeout(function () {
            $('.js-popup__slider')[0].slick.unslick();
        },500);

    });

    function getListImage(id) {
        $.ajax({
            method: 'POST',
            url: '/wp-admin/admin-ajax.php',
            data: "action=construction&id="+id
        }).done(function (response) {
            setInfoPopup(response);
        })
    }
    function sliderInit() {
        $('.js-popup__slider').slick({
            prevArrow: $('.js-popup__left'),
            nextArrow: $('.js-popup__right'),
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            variableWidth: true,
            setPosition: 1
        });
    }


    function setInfoPopup(data) {
        $('#construction__container').append(data);

        sliderInit();
        $('.js-popup').addClass('popup__active');
    }


})();