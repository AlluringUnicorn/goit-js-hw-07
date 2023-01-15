import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const galleryMarkup = createGalleryMarkup(galleryItems);

gallery.insertAdjacentHTML("beforeend", galleryMarkup);

  const modal = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });

gallery.addEventListener("click", onGalleryClick);

function onGalleryClick(event) {

  if (!event.target.classList.contains("gallery__image")) {
    return;
  }

  event.preventDefault();


}

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>`;
    })
    .join("");
}
