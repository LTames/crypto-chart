const API_URL = 'https://api.coingecko.com/api/v3';

export function COINS_GET() {
  return {
    url: `${API_URL}/coins`,
  };
}

export function COIN_GET() {}
