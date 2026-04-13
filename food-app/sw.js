const CACHE_NAME = 'foodiee-static-v1';
const APP_SHELL = [
  './',
  './index.html',
  './pages/about.html',
  './pages/contact.html',
  './css/styles.css',
  './js/ui.js',
  './js/materialize.min.js',
  './manifest.json',
  './img/burger.png',
  './img/pasta.png',
  './img/rice.png',
  './img/desserts.png',
  './img/icon-72x72.png',
  './img/icon-128x128.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    )
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});
