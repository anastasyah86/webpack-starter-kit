import './styles.scss';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

const openModal = document.querySelector('button[data-open-modal]');
openModal.addEventListener('click', instance.show());

const modalTemplate = document.querySelector('#modal');
const instance = basicLightbox.create(modalTemplate, {
  onShow: instance => {
    const close = instance.element().querySelector('button[data-close-modal]');
    close.onclick = instance.close;
  },
});
// instance.show();
