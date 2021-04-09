const sharp = require('sharp')
const fs = require('fs')

const config = {
	input: './public/favicon.svg',
	distFolder: './dist/img/',
	baseName: 'favicon',
	ext: 'png',
	manifestJson: './dist/manifest.json',
	manifestImagesPath: 'img/',
	sizes: [
		[16, 16],
		[48, 48],
		[72, 72],
		[96, 96],
		[120, 120],
		[128, 128],
		[180, 180],
		[192, 192],
		[384, 384],
		[512, 512],
	],
}

config.sizes.forEach((i) => {
	sharp(config.input)
		.resize(i[0], i[1])
		.png()
		.toFile(`${config.distFolder}${config.baseName}-${i[0]
		}.${config.ext}`)
})

const manifest = require(config.manifestJson)

manifest.icons = config.sizes.map((i) => ({
	src: `${config.manifestImagesPath}${config.baseName}-${i[0]}.${config.ext}`,
	type: `image/${config.ext}`,
	sizes: i.join('x'),
	purpose: 'maskable any',
}))

fs.writeFile(
	config.manifestJson,
	JSON.stringify(manifest),
	function writeJSON(err) {
		if (err) return console.log(err)
		console.log('Manifest JSON file modified!')
	},
)
