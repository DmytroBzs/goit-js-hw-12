import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export function render(images) {
  const imgList = document.querySelector(`.img-list`);
  imgList.innerHTML = '';

  const markup = images.hits
    .map(image => {
      return `<li class="list-item">
              <a href="${image.largeImageURL}" class="list-item-link">
                <img class="list-item-img" src="${image.webformatURL}" alt="${image.tags}">
              </a>
              <div class="list-item-description">
                <h2 class="description-name">Likes
                  <p class="description-value">${image.likes}</p>
                </h2>
                <h2 class="description-name">Views 
                  <p class="description-value">${image.views}</p>
                </h2>
                <h2 class="description-name">Comments 
                  <p class="description-value">${image.comments}</p>
                </h2>
                <h2 class="description-name">Downloads 
                  <p class="description-value">${image.downloads}</p>
                </h2>
              </div>
            </li>`;
    })
    .join('');

  imgList.insertAdjacentHTML('beforeend', markup);

  const lightbox = new SimpleLightbox('.list-item a', {
    captionDelay: 250,
    captionSelector: 'img',
    captionsData: 'alt',
    scrollZoom: false,
    fadeSpeed: 250,
  });

  lightbox.refresh();
}
