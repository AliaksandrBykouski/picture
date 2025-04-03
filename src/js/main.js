import modals from './modules/modals';
import slider from './modules/slider';
import forms from './modules/forms';
import mask from './modules/mask';
import emailMask  from "./modules/emailMask";
import checkTextInputs from './modules/checkTextInputs';
import showMoreStyles  from "./modules/showMoreStyles";
import calc from './modules/calc';

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
});
