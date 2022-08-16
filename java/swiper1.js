new Swiper('.image-slider',{
    observer: true,
    observerParents: true,
    observesSlideChildren: true,
    autoHeight: true,
    navigation: {
        nextE1: '.swiper-button-next',
        prevE1: '.swiper-button-prev'
    },
    scrollbar:{
        el: '.swiper-scrollbar',
        draggable: true,
        hide: true,
    },
    pagination: {
        el: '.swiper-pagination',

        clickable: true,
    },
    mousewheel: {
        sensitivity: 1, 
        eventTarget: ".image-slider"
    },
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 5000,
        disaleOnInteraction: true,
    },
    speed: 800,
    slidesPerView: 'auto',
    
    
});