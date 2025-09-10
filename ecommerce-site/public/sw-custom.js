import { precacheAndRoute } from 'workbox-precaching';
import { clientsClaim } from 'workbox-core';
import { registerRoute, setCatchHandler } from 'workbox-routing';
import { StaleWhileRevalidate, NetworkFirst, CacheFirst } from 'workbox-strategies';
import { ExpirationPlugin } from 'workbox-expiration';

clientsClaim();


precacheAndRoute(self.__WB_MANIFEST);

// Cache images
registerRoute(
  ({ request }) => request.destination === 'image',
  new CacheFirst({
    cacheName: 'images',
    plugins: [
      new ExpirationPlugin({ maxEntries: 50, maxAgeSeconds: 30 * 24 * 60 * 60 }),
    ],
  })
);

// Cache CSS, JS
registerRoute(
  ({ request }) => request.destination === 'style' || request.destination === 'script',
  new StaleWhileRevalidate({
    cacheName: 'static-assets',
  })
);

// Cache Google Fonts
registerRoute(
  ({ url }) =>
    url.origin.startsWith('https://fonts.googleapis.com') ||
    url.origin.startsWith('https://fonts.gstatic.com'),
  new StaleWhileRevalidate({
    cacheName: 'google-fonts',
  })
);

// Cache API calls
registerRoute(
  ({ url }) => url.pathname.startsWith('/api/'),
  new NetworkFirst({
    cacheName: 'api-data',
    plugins: [
      new ExpirationPlugin({ maxEntries: 20, maxAgeSeconds: 24 * 60 * 60 }),
    ],
  })
);


setCatchHandler(async ({ request }) => {
 
  if (request.destination === 'document') {
    const cachedOffline = await caches.match('/offline.html');
    if (cachedOffline) return cachedOffline;
  }

  
  if (request.destination === 'image') {
  
    const placeholder = await caches.match('/icons/manifest-icon-192.maskable.png');
    if (placeholder) return placeholder;
  }

  return Response.error();
});

// Push notifications
self.addEventListener('push', (event) => {
  const data = JSON.parse(event.data.text());
  event.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.message,
      icon: data.icon || '/icons/manifest-icon-192.maskable.png',
      image: data.image,
      badge: data.badge,
      data: data.url,
    })
  );
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  if (event.action === 'close') return;
  const url = event.notification.data || '/';
  event.waitUntil(self.clients.openWindow(url));
});