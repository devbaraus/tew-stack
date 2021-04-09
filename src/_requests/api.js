const axios = require('axios')

async function fetchData() {
	const { data } = await axios.get('https://api.agify.io?name=michael')
	return data
}

module.exports = fetchData
