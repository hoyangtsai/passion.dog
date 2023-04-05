// Define the cache name
const cacheName = 'pd-app-cache';

// Define the files to cache
const filesToCache = [
  '/',
  '/index.html',
  '/styles.css',
  '/app.js'
];

// Install the service worker and cache the app shell
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll(filesToCache))
      .catch(error => console.error(error))
  );
});

// Serve cached content when offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }

        return fetch(event.request)
          .then(response => {
            if (response.ok) {
              return caches.open(cacheName)
                .then(cache => {
                  cache.put(event.request, response.clone());
                  return response;
                })
                .catch(error => console.error(error));
            }

            return response;
          })
          .catch(error => console.error(error));
      })
      .catch(error => console.error(error))
  );
});
