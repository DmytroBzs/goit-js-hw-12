import { fetchImages } from './js/pixabay-api';
import { render } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const loader = document.querySelector('.loader');

form.addEventListener('submit', event => {
  event.preventDefault();

  const input = form.querySelector('.input');
  const searchQuery = input.value.trim();

  if (!searchQuery) {
    return;
  }

  loader.classList.remove('hidden');

  fetchImages(searchQuery)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'center',
        });
      } else {
        render(data);
      }
    })
    .catch(error => {
      console.error('Error fetching images:', error);
      iziToast.error({
        message: 'Error fetching images. Please try again later!',
      });
    })
    .finally(() => {
      loader.classList.add('hidden');
      form.reset();
    });
});
