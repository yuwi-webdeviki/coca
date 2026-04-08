import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

export const useHeroSlider = () => {
  const swiper = new Swiper('.hero__slider', {
    slidesPerView: 'auto',
    spaceBetween: 32,
  });

  const buttons = document.querySelectorAll('[data-filter]');
  const slides = document.querySelectorAll('[data-category]');

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      buttons.forEach((btn) => btn.classList.remove('hero__button--active'));
      btn.classList.add('hero__button--active');

      slides.forEach((slide) => {
        const categories = slide.dataset.category.split(' ');

        if (filter === 'all' || categories.includes(filter)) {
          slide.classList.remove('hero__slide--hidden');
        } else {
          slide.classList.add('hero__slide--hidden');
        }
      });
      swiper.update();
    });
  });
};

export const useArticlesSlider = () => {
  new Swiper('.articles__slider', {
    modules: [Navigation],
    slidesPerView: 'auto',
    spaceBetween: 32,

    navigation: {
      nextEl: '.articles__button--next',
      prevEl: '.articles__button--prev',
    },
  });
};
