import { type PixabayImage } from "./types/pixabay";

export function renderImages(images: PixabayImage[]): void {
  const gallery = document.querySelector<HTMLElement>(".gallery");
  if (!gallery) return;

  const markup = images
    .map((img) => `
      <li class="gallery-item">
        <a href="${img.largeImageURL}">
          <img src="${img.webformatURL}" alt="${img.tags}" />
        </a>
        <div class="info">
          <p><b>Likes:</b> ${img.likes}</p>
          <p><b>Views:</b> ${img.views}</p>
        </div>
      </li>`
    )
    .join("");

  gallery.innerHTML = markup;
}