const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Herbs',
];


const listEl = document.querySelector("#ingredients");

const elements = ingredients.map((ingredient) => {
  const itemsEl = document.createElement("li");
  itemsEl.classList.add("item");
  itemsEl.textContent = ingredient;

  return itemsEl;
});
// console.log(elements)

listEl.append(...elements);

console.log(listEl);









