/* <i class="feather feather-instagram"></i> */
module.exports = {
	files: [
		'instagram',
		'github',
		'linkedin',
	].map((i) => `./feather/${i}.svg`),
	fontName: 'feather',
	classPrefix: 'feather-',
	baseSelector: '.feather',
	types: ['eot', 'woff', 'woff2', 'ttf', 'svg'],
	fileName: '[fontname].[ext]',
	dest: '/css/',
}
