function getQuote() {
  const url = 'https://www.binance.com/api/v1/ticker/price?symbol=BTCUSDT';
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return parseFloat(data.price);
    });
}

export default getQuote;
