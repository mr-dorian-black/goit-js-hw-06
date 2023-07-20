const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const list = document.querySelector('#ingredients');
const items = (array) => array.forEach(elem => {
  let item = document.createElement('li');
  item.textContent = elem;
  item.className = 'item';
  list.append(item);
});

items(ingredients);