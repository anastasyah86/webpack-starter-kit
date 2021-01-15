const tech = ['html', 'css', 'js', 'react'];
const galleryRef = document.querySelector('.js-gallery');
const element = '<li><a href="">Hola</a></li>';

const markup = tech.map(el => `<li><a href=""> ${el} </a></li>`).join('');
console.log(markup);
galleryRef.insertAdjacentHTML('afterbegin', markup);
