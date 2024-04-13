import '/scss/about.scss';

import { useTheme } from '../js/components/theme.js';
import { useBurger } from '../js/components/burger.js';
import { useAttentionSlider } from './components/home/slider.js';
import { useTeamSlider } from './components/home/slider.js';

useTheme();
useBurger();
useAttentionSlider();
useTeamSlider();
