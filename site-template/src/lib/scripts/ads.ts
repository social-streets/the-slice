import { browser } from "$app/environment";

export const injectAdInArticle = (adImgSrc: string, adImgAlt: string) => {
  if (!browser) return;

  const adHTML = `<aside style="display: flex; flex-direction: column; margin: 2rem 0;">
    <div class="ad-label" style="font-size: 0.8rem; background-color: black; color: white; padding: 0.1rem 0.5rem; border-radius: 5px 5px 0 0; width: fit-content; align-self: end;">
        Advertisement
    </div>
    <img src=${adImgSrc} alt=${adImgAlt}} style="width: 100%; max-width: 800px; margin: 0 auto; border: 2px solid black; ">
  </aside>`;

  const ad = document.createElement("div");
  ad.innerHTML = adHTML;
  const articleElement = document.querySelector("article");
  if (articleElement) {
    const paragraphs = articleElement.querySelectorAll("p");
    const halfway = Math.floor(paragraphs.length / 2 - 1);
    if (paragraphs.length > 2) paragraphs[halfway].after(ad);
    else articleElement.append(ad);
  }
};
