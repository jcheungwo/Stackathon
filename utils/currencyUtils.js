const axios = require('axios')
const Currency = require('../server/db/models/currency')

const currencyUtils = {};

currencyUtils.seedCurrencies = () => {
	Currency.destroy({where: {}, truncate: {}})
	.then(() => axios.get('https://api.coinmarketcap.com/v1/ticker/?limit=100'))
	.then(res => res.data)
	.then((currencies) => {
		currencies.map((currency) => {
			Currency.create({
				id: currency.id,
				name: currency.name,
				symbol: currency.symbol,
				price: currency.price_btc
			})
		})
	})
	.catch(err => console.log(err))
}

currencyUtils.updateCurrencies = () => {
	axios.get('https://api.coinmarketcap.com/v1/ticker/?limit=100')
	.then(res => res.data)
	.then((currencies) => {
		currencies.map((currency) => {
			Currency.update(currency, {where: {name: currency.name}})
		})
	})
	.catch(err => console.log(err))
}

module.exports = currencyUtils
