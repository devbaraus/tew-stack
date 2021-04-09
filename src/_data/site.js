'use strict'

const eleventyPackage = require('@11ty/eleventy/package.json')

const env = process.env

const URL = env.URL || 'http://localhost:5000'


// Web/PWA default configuration
module.exports = function() {
	return {
		generator: `${eleventyPackage.name} v${eleventyPackage.version}`,
		today: new Date(), // Used in the sitemap.xml
		url: URL,
		author: 'YOUR NAME',
		name: 'TEW Stack',
		short_name: 'TEW',
		description: 'A stack using TailwindCSS, Eleventy and Workbox',
		keywords: 'tailwindcss, css, eleventy, js, workbox, pwa',
		lang: 'en',
		dir: 'auto',
		categories: ['website'],
		start_url: '/?source=pwa',
		display: 'standalone',
		theme_color: '#EE5622',
		offline_enabled: true,
		background_color: '#f0f0f7',
		shortcuts: [],
	}
}
