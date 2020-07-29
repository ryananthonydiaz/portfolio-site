import { useEffect, useState, useCallback } from 'react';

export default (dispatch, action, ...args) => {
  const [isLoading, setIsLoading] = useState(true);
  const [response, setResponse] = useState(null);
  const actionCallback = useCallback(() => dispatch(action(...args)), [dispatch, action, args]);

  useEffect(() => {
    const asyncActionCallback = async () => {
      try {
        const res = await actionCallback();
        setResponse(res);
      } catch (error) {
        console.log(error);
        // grab cached error messages here and display
      }

      setIsLoading(false);
    }

    asyncActionCallback();
  }, [actionCallback]);

  return { isLoading, response }
}