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

const UUIDV4_TEMPLATE = '10000000-1000-4000-8000-100000000000'; // [1e7] + -1e3 + -4e3 + -8e3 + -1e11
const UUIDV4_REGEX = /[018]/g;
const UUIDV4_UINT8 = new Uint8Array(1);
// eslint-disable-next-line no-magic-numbers, no-bitwise, no-mixed-operators
const UUIDV4_REPLACE = (co) => (co ^ crypto.getRandomValues(UUIDV4_UINT8)[0] & 15 >> co / 4).toString(16);

/**
 * Returns a random v4 UUID of the form xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx,
 * where each x is replaced with a random hexadecimal digit from 0 to f,
 * and y is replaced with a random hexadecimal digit from 8 to b.
 * @return {String} UUIDv4
 */

export function uuidv4() {
  return UUIDV4_TEMPLATE.replace(UUIDV4_REGEX, UUIDV4_REPLACE);
}
