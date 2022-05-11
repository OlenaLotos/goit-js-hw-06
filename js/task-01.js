
const itemRef = document.querySelectorAll('.item');
console.log("Number of categories:" + itemRef.length);

itemRef.forEach(item => {
  console.log("Category: " + item.firstElementChild.textContent);
console.log("Elements:" + item.lastElementChild.children.length)}
  
);




// const catRef = document.querySelectorAll('h2');

// console.log(catRef);

// for (const cat of catRef) {
//     console.log("Category:", cat.textContent);
    
// }


