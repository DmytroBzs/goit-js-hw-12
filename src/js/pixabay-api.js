export function fetchImages(searchQuery) {
  const parameters = new URLSearchParams({
    key: '42539548-54a8d83eadfda97e0fcb53b56',
    q: searchQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  return fetch(`https://pixabay.com/api/?${parameters}`).then(response => {
    if (!response.ok) {
      throw new Error('Unable to fetch images');
    }
    return response.json();
  });
}
