import { getImagesByQuery } from "./pixabay-api";
import { renderImages } from "./render-functions";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector<HTMLFormElement>(".form");
const gallery = document.querySelector<HTMLElement>(".gallery");
const loader = document.querySelector<HTMLElement>(".loader");

form?.addEventListener("submit", async (event: SubmitEvent) => {
  event.preventDefault();

  const target = event.target as HTMLFormElement;
  const input = target.elements.namedItem("search-text") as HTMLInputElement;
  const query = input.value.trim();

  if (query === "") {
    iziToast.warning({ message: "Поле не може бути порожнім!" });
    return;
  }

  try {
    if (loader) loader.style.display = "block";
    if (gallery) gallery.innerHTML = "";

    const data = await getImagesByQuery(query, 1);

    if (data.hits.length === 0) {
      iziToast.error({ message: "Зображень не знайдено!" });
    } else {
      renderImages(data.hits);
    }
  } catch (error) {
    iziToast.error({ message: "Сталася помилка завантаження!" });
    console.error(error);
  } finally {
    if (loader) loader.style.display = "none";
  }
});