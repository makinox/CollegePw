/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.0.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "android-chrome-192x192.webp",
    "revision": "e27bb63737d83ccabef17a2394494acb"
  },
  {
    "url": "android-chrome-512x512.webp",
    "revision": "0af14a210b40ae82273a7a14b344e752"
  },
  {
    "url": "app.css",
    "revision": "497e76445ac8eddc82940bd726b2006c"
  },
  {
    "url": "app.js",
    "revision": "9a65801d518fb05945d5997febe4676b"
  },
  {
    "url": "apple-touch-icon-120x120.webp",
    "revision": "8780457b8725dfcd8182e3152618c17a"
  },
  {
    "url": "apple-touch-icon-152x152.webp",
    "revision": "1d7df1e3f1ecb813ce8bf4d30f22f48d"
  },
  {
    "url": "apple-touch-icon-180x180.webp",
    "revision": "8f306667a3500a6cc697fcc17dedc027"
  },
  {
    "url": "apple-touch-icon-60x60.webp",
    "revision": "5f6457f0667737b82357cb83eeadd5b6"
  },
  {
    "url": "apple-touch-icon-76x76.webp",
    "revision": "e096f91814f0bb0beec3a9505a5ac05d"
  },
  {
    "url": "apple-touch-icon.webp",
    "revision": "8f306667a3500a6cc697fcc17dedc027"
  },
  {
    "url": "browserconfig.xml",
    "revision": "b0df1d8364886483f481bc261ea8db4b"
  },
  {
    "url": "ch.js",
    "revision": "e67425ac16ed98a586bf624dd16a407d"
  },
  {
    "url": "favicon-16x16.webp",
    "revision": "9a664217cafed9c45697c8cec8714653"
  },
  {
    "url": "favicon-32x32.webp",
    "revision": "0bcee238f262fdaf957846e889172cf1"
  },
  {
    "url": "favicon.ico",
    "revision": "4fb7472c646a614f6927ba6e84d904f3"
  },
  {
    "url": "html_code.html",
    "revision": "d2b0817c9e6e7f2ed35c481fef8ef4f4"
  },
  {
    "url": "mstile-144x144.webp",
    "revision": "fc3deea75e8d5735785b08a2aac7ce3b"
  },
  {
    "url": "mstile-150x150.webp",
    "revision": "b9c4e8bc388dd01f384b6b09e1d03fe1"
  },
  {
    "url": "port.webp",
    "revision": "0c3d0d4005bbaea4671280011124ea28"
  },
  {
    "url": "site.webmanifest",
    "revision": "8f76b5bec64cadb1565510f02a0a6aa7"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
