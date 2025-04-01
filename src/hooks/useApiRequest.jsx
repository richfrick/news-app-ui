import { useEffect, useState } from 'react';

const useApiRequest = (apiRequest, ...args) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const makeApiRequest = async () => {
      setError(null);
      setIsLoading(true);
      try {
        const data = await apiRequest(...args);
        setData(data);
        setIsLoading(false);
      } catch (error) {
        console.log('error making request', error);
        setError(error);
      }
    };
    makeApiRequest();
  }, []);

  return { data, isLoading, error };
};

export default useApiRequest;
