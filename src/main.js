import Swiper, { Navigation } from 'swiper';
import './css/fonts.css';
import './css/index.css';
import './scss/styles.scss';

Swiper.use([Navigation]);

const swiper = new Swiper('.swiper', {
  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    640: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 5,
    },
  },
  slidesPerView: 4,
  spaceBetween: 16,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

swiper.init();
