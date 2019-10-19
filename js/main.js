window.onload = () => {
    const mySwiper = new Swiper ('.main-visual__content', {
        // Optional parameters
        direction: 'vertical',
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }
    
        // If we need pagination
        // pagination: {
        //   el: '.swiper-pagination',
        // },
    
        // Navigation arrows
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        // },
    
        // And if we need scrollbar
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        // },
      })
}