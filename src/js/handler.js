import itemsTemp from '../templates/gallery-items.hbs';
import books from './books.json';
import '../sass/gallery.scss';
console.log(books);

const markup = itemsTemp(books);
console.log(markup);

const galleryRef = document.querySelector('.js-gallery');
galleryRef.insertAdjacentHTML('beforeend', markup);
