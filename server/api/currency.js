const Currency = require('../db/models/currency')

const router = require('express').Router()

module.exports = router

router.get('/', (req, res, next) => {
	Currency.findAll()
	.then((currencies) => {res.json(currencies)})
	.catch(next);
})

router.get('/:symbol', (req, res, next) => {
	Currency.findOne({where: {symbol: req.params.symbol.toUpperCase()}})
	.then((currency) => {res.json(currency)})
	.catch(next);
})
