importScripts('workbox-sw.prod.v2.1.2.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "404.html",
    "revision": "48d42c31ce21cac063c398ae2f67899f"
  },
  {
    "url": "bundle.js",
    "revision": "12391908c54ecdbc7e80b1ec22013097"
  },
  {
    "url": "index.html",
    "revision": "6fa1c8006666ef68fcd8214204a7d38f"
  },
  {
    "url": "manifest.json",
    "revision": "d7e1ab4196d27d1311c8ae51d042311d"
  },
  {
    "url": "style.css",
    "revision": "d7990a49ea83163c151e64a528d719b7"
  }
];

const workboxSW = new self.WorkboxSW({
  "cacheId": "pwa-boilerplate",
  "skipWaiting": true
});
workboxSW.precache(fileManifest);
workboxSW.router.registerNavigationRoute("/index.html");
