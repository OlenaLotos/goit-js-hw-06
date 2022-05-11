
const itemRef = document.querySelectorAll('.item');
console.log("Number of categories:" + itemRef.length);

const catRef = document.querySelectorAll('h2');

console.log(catRef);

for (const cat of catRef) {
    console.log("Category:", cat.textContent);
    
}
const elementsRef = document.querySelectorAll('li >h2 > ul');
console.log(elementsRef);
for (const el of elementsRef) {
   
  console.log("Elements:" + el.length);  
}


// const itemsRef = item[0].querySelectorAll('li');

// console.log(itemsRef);

