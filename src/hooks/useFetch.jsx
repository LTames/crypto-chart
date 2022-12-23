import React from 'react';

const useFetch = () => {
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState(null);

  const request = React.useCallback(async (url, options) => {
    let json;
    let response;

    try {
      setLoading(true);
      setError(null);

      response = await fetch(url, options);
      json = await response.json();

      if (!response.ok) throw new Error(json.error);
    } catch (e) {
      json = null;
      setError(e);
    } finally {
      setLoading(false);
      setData(json);
    }

    return { json, response };
  }, []);

  return {
    error,
    loading,
    data,
    request,
  };
};

export default useFetch;
