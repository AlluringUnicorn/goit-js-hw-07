import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const gallery = document.querySelector(".gallery");
// console.log(gallery);

const galleryMarkup = createGalleryMarkup(galleryItems);
// console.log(galleryMarkup);

gallery.insertAdjacentHTML("beforeend", galleryMarkup);

gallery.addEventListener("click", onClickPreventDefault);

gallery.addEventListener("click", onGalleryClick);



function onClickPreventDefault(event) {
  event.preventDefault();
}

function onGalleryClick(event) {
  const modal = basicLightbox.create(
    `
    <img width="1400" height="900" src="${event.target.dataset.source}">
`,
    {
      onShow: (modal) => {
        document.addEventListener("keydown", function onEscapePress(event) {
          console.log(event);

          if (event.code === "Escape") {
            modal.close();
          }
        });
      },
      onClose: (modal) => {
        document.removeEventListener("keydown", function onEscapePress(event){
          if(event.code === "Escape"){
            modal.close();
          }
        });
      },
    }
  );

  modal.show();
}

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`;
    })
    .join("");
}

