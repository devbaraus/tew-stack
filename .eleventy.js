const htmlmin = require('html-minifier')
const { parseISO, format } = require('date-fns')
const stringify = require('json-stringify-safe')


module.exports = (config) => {
	// Copy public folder to dist folder
	config.addFilter('date', function(date, dateFormat, parse = true) {
		if (parse) {
			date = parseISO(date)
		}
		return format(date, dateFormat)
	})

	config.addPassthroughCopy({ public: './' })
	config.setBrowserSyncConfig({
		files: ['dist/**/*'],
		open: true,
		// Tweak for Turbolinks & Browserstack Compatibility
		snippetOptions: {
			rule: {
				match: /<\/head>/i,
				fn: function (snippet, match) {
					return snippet + match
				},
			},
		},
	})
	config.setDataDeepMerge(true)

	// Minify HTML on production
	config.addTransform('htmlmin', function(content, outputPath) {
		if (
			process.env.NODE_ENV === 'production' &&
			outputPath &&
			outputPath.endsWith('.html')
		) {
			let minified = htmlmin.minify(content, {
				useShortDoctype: true,
				removeComments: true,
				collapseWhitespace: true,
			})
			return minified
		}
		return content
	})

	config.addTransform('minifyjson', function(content, outputPath) {
		if (
			process.env.NODE_ENV === 'production' &&
			outputPath &&
			outputPath.endsWith('.json')
		) {
			let jsonObject = JSON.parse(content)
			return stringify(jsonObject)
		}
		return content
	})

	return {
		dir: {
			input: 'src',
			output: 'dist',
		},
	}
}
