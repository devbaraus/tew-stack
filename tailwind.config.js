module.exports = {
	darkMode: false,
	theme: {
		container: {
			center: true,
		},
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [require('@tailwindcss/typography')],
	purge: {
		content: ['dist/**/*.html'],
		options: {
			safelist: [],
		},
	},
}
