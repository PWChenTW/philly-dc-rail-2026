const CACHE='east-coast-2026-v12';
const ASSETS=[
  './','./index.html','./itinerary.html','./nyc.html','./new-england.html',
  './philadelphia.html','./dc.html','./food.html','./logistics.html','./styles.css','./app.js','./styles.css?v=12','./app.js?v=12','./manifest.webmanifest',
  './images/nyc-sunset.jpg','./images/boston-beacon-hill.jpg','./images/beverly-coast.jpg',
  './images/philly-independence-hall.jpg','./images/dc-lincoln-memorial.jpg',
  './images/katz-pastrami.jpg','./images/reading-terminal.jpg','./images/ethiopian-platter.jpg',
  './images/nyc-washington-square.jpg','./images/nyc-grand-central.jpg',
  './images/boston-public-garden.jpg','./images/boston-old-state-house.jpg','./images/boston-north-end.jpg',
  './images/beverly-tupper-manor.jpg','./images/beverly-endicott-pond.jpg','./images/beverly-west-beach.jpg',
  './images/philly-liberty-bell.jpg','./images/philly-elfreths-alley.jpg',
  './images/dc-capitol.jpg','./images/dc-library-congress.jpg','./images/dc-georgetown.jpg',
  './images/nyc-high-line.jpg','./images/nyc-williamsburg.jpg','./images/nyc-jackson-heights.jpg',
  './images/nyc-new-amsterdam.jpg','./images/nyc-pizza.jpg','./images/philly-30th-street.jpg',
  './images/dc-nmaahc.jpg','./images/dc-archives.jpg','./images/dc-air-space.jpg','./images/dc-u-street.jpg'
];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
  const url=new URL(e.request.url);
  const isShellAsset=url.origin===self.location.origin && /\.(css|js|webmanifest)$/.test(url.pathname);
  if(e.request.mode==='navigate'||isShellAsset){
    e.respondWith(fetch(e.request).then(response=>{
      const copy=response.clone();
      caches.open(CACHE).then(cache=>cache.put(e.request,copy));
      return response;
    }).catch(()=>caches.match(e.request).then(r=>r||caches.match('./index.html'))));
    return;
  }
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
});
