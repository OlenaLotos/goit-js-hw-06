// 3 варіант
const input = document.querySelector('#name-input');
const nameText = document.querySelector('#name-output');

const onInputChange = (event) => {
    console.log(event.currentTarget.value);
    if (event.currentTarget.value === '') {
        nameText.textContent = 'Anonymous';
    } else {
        nameText.textContent = event.currentTarget.value;
    };
};
input.addEventListener('input', onInputChange);


// 2 варіант тернарник
// const input = document.querySelector('#name-input');
// const nameText = document.querySelector('#name-output');

// const onInputChange = (event) => {
//     console.log(event.currentTarget.value);
//     event.currentTarget.value === `` ? (nameText.textContent = `Anonymous` : (nameText.textContent = event.currentTarget.value);
//   };
// input.addEventListener('input', onInputChange);



// 1 варіант
// const input = document.querySelector('input');
// const nameText = document.querySelector('#name-output');


// input.addEventListener('input', onInputChange);

// function onInputChange(event) {
//     console.log(event.currentTarget.value);
//     nameText.textContent = event.currentTarget.value;
// }
// console.log(nameText);