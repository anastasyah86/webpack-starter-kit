import Siema from 'siema';
const carus = new Siema();

const next = document.querySelector('.js-next');
const prev = document.querySelector('.js-prev');

prev.addEventListener('click', () => carus.prev());
next.addEventListener('click', () => carus.next());
