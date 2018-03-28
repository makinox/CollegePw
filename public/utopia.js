const CACHE_NAME = 'utopiaCache',
  urlsToCache = [
    'android-chrome-192x192.png',
    'android-chrome-512x512.png',
    'app.css',
    'app.js',
    'apple-touch-icon-120x120.png',
    'apple-touch-icon-152x152.png',
    'apple-touch-icon-180x180.png',
    'apple-touch-icon-60x60.png',
    'apple-touch-icon-76x76.png',
    'apple-touch-icon.png',
    'browserconfig.xml',
    'ch.js',
    'favicon-16x16.png',
    'favicon-32x32.png',
    'open.svg',
    'favicon.ico',
    'html_code.html',
    'mstile-144x144.png',
    'mstile-150x150.png',
    'port.jpg',
    'site.webmanifest',
    '/',
    '/favicon-16x16.png',
    '/favicon-32x32.png',
    '/proceso.svg',
    '/trianglify.svg',
    '/utopiaMockup1Pres.jpg'
  ]

self.addEventListener('install', e => {
  console.log('Evento: SW Instalado')
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Archivos en cache')
        return cache.addAll(urlsToCache)
          .then(() => self.skipWaiting())
        // skipWaiting forza al SW a activarse
      })
      .catch(err => console.log(`Falló registro de cache ${err.message}`))
  )
})

self.addEventListener('activate', e => {
  console.log('Evento: SW Activado')
  const cacheWhitelist = [CACHE_NAME]

  e.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          //Eliminamos lo que ya no se necesita en cache
          if ( cacheWhitelist.indexOf(cacheName) === -1 )
            return caches.delete(cacheName)
        })
      )
    })
    .then(() => {
      console.log('Cache actualizado')
      // Le indica al SW activar el cache actual
      return self.clients.claim()
    })
  )
})

self.addEventListener('fetch', e => {
  console.log('Evento: SW Recuperando')

  e.respondWith(
    //Miramos si la petición coincide con algún elemento del cache
    caches.match(e.request)
      .then(res => {
        console.log('Recuperando cache')
        if ( res ) {
          //Si coincide lo retornamos del cache
          return res
        }
        //Sino, lo solicitamos a la red
        return fetch(e.request)
      })
    )
})

self.addEventListener('push', e => {
  console.log('Evento: Push')

  let title = 'Utopia',
    options = {
      body: 'Quiero saber que piensas',
      icon: 'favicon-16x16.png',
      vibrate: [100, 50, 100],
      data: { id: 1 },
      actions: [
        { 'action': 'Si', 'title': 'Te gusta esta aplicación? 😀', icon: 'favicon-16x16.png' },
        { 'action': 'No', 'title': 'No me gusta esta aplicación 😔', icon: 'favicon-16x16.png' }
      ]
    }

  e.waitUntil(self.registration.showNotification(title, options))
})

self.addEventListener('notificationclick', e => {
  console.log(e)

  if (e.action === 'Si') {
    console.log('Amo esta aplicación')
    clients.openWindow('https://makinox.github.io/PortafolioPersonal/')
  } else if (e.action === 'No') {
    console.log('No me gusta esta aplicación')
  }

  e.notification.close()
})

self.addEventListener('sync', e => {
  console.log('Evento: Sincronización de Fondo', e)

  //Revisamos que la etiqueta de sincronización sea la que definimos o la que emulan las devtools
  if ( e.tag === 'utopia' || e.tag === 'test-tag-from-devtools' ) {
    e.waitUntil(
      //Comprobamos todas las pestañas abiertas y les enviamos postMessage
      self.clients.matchAll()
        .then(all => {
          return all.map(client => {
            return client.postMessage('online')
          })
        })
        .catch( err => console.log(err) )
    )
  }
})