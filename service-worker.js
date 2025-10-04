const cacheName = 'quartier-rp-v1';
const filesToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/service-worker.js',
  '/images/player.png',
  '/images/magasin.png',
  '/images/poste.png',
  '/images/parc.png',
  '/images/ruelle.png',
  '/images/sante.png',
  '/images/npc.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(filesToCache))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});