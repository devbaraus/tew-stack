const { writeFileSync, readdir } = require('fs')
const { resolve } = require('path')
const stringify = require('json-stringify-safe')

;(async () => {
	readdir(__dirname, function(err, filenames) {
		if (err) {
			console.log(err)
			return
		}

		filenames = filenames.filter(file => {
			return file.indexOf('.js') >= 0 && file !== 'index.js'
		})

		filenames.forEach(async function(filename) {
			const data = await require(resolve(__dirname, filename))()
			writeFileSync(resolve(__dirname, '../_data/', filename.split('.')[0] + '.json'), stringify(data))
		})
	})
})()
