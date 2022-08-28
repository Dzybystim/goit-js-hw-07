import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const containerGalleryElement = document.querySelector('.gallery');


const arrayA = galleryItems.map((item) => {
    
    const aElement = document.createElement("a")
    aElement.href = item.original;
    aElement.classList.add("gallery__item");


   const imgElement = document.createElement("img")
   imgElement.classList.add("gallery__image")
   imgElement.src = item.preview;
   imgElement.alt = item.description;

   aElement.append(imgElement);

   return aElement;
   
})

containerGalleryElement.append(...arrayA);

let lightbox = new SimpleLightbox('.gallery a', {captionsData:"alt", captionDelay: 250});

