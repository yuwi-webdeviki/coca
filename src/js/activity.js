import '/scss/activity.scss';

// components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import {
  useHeroSlider,
  useArticlesSlider,
} from './components/activity/slider.js';

document.addEventListener('DOMContentLoaded', () => {
  useTheme();
  useBurger();
  useHeroSlider();
  useArticlesSlider();
});
