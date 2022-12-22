const API_URL = 'https://api.coinranking.com/v2';
const API_KEY = 'coinrankingff26674254edce9d934dd24366d413523244e217f83b897e'; // === !!! ===
const proxy = 'https://cors-anywhere.herokuapp.com'; // === !!! ===

export function COINS_GET() {
  return {
    url: `${proxy}/${API_URL}/coins`,
    options: {
      method: 'GET',
      headers: { 'x-access-token': `${API_KEY}` },
    },
  };
}

export function COIN_GET(query) {
  return {
    url: `${proxy}/${API_URL}/search-suggestions?query=${query}`,
    options: {
      method: 'GET',
      headers: { 'x-access-token': `${API_KEY}` },
    },
  };
}
