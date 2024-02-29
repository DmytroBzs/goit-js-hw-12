import axios from 'axios';
import { page, limit } from '../main.js';
import { imgList } from './render-functions.js';
export const input = document.querySelector(`.input`);

export async function fetchImages() {
  let correctInput = input.value.split(' ').join('+');

  const parameters = new URLSearchParams({
    key: '42539548-54a8d83eadfda97e0fcb53b56',
    q: correctInput,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: limit,
    page: page,
  });

  const response = await axios.get(`https://pixabay.com/api/?${parameters}`);

  return response.data;
}
