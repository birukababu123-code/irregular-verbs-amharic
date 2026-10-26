const CACHE = 'irregular-verbs-amharic-v1';
const FILES = ['./', './index.html', './manifest.webmanifest'];
self.addEventListener('install', event => event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(FILES))));
self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));
self.addEventListener('fetch', event => event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request))));
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'DAILY_REMINDER') {
    self.registration.showNotification('Daily English verbs 📚', {
      body: 'Time to practise 5 irregular verbs today! V1 · V2 · V3',
      icon: './icon.svg',
      badge: './icon.svg',
      tag: 'daily-irregular-verbs-reminder',
      renotify: false
    });
  }
});
