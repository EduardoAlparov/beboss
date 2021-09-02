const swiper = new Swiper('.swiper', {
  // Default parameters
  loop: true,
  speed: 1000,
  observer: true,
  autoHeight: true,
  centerInsufficientSlides: false,
  slidesPerView: 1,
  // spaceBetween: 16,
  // slidesPerView: 'auto',
  
  // Responsive breakpoints
  breakpoints: {
    410:{
      slidesPerView: 1.2,
    },
    580: {
      slidesPerView: 1.5,
    },
    680: {
      slidesPerView: 2,
      spaceBetween: 24,
    },

    1119: {
      slidesPerView: 3,
      spaceBetween: 32
    }
  }
})
