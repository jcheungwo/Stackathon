const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
	symbol: {
		type: Sequelize.STRING,
		unique: true,
		allowNull: false
	},
	coinAmount: {
		type: Sequelize.INTEGER,
		allowNull: false
	},
	price: {
		type: Sequelize.FLOAT
	}
})

module.exports = Order
