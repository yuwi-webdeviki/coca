import Swiper from 'swiper';
import 'swiper/css';

export const useHeroSlider = () => {
  new Swiper('.hero__slider', {
    slidesPerView: 'auto',
    spaceBetween: 32,
  });
};

export const useTeamSlider = () => {
  new Swiper('.team__slider', {
    slidesPerView: 2,
    spaceBetween: 32,
    breakpoints: {
      992: {
        slidesPerView: 3,
      },
    },
  });
};
