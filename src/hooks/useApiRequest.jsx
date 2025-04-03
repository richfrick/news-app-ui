import { useEffect, useState } from 'react';

const useApiRequest = (apiRequest, ...args) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  useEffect(() => {
    setError(null);
    setIsLoading(true);
    const makeApiRequest = async () => {
      try {
        const data = await apiRequest(...args);
        setData(data);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        setError(err);
      }
    };
    makeApiRequest();
  }, [...args]);

  return { data, isLoading, error };
};

export default useApiRequest;
