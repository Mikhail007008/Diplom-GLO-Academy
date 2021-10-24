'use strict';

import modal from './modules/modal';
import scrolling from './modules/scrolling';
import slider from './modules/slider';
import newCarousel from './modules/newCarousel';
import sendForm from './modules/sendForm';
import accordeonElements from './modules/accordeonElements';

//ScrollTo
scrolling();
//Slider
slider();
//Carousel
newCarousel();
//SendForm
sendForm();
//Modal callback
modal();
//Accordeon
accordeonElements();