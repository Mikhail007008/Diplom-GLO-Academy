'use strict';

import comeModal from './modules/modal';
import scrolling from './modules/scrollTo';
import slider from './modules/slider';
import newCarousel from './modules/carousel';
import sendForm from './modules/sendForm';

//ScrollTo
scrolling();
//Slider
slider();
//Carousel
newCarousel();
//SendForm
sendForm();
//Modal callback
comeModal();