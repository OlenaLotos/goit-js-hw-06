
const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');


    let counterValue = 0;
    
function onDecrementClick() {
    counterValue -= 1; 
    document.querySelector('#value').textContent = counterValue;
}
function onIncrementClick() {
    counterValue += 1;
     document.querySelector('#value').textContent = counterValue;
}


decrement.addEventListener('click', onDecrementClick);
increment.addEventListener('click', onIncrementClick);