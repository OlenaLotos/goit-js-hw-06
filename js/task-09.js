const bodyRef = document.querySelector('body');
const buttonChangeColorRef = document.querySelector('.change-color');
const currentColorRef = document.querySelector('.color');


function getRandomHexColor() {
  return `#${Math
    .floor(Math.random() * 16777215)
    .toString(16)}`;
};

const ChangeColorRef = () => {
  bodyRef.style.backgroundColor = getRandomHexColor();
  currentColorRef.textContent = bodyRef.style.backgroundColor;
}

buttonChangeColorRef.addEventListener('click', ChangeColorRef)

