import { manifest, version } from '@parcel/service-worker';

// Define the cache name
const cacheName = `psd-v${version ? version: 1}`;

// Define the files to cache
const filesToCache = [
  ...manifest,
  '/',
  '/index.html'
];

// Install the service worker and cache the app shell
async function install() {
  try {
    const cache = await caches.open(cacheName);
    await cache.addAll(filesToCache);
  } catch (err) {
    console.error('install error =>', err);
  }
}
addEventListener('install', e => e.waitUntil(install()));

async function activate() {
  const keys = await caches.keys();
  await Promise.all(
    keys.map(key => key !== cacheName && caches.delete(key))
  );
}
addEventListener('activate', e => e.waitUntil(activate()));

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
