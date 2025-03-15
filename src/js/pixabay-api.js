const apiKey = '49253539-084e8be9ad99f0e2743df86f8';

const pixApi = data => {
  const searchParams = new URLSearchParams({
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  return fetch(
    `https://pixabay.com/api/?key=${apiKey}&q=${data}&${searchParams}`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};

export default pixApi;
