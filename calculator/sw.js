// service worker for basic offline view

const CACHE ="PWA cache";
const offlineFallbackPage = ["app.js", "offlineApp.html"];


self.addEventListener("install", async event =>{
  // store offline.html in cache
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(offlineFallbackPage)));
});

self.addEventListener("fetch", event => {
  if(event.request.mode === "navigate") {
    event.respondWith(
      (async () => {
        try{
        const preloadResp = await event.preloadResponse;
        
        if(preloadResp){
          return preloadResp;
        }
        const netWorkResp = await fetch(event.request);
          return netWorkResp;
      } catch (error) {
        const cache = await caches.open(CACHE);
        const cachedResp = await cache.matchAll(offlineFallbackPage);
        return cachedResp;
      }
      })()
    );
  }
});

