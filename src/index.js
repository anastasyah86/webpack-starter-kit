import './styles.scss';

import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
// console.log(basicLightbox);
const openModal = document.querySelector('button[data-open-modal]');
const modalTemplate = document.querySelector('#modal');
const instance = basicLightbox.create(modalTemplate, {
  onShow: instance =>
    (instance.element().querySelector('button[data-close-modal]').onclick =
      instance.close),
});
instance.show();

openModal.addEventListener('click', instance.show());
