function getQuote() {
  const url = 'https://api.bluelytics.com.ar/v2/latest';
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data.blue.value_sell;
    });
}

export default getQuote;
