let swiperCards = new Swiper('.card-content', {
  loop: true,
  spaceBetween: 32,
  grabCursor: true,

  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    828: {
      slidesPerView: 2,
    },
    1140: {
      slidesPerView: 3,
    },

  },
});
