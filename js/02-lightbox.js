import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const galleryMarkup = createGalleryMarkup(galleryItems);

gallery.insertAdjacentHTML("beforeend", galleryMarkup);

gallery.addEventListener("click", onGalleryClick);

function onGalleryClick(event) {
  event.preventDefault();

  const modal = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });
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
