const input = document.querySelector('#validation-input');
const lengthInput = document.querySelector('[data-length]');
 

// console.log(input);
// // function onInputBlur() {
// //     const lengthInput = input.value.length;
// //     if (input.value.length = input.lengthInput) {
// //         input.style.valid;
// //     } else {
// //        input.style.invalid;
// //     };

// //     console.log(input.value.length);
// // }

input.addEventListener('blur', onInputBlur);
function onInputBlur() {
    
    if (input.value === lengthInput) {
        input.style.valid;
    } else {
        input.style.invalid;
    };
    console.log(input.value); 
     console.log(lengthInput); 
};


