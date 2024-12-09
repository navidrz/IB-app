importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.5.4/workbox-sw.js');

if (workbox) {
  console.log(`Workbox is loaded`);

  workbox.routing.registerRoute(
    ({request}) => request.destination === 'document' || 
                   request.destination === 'script' || 
                   request.destination === 'style' || 
                   request.destination === 'image',
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'static-resources',
    })
  );

  workbox.routing.registerRoute(
    ({url}) => url.pathname.endsWith('.csv'),
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'csv-data',
    })
  );

  self.addEventListener('install', (event) => {
    self.skipWaiting();
  });

  self.addEventListener('activate', (event) => {
    clients.claim();
  });
} else {
  console.log('Workbox failed to load');
}
