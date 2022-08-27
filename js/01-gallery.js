import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);



const containerGalleryElement = document.querySelector('.gallery');


const arrayA = galleryItems.map((item) => {
    
    const aElement = document.createElement("a")
    aElement.href = item.original;
    aElement.classList.add("gallery__link");


   const imgElement = document.createElement("img")
   imgElement.classList.add("gallery__image")
   imgElement.src = item.preview;
   imgElement.dataset.source =  aElement.href;
   imgElement.alt = item.description;

   aElement.append(imgElement);

   return aElement;
   
})

containerGalleryElement.append(...arrayA);



function modalImg (event) {
event.preventDefault();

    if (event.target.nodeName !== "IMG") {
        return
    }

const instance = basicLightbox.create(`<img src="${event.target.dataset.source}">`)

instance.show()

function closingEsc (event) {
if (event.key !== "Escape") {
    return
}
instance.close()
}

document.addEventListener('keydown', closingEsc)

}


containerGalleryElement.addEventListener('click', modalImg)
