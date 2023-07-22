const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');

const creator = (array) => array.map(elem => {
  let item = document.createElement('li');
  item.textContent = elem;
  item.className = 'item';
  return item
});

list.append(...creator(ingredients));
