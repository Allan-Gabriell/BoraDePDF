import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

const swiper = new Swiper(".swiper", {
  loop: 'true',
  slidesPerView: 3,
  spaceBetween: 30,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 2,
    },

    520:{
      slidesPerView: 3,
    },

    950:{
      slidesPerView: 4,
    },
  }
});