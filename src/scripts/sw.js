/* eslint-disable linebreak-style */
import 'regenerator-runtime';
import CacheHelper from './utils/cache-helper';
const {assets} = global.serviceWorkerOption;

self.addEventListener('install', (event) => {
  console.log('Installing Service Worker ...');

  event.waitUntil(CacheHelper.cachingAppShell([...assets, './']));
});

self.addEventListener('activate', (event) => {
  console.log('Activating Service Worker ...');

  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(CacheHelper.revalidateCache(event.request));
});

