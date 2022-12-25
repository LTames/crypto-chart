const API_URL = 'https://api.coingecko.com/api/v3';

export function COINS_GET() {
  return {
    url: `${API_URL}/coins`,
  };
}

export function COIN_CHART_DATA_GET(coinId) {
  return {
    url: `${API_URL}/coins/${coinId}/ohlc?vs_currency=usd&days=365`,
  };
}

export function COIN_GET(coinId) {
  return {
    url: `${API_URL}/coins/${coinId}`,
  };
}
