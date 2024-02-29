import { fetchImages, input } from './js/pixabay-api';
import { render, imgList } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
const loader = document.querySelector('.loader');
const loadBtn = document.querySelector('.load-btn');
const form = document.querySelector('.form');
let page = 1;
let posts;

form.addEventListener(`submit`, formSearch);

async function formSearch(event) {
  page = 1;

  const inputTrim = input.value.trim();
  if (inputTrim === '') {
    event.preventDefault();
    form.reset();
    return;
  }

  event.preventDefault();
  clearImgList();
  try {
    posts = await fetchImages();
    render(posts);
    form.reset();
    loader.classList.remove('hidden');
    loadBtn.classList.remove('hidden');

    if (posts.hits.length === 0) {
      loadBtn.classList.add('hidden');
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
    }

    setTimeout(() => {
      loader.classList.add('hidden');
    }, 800);
    return;
  } catch (error) {
    console.log(error);
  }
}

loadBtn.addEventListener('click', loadMore);
async function loadMore(event) {
  event.preventDefault();
  page += 1;

  try {
    posts = await fetchImages();
    render(posts);

    ScrollBy(750);

    if (posts.hits.length === 0) {
      loadBtn.classList.add('hidden');
      iziToast.error({
        position: 'topRight',
        message: "We're sorry, but you've reached the end of search results.",
      });
    }
  } catch (error) {
    console.log(error);
  }
}

function clearImgList() {
  imgList.innerHTML = '';
}

function ScrollBy(distance) {
  window.scrollBy({
    top: distance,
    left: 0,
    behavior: 'smooth',
  });
}
