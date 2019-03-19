$(window).on('load scroll', function(){
    const bottomPosition = $(this).scrollTop() + $(this).height();
    $('.animated').each(function(){
        const elementPosition = $(this).offset().top;
        if (bottomPosition > elementPosition) {
            $(this).addClass('fadeInUp');
        }
    });
});