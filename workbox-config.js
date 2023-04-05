module.exports = {
	globDirectory: 'dist/',
	globPatterns: [
		'**/*.{jpeg,ico,css,js,html,png,webmanifest}'
	],
	swDest: 'dist/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
  // Enable 3rd-party CDN
  importScripts: [
    'https://cdn.jsdelivr.net/npm/workbox-sw@4.3.1/build/workbox-sw.min.js'
  ],
	// Handle network request ASAP
  clientsClaim: true,
  cleanupOutdatedCaches: true
};