const CACHE = 'site-v1'
const assets = ['/', '/404.html', '/css/main.css', '/js/main.js']

self.addEventListener('install', (installEvent) => {
	installEvent.waitUntil(
		caches.open(CACHE).then((cache) => {
			cache.addAll(assets)
		}),
	)
})

self.addEventListener('fetch', (fetchEvent) => {
	fetchEvent.respondWith(
		caches.match(fetchEvent.request).then((res) => {
			return res || fetch(fetchEvent.request)
		}),
	)
})
