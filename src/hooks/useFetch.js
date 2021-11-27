import { useEffect, useState, useRef } from 'react'

export const useFetch = (url) => {
  // Ref: mantiene la referencia cuando el hook está vivo o el componente que lo usa sigue montado
  const isMounted = useRef(true);
  const [state, setState] = useState({ data: null, loading: true, error: null });

  useEffect(() => {
    return () => isMounted.current = false; // Sucede cuando el efecto se desmonte
  }, []);

  useEffect(() => {
    setState({ data: null, loading: true, error: null });

    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        if (isMounted.current) {
          setState({
            loading: false,
            error: null,
            data
          })
        }
      });
  }, [url]);

  return state;
}
