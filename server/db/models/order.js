const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
	symbol: {
		type: Sequelize.STRING,
		allowNull: false
	},
	type: {
		type: Sequelize.STRING,
		allowNull: false
	},
	coinAmount: {
		type: Sequelize.FLOAT,
		allowNull: false
	},
	price: {
		type: Sequelize.FLOAT
	}
})

module.exports = Order
