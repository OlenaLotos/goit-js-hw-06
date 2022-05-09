const input = document.querySelector('input');
const nameText = document.querySelector('#name-output');


input.addEventListener('input', onInputChange);

function onInputChange(event) {
    console.log(event.currentTarget.value);
    nameText.textContent = event.currentTarget.value;
}
console.log(nameText);