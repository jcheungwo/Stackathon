const router = require('express').Router()
const {Order} = require('../db/models')
const {UserWallet} = require('../db/models')
module.exports = router

router.get('/users/:userId/orders', (req, res, next) => {
	Order.findAll({where: {userId: req.params.userId}})
	.then((userOrders) => res.json(userOrders))
	.catch(next);
})

router.post('/orders', (req, res, next) => {
	let updatedWallet = req.body.wallet
	let newOrder = req.body.order
	let btc = updatedWallet.coins.indexOf('BTC')
	let other = updatedWallet.coins.indexOf(newOrder.symbol)
	if (newOrder.type === 'Buy'){
		updatedWallet.coinsAmount[btc] -= newOrder.price * newOrder.coinAmount
		if (other !== -1) updatedWallet.coinsAmount[other] += newOrder.coinAmount
		else {
			updatedWallet.coins.push(newOrder.symbol)
			updatedWallet.coinsAmount.push(newOrder.coinAmount)
		}
	}
	else {
		updatedWallet.coinsAmount[other] -= newOrder.coinAmount
		updatedWallet.coinsAmount[btc] += newOrder.coinAmount * newOrder.price
	}
	Order.create(req.body.order)
	.then(() => {
		UserWallet.update(updatedWallet, {where:{userId:req.body.order.userId}})
	})
	.then(() => res.send(204))
	.catch(next);
})
