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
    "url": "android-chrome-192x192.png",
    "revision": "705cf981a434f83f77cc8a0e5a65eb31"
  },
  {
    "url": "android-chrome-512x512.png",
    "revision": "ffa89050597b303ff58b285b36bc3afc"
  },
  {
    "url": "app.css",
    "revision": "8253fa325fe6f16056086fa95cbd61f3"
  },
  {
    "url": "app.js",
    "revision": "4c4c5a4b1a1d87161175e447f5133cd7"
  },
  {
    "url": "apple-touch-icon-120x120.png",
    "revision": "61acd3a6f4aaac5a91f11d25217d6a9b"
  },
  {
    "url": "apple-touch-icon-152x152.png",
    "revision": "6da5da29ccae7727785274102dceaf1c"
  },
  {
    "url": "apple-touch-icon-180x180.png",
    "revision": "c8cbd9213e37b10d42b9755f17e26602"
  },
  {
    "url": "apple-touch-icon-60x60.png",
    "revision": "89470a172537abf63c5dc11f09ab9403"
  },
  {
    "url": "apple-touch-icon-76x76.png",
    "revision": "0efbfe3903c73f488d4b00c511515169"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "c8cbd9213e37b10d42b9755f17e26602"
  },
  {
    "url": "browserconfig.xml",
    "revision": "b0df1d8364886483f481bc261ea8db4b"
  },
  {
    "url": "ch.js",
    "revision": "18edd2789314b2154e2e08f4615b102e"
  },
  {
    "url": "favicon-16x16.png",
    "revision": "3207ca3012fe0f7e93b9e7b3c1ca142c"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "2780f4f32213b0a7b752df740fa8d062"
  },
  {
    "url": "html_code.html",
    "revision": "d2b0817c9e6e7f2ed35c481fef8ef4f4"
  },
  {
    "url": "mstile-144x144.png",
    "revision": "a8d1594847e63134c681ae7a041a080a"
  },
  {
    "url": "mstile-150x150.png",
    "revision": "b68a8a1e445b597f47f66c2425784fba"
  },
  {
    "url": "site.webmanifest",
    "revision": "8f76b5bec64cadb1565510f02a0a6aa7"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
