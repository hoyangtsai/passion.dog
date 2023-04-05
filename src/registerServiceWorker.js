export function register() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      const swUrl = `/sw.js`;
      navigator.serviceWorker
        .register(swUrl)
        .then(registration => {
          console.log('Service worker registered successfully:', registration);
        })
        .catch(error => {
          console.error('Service worker registration failed:', error);
        });
    });
  }
}
