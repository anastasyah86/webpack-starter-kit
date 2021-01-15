import itemsTemp from '../templates/gallery-items.hbs';
console.log(itemsTemp);
const markup = itemsTemp({ items: ['html', 'css', 'js', 'react'] });
console.log(markup);
