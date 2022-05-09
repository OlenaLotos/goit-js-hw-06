const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


// const listRef = document.querySelector('.gallery');
// console.log(listRef);

// const elements = images.map(image => {
//   const itemRef = document.createElement('li');
//   const imageRef = document.createElement('img');
//   imageRef.src = image.url;
//   imageRef.alt = image.alt;

//   itemRef.appendChild(imageRef);

//   console.log(itemRef);

//   return itemRef;
// });

// listRef.insertAdjacentHTML('afterbegin', 'itemRef')

const listRef = document.querySelector('.gallery');

listRef.insertAdjacentHTML('afterbegin', images
  .map(image => `<li><img src= ${image.url} alt = "${image.alt}" width = 100% height = 100% /> </li>`)
  .join(''));

listRef.style.display = 'flex';
listRef.style.listStyle = "none";
listRef.style.justifyContent = "space-between";
listRef.querySelector("li").style.marginRight = "10 px";
listRef.querySelector("img").style.height = "400 px";
listRef.querySelector("img").style.objectFit = "cover";
console.log(listRef);