import { HTTP_OK, HTTP_ERROR } from './consts';
import { useEffect, useRef } from 'react';

export function useInterval(callback, delay) {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    const tick = () => savedCallback.current();

    if (typeof delay === 'number') {
      const id = setInterval(tick, delay);

      return () => clearInterval(id);
    }

    return undefined; // eslint-disable-line consistent-return
  }, [delay]);
}

/**
 * Fetches and parsed Json from given url. Window.fetch is not supported in some browsers.
 * @param  {String} url Address to query for data.
 * @return {Promise}    Promise resolving to parsed data recieved in the request.
 */
export function fetchJson(url) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.onload = function() { // eslint-disable-line func-names
      if (request.status >= HTTP_OK && request.status < HTTP_ERROR) {
        resolve(JSON.parse(this.responseText));
      } else {
        reject(request.statusText);
      }
    };
    request.onerror = reject;
    request.open('GET', url, true);
    request.send();
  });
}
