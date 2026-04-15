const CACHE_NAME = 'sonoplastia-v1';
const assets = [
  './',
  './index.html',
  './manifest.json',
  './logo-512.png'
];

// Instala o Service Worker e armazena os arquivos no cache
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// Faz o app funcionar offline buscando no cache
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});