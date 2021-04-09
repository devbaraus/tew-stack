// ICONS
import './feather.font.js'

// CSS
import './main.pcss'

// JS
if ('serviceWorker' in navigator) {
	navigator.serviceWorker
		.register('/sw.js')
		.then((res) => console.log('service worker registered'))
		.catch((err) => console.log('service worker not registered', err))
}
