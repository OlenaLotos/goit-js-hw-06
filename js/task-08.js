const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
    
  const formElements = event.currentTarget.elements;

  // console.dir(formElements);

  const mail = formElements.email.value;
  const password = formElements.password.value;
  
  if (mail === "" || password === "") {
    return alert("Введіть всі дані");
  };
  console.log({ mail, password});
     event.currentTarget.reset();
};


  





  

