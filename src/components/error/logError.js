function logError(message) {
  const el = document.createElement('div');

  el.textContent = message;
  el.className = 'error';

  document.body.insertBefore(el, document.body.firstChild);
}

window.onerror = logError;

export default logError;
