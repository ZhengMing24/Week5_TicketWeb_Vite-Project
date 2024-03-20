import Swiper from 'https://esm.sh/swiper@10/swiper-bundle.min.js';
import 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js';
// import 'https://unpkg.com/aos@2.3.1/dist/aos.js';

const swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    allowTouchMove: false,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    loop: true,
    speed: 4000
  });

  const swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: "auto",
    allowTouchMove: false,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    loop: true,
    speed: 10000
  });

  const swiper3 = new Swiper(".mySwiper3", {
    slidesPerView: "auto",
    allowTouchMove: true,
    autoplay: {
      delay: 500,
      disableOnInteraction: false,
    },
    loop: true,
    speed: 2000
  });

  const swiper4 = new Swiper(".mySwiper4", {
    slidesPerView: "auto",
    allowTouchMove: false,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    loop: true,
    speed: 4000
  });