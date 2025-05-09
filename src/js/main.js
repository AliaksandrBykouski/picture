import modals from './modules/modals';
import slider from './modules/slider';
import forms from './modules/forms';
import mask from './modules/mask';
import emailMask  from "./modules/emailMask";
import checkTextInputs from './modules/checkTextInputs';
import showMoreStyles  from "./modules/showMoreStyles";
import calc from './modules/calc';
import filter from './modules/filtr';
import pictureSize from './modules/pictureSize';
import accordion from './modules/accordion';
import hamburger from "./modules/hamberger";
import scrolling from './modules/scroll';
import drop from "./modules/drop";

window.addEventListener('DOMContentLoaded', () => {
    "use strict";

    modals();
    slider('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
    slider('.main-slider-item', 'vertical');
    forms();
    mask('[name="phone"]');
    checkTextInputs('[name ="name"]');
    checkTextInputs('[name ="message"]');
    emailMask('[name="email"]');
    showMoreStyles('.button-styles', '#styles .row');
    calc('#size', '#material', '#options', '.promocode', '.calc-price');
    filter();
    pictureSize('.sizes-block');
    accordion('.accordion-heading');
    hamburger('.burger-menu', '.burger');
    scrolling('.pageup');
    drop();
});
