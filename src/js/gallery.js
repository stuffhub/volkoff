const sliderViewport = $('.slider__wrapper'),
    slides = sliderViewport.children(),
    slidesLength = slides.length;
let slideCounter = 0;

$(window).on('load resize', function () {
    setSlidesAttr();
    sliderViewport.outerWidth(getFullWidthSlider());
    transformViewport(transformViewportRefresh());
});

$(document).on('click', '.arrow__next', nextSlide);
$(document).on('click', '.arrow__prev', prevSlide);

function nextSlide () {
    if (slideCounter !== slidesLength-1) {
        slideCounter++;
        transformViewport($(slides[slideCounter]).position().left);
    } else if (slideCounter !== slidesLength) {
        slideCounter = 0;
        transformViewport($(slides[slideCounter]).position().left);
    }
};

function prevSlide () {
    if (slideCounter !== 0) {
        slideCounter--
        transformViewport($(slides[slideCounter]).position().left);
    } else if (slideCounter === 0) {
        slideCounter = slidesLength - 1;
        transformViewport($(slides[slideCounter]).position().left);
    }
};

function transformViewportRefresh() {
    if (slideCounter !== 0){
        return $(slides[slideCounter]).position().left;
    }
};

function transformViewport(value) {
    sliderViewport.css({
        '-webkit-transform': 'translateX(-' + value + 'px)',
        '-moz-transform': 'translateX(-' + value + 'px)',
        '-ms-transform': 'translateX(-' + value + 'px)',
        '-o-transform': 'translateX(-' + value + 'px)',
        'transform': 'translateX(-' + value + 'px)'
    });
};

function setSlidesAttr (context) {
    slides.each(function(index){
        $(this).outerWidth($(window).outerWidth());
        $(this).attr('data-key', index);
    })
};

function getFullWidthSlider() {
    let result = 0;
    slides.each(function () {
        result += $(this).outerWidth();
    });
    return result;
};