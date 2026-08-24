const CACHE='east-coast-2026-v5';
const ASSETS=[
  './','./index.html','./styles.css','./app.js','./manifest.webmanifest',
  './images/nyc-sunset.jpg','./images/boston-beacon-hill.jpg','./images/beverly-coast.jpg',
  './images/philly-independence-hall.jpg','./images/dc-lincoln-memorial.jpg',
  './images/katz-pastrami.jpg','./images/reading-terminal.jpg','./images/ethiopian-platter.jpg',
  './images/nyc-washington-square.jpg','./images/nyc-grand-central.jpg',
  './images/boston-public-garden.jpg','./images/boston-old-state-house.jpg','./images/boston-north-end.jpg',
  './images/beverly-tupper-manor.jpg','./images/beverly-endicott-pond.jpg','./images/beverly-west-beach.jpg',
  './images/philly-liberty-bell.jpg','./images/philly-elfreths-alley.jpg',
  './images/dc-capitol.jpg','./images/dc-library-congress.jpg','./images/dc-georgetown.jpg',
  './images/nyc-high-line.jpg','./images/nyc-williamsburg.jpg','./images/nyc-jackson-heights.jpg'
];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
