const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
    event.preventDefault();
    
    const formElements = event.currentTarget.elements;

    console.dir(formElements);

    const mail = formElements.email.value;
    const password = formElements.password.value;
    console.log(mail, password);

      // const formData = new FormData(event.currentTarget);
    // console.log(formData);
    // formData.forEach((value, name) => {
    //     console.log(`${name}: ${value}`);
    // });
}

//reset form
//   const createButtonReset = () => {
//         return
//         `<button type="reset">Login</button>`;
//     };

//     form.insertAdjacentHTML('beforeend', createButtonReset());
// lдодати ресет і алерт