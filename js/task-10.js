const boxesRef = document.querySelector('#boxes');
const inputRef = document.querySelector('input');

let amount = inputRef.value;
const createBoxes = (amount) => {
const div = document.createElement('div');
div.style.width = '30px';
div.style.height = '30px';

boxesRef.append(div);
};
createBoxes(amount);

amount.forEach((num) =>
  createBoxes());

// function getRandomHexColor() {
//   return `#${Math
//     .floor(Math.random() * 16777215)
//     .toString(16)}`;
// }
