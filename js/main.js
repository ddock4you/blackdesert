window.onload = () => {
    const mainSlide = $('.main-visual__slide');
    console.log(mainSlide);
    const mySwiper = new Swiper ('.main-visual__content', {
        speed:1000,
        loop: true,
        // autoplay: {
        //     delay:3000
        // },
        navigation: {
            nextEl: '.main-visual-control.next',
            prevEl: '.main-visual-control.prev',
        }   
    })
    mySwiper.on('slideChangeTransitionEnd', () => {
        let num = mySwiper.activeIndex;
        mainSlide.removeClass('animated');
        mainSlide.eq(num).addClass('animated');
    });


    const gm_noteSwiper = new Swiper ('.gm-note-visual__content', {
        // Optional parameters
        // direction: 'vertical',
        loop: true
    })

    const sidemenuSwiper = new Swiper ('.side-menu-visual__content', {
        // Optional parameters
        // direction: 'vertical',
        loop: true
    })
}