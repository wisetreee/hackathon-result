import { useState, useEffect } from 'react';

export const useServerRequest = (request, id = null) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        let response;
        let endpoint;
        switch (request) {
          case 'user':
            endpoint = `${import.meta.env.VITE_API_URL}/users/${id}`;
            break;
          case 'projects':
            endpoint = `${import.meta.env.VITE_API_URL}/projects`;
            break;
          default:
            setError(`Invalid request type: ${request}`);
            setIsLoading(false);
            return;
        }

        response = await fetch(endpoint);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();
        setData(responseData);
      } catch (e) {
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [request, id]);
  return { data, isLoading, error };
};
