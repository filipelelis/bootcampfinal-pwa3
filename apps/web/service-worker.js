// apps/web/service-worker.js

// Define um nome e versão para o cache
const CACHE_NAME = 'saudacao-pwa-cache-v1';

// Lista de arquivos que devem ser cacheados na instalação
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/popup.css',
  '/popup.js',
  '/icons/icon-192.png',
  '/icons/icon-512.png'
];

// Evento 'install': Salva os assets no cache
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Service Worker: Cache aberto');
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// Evento 'fetch': Intercepta requisições
self.addEventListener('fetch', (event) => {
  // Nós não queremos cachear as chamadas de API
  if (event.request.url.includes('/api/')) {
    event.respondWith(fetch(event.request));
    return;
  }

  // Para todos os outros assets (html, css, js, imagens):
  // Estratégia: "Cache first"
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Se tiver no cache, retorna do cache
      if (response) {
        return response;
      }
      // Se não tiver, busca na rede, e clona a resposta
      // para salvar no cache e retornar para o navegador.
      return fetch(event.request).then((networkResponse) => {
        // Clona a resposta para o cache
        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
        });
        // Retorna a resposta da rede
        return networkResponse;
      });
    })
  );
});