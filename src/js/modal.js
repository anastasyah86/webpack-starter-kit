import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

const openModal = document.querySelector('button[data-open-modal]');

const modalTemplate = document.querySelector('#modal');

const instance = basicLightbox.create(modalTemplate, {
  onShow: instance => {
    const closeM = instance.element().querySelector('button[data-close-modal]');
    // closeM.onclick = instance.close;
    closeM.addEventListener('click', instance.close);
    window.addEventListener('keydown', event => {
      if (event.code === 'Escape') {
        instance.close();
      }
    });
  },
  onClose(instance) {
    const closeM = instance.element().querySelector('button[data-close-modal]');
    closeM.removeEventListener('click', instance.close);
  },
});

openModal.addEventListener('click', instance.show);
