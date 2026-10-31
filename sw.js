/* Viole IPTV · service worker mínimo
   - Hace que el navegador ofrezca "Instalar" la app.
   - Si abres la app sin internet, muestra una página amable en vez de un error.
   - NO guarda vídeos, listas ni la app: siempre carga la versión más nueva. */
const OFFLINE_CACHE = 'viole-offline-v1';
const OFFLINE_URL = new URL('offline.html', self.location).href;

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(OFFLINE_CACHE).then((c) => c.add(OFFLINE_URL)));
  self.skipWaiting();
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys()
    .then((keys) => Promise.all(keys.filter((k) => k !== OFFLINE_CACHE).map((k) => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener('fetch', (e) => {
  if (e.request.mode !== 'navigate') return;          // vídeos, listas, imágenes: pasan directo
  e.respondWith(fetch(e.request).catch(() => caches.match(OFFLINE_URL)));
});
