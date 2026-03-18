// MAIN SLIDER (Fade Effect)
const mainSwiper = new Swiper(".mainSwiper", {
    effect: "fade",
    speed: 1000,
    allowTouchMove: false,
    loop: false
});


const thumbSwiper = new Swiper(".mySwiper", {
    centeredSlides: true,
    slidesPerView: 2,
    spaceBetween: 20,
    slideToClickedSlide: true,
    speed: 1000,
    loop: false,
    breakpoints: {
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 5, spaceBetween: 30 }
    },
   
    mousewheel: {
        forceToAxis: true,
    }
});


mainSwiper.controller.control = thumbSwiper;
thumbSwiper.controller.control = mainSwiper;


let reverse = false; 
const slideCount = thumbSwiper.slides.length;

setInterval(() => {
    let currentIndex = thumbSwiper.activeIndex;

    if (!reverse) {
        // Forward direction
        if (currentIndex === slideCount - 1) {
            reverse = true; 
            thumbSwiper.slidePrev();
        } else {
            thumbSwiper.slideNext();
        }
    } else {
        // Reverse direction
        if (currentIndex === 0) {
            reverse = false; 
            thumbSwiper.slideNext();
        } else {
            thumbSwiper.slidePrev();
        }
    }
}, 3000); 
