window.onload = () => {
    const mySwiper = new Swiper ('.main-visual__content', {
        // Optional parameters
        // direction: 'vertical',
        loop: true,
        navigation: {
            nextEl: '.main-visual-control.next',
            prevEl: '.main-visual-control.prev',
          }
    })

    const gm_noteSwiper = new Swiper ('.gm-note-visual__content', {
        // Optional parameters
        // direction: 'vertical',
        loop: true,
        navigation: {
            nextEl: '.main-visual-control.next',
            prevEl: '.main-visual-control.prev',
          }
    })
}