const swiperText = new Swiper('.swiper',{
    speed: 1300,
    pagination:{
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
    }
})