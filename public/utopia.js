// /**
//  * Welcome to your Workbox-powered service worker!
//  *
//  * You'll need to register this file in your web app and you should
//  * disable HTTP caching for this file too.
//  * See https://goo.gl/nhQhGp
//  *
//  * The rest of the code is auto-generated. Please don't update this file
//  * directly; instead, make changes to your Workbox build configuration
//  * and re-run your build process.
//  * See https://goo.gl/2aRDsh
//  */

// importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.0.1/workbox-sw.js");

// /**
//  * The workboxSW.precacheAndRoute() method efficiently caches and responds to
//  * requests for URLs in the manifest.
//  * See https://goo.gl/S9QRab
//  */
// self.__precacheManifest = [
//   {
//     "url": "android-chrome-192x192.webp",
//     "revision": "e27bb63737d83ccabef17a2394494acb"
//   },
//   {
//     "url": "android-chrome-512x512.webp",
//     "revision": "0af14a210b40ae82273a7a14b344e752"
//   },
//   {
//     "url": "app.css",
//     "revision": "497e76445ac8eddc82940bd726b2006c"
//   },
//   {
//     "url": "app.js",
//     "revision": "4c4c5a4b1a1d87161175e447f5133cd7"
//   },
//   {
//     "url": "apple-touch-icon-120x120.webp",
//     "revision": "8780457b8725dfcd8182e3152618c17a"
//   },
//   {
//     "url": "apple-touch-icon-152x152.webp",
//     "revision": "1d7df1e3f1ecb813ce8bf4d30f22f48d"
//   },
//   {
//     "url": "apple-touch-icon-180x180.webp",
//     "revision": "8f306667a3500a6cc697fcc17dedc027"
//   },
//   {
//     "url": "apple-touch-icon-60x60.webp",
//     "revision": "5f6457f0667737b82357cb83eeadd5b6"
//   },
//   {
//     "url": "apple-touch-icon-76x76.webp",
//     "revision": "e096f91814f0bb0beec3a9505a5ac05d"
//   },
//   {
//     "url": "apple-touch-icon.webp",
//     "revision": "8f306667a3500a6cc697fcc17dedc027"
//   },
//   {
//     "url": "browserconfig.xml",
//     "revision": "b0df1d8364886483f481bc261ea8db4b"
//   },
//   {
//     "url": "ch.js",
//     "revision": "08801a8bf372589cbb3e66a4003aba16"
//   },
//   {
//     "url": "favicon-16x16.webp",
//     "revision": "9a664217cafed9c45697c8cec8714653"
//   },
//   {
//     "url": "favicon-32x32.webp",
//     "revision": "0bcee238f262fdaf957846e889172cf1"
//   },
//   {
//     "url": "favicon.ico",
//     "revision": "4fb7472c646a614f6927ba6e84d904f3"
//   },
//   {
//     "url": "html_code.html",
//     "revision": "d2b0817c9e6e7f2ed35c481fef8ef4f4"
//   },
//   {
//     "url": "mstile-144x144.webp",
//     "revision": "fc3deea75e8d5735785b08a2aac7ce3b"
//   },
//   {
//     "url": "mstile-150x150.webp",
//     "revision": "b9c4e8bc388dd01f384b6b09e1d03fe1"
//   },
//   {
//     "url": "port.webp",
//     "revision": "0c3d0d4005bbaea4671280011124ea28"
//   },
//   {
//     "url": "site.webmanifest",
//     "revision": "8f76b5bec64cadb1565510f02a0a6aa7"
//   }
// ].concat(self.__precacheManifest || []);
// workbox.precaching.suppressWarnings();
// workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

const CACHE_NAME = 'utopiaCache',
  urlsToCache = [
    'android-chrome-192x192.webp',
    'android-chrome-512x512.webp',
    'app.css',
    'app.js',
    'apple-touch-icon-120x120.webp',
    'apple-touch-icon-152x152.webp',
    'apple-touch-icon-180x180.webp',
    'apple-touch-icon-60x60.webp',
    'apple-touch-icon-76x76.webp',
    'apple-touch-icon.webp',
    'browserconfig.xml',
    'ch.js',
    'favicon-16x16.webp',
    'favicon-32x32.webp',
    'open.svg',
    'favicon.ico',
    'html_code.html',
    'mstile-144x144.webp',
    'mstile-150x150.webp',
    'port.jpg',
    'site.webmanifest',
    '/',
    '/favicon-16x16.webp ',
    '/favicon-32x32.webp '
  ]

self.addEventListener('install', e => {
  console.log('Evento: SW Instalado')
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Archivos en cache')
        return cache.addAll(urlsToCache)
          .then(() => self.skipWaiting())
        //skipWaiting forza al SW a activarse
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
          if (cacheWhitelist.indexOf(cacheName) === -1)
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
      icon: 'favicon-16x16.webp',
      vibrate: [100, 50, 100],
      data: { id: 1 },
      actions: [
        { 'action': 'Si', 'title': 'Te gusta esta aplicación? 😀', icon: 'favicon-16x16.webp' },
        { 'action': 'No', 'title': 'No me gusta esta aplicación 😔', icon: 'favicon-16x16.webp' }
      ]
    }

    e.waitUntil( self.registration.showNotification(title, options) )
})

self.addEventListener('notificationclick', e => {
  console.log(e)

  if ( e.action === 'Si' ) {
    console.log('AMO esta aplicación')
    clients.openWindow('https://makinox.github.io/PortafolioPersonal/')
  } else if ( e.action === 'No' ) {
    console.log('No me gusta esta aplicación')
  }

  e.notification.close()
})
