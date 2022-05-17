const inputForm = document.querySelector('#validation-input');
const lengthInput = document.querySelector('input[data-length]');
 
inputForm.addEventListener('focus', onInputFocus);
inputForm.addEventListener('blur', onInputBlur);

function onInputFocus() { 
};

function onInputBlur(event) {
    
    if (event.currentTarget.value.length === (Number(lengthInput.dataset.length))) { 
       inputForm.classList.add('valid'); inputForm.classList.remove('invalid');
        
}
    else {
        inputForm.classList.remove('valid');
        inputForm.classList.add('invalid');
   }
    }
    


