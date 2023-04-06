export function init() {
  if ('serviceWorker' in navigator) {
    const swUrl = new URL('sw.js', import.meta.url);
    navigator.serviceWorker
      .register(swUrl, { type: 'module', scope: '/' })
      .then(registration => console.log('Service worker registered successfully:', registration))
      .catch(error => console.error('Service worker registration failed:', error));
  }
}

window.addEventListener('load', init);
