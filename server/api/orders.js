const router = require('express').Router()
const {Order} = require('../db/models')
module.exports = router

router.get('/:userId/orders', (req, res, next) => {
	Order.findAll({where: {userId: req.params.userId}})
	.then((userOrders) => res.json(userOrders))
	.catch(next);
})

router.post('/:userId/orders', (req, res, next) => {
	Order.create(req.body)
	.then(() => res.send(204))
	.catch(next);
})
