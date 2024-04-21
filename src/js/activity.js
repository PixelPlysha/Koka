import '/scss/activity.scss';

import { useTheme } from '../js/components/theme.js';
import { useBurger } from '../js/components/burger.js';
import { useUpdatesSlider } from './components/home/slider.js';
import { useArticlesSlider } from './components/home/slider.js';


useTheme();
useBurger();
useUpdatesSlider();
useArticlesSlider();
