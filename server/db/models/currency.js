const Sequelize = require('sequelize')
const db = require('../db')

const Currency = db.define('currency', {
	id: {
		type: Sequelize.STRING,
		primaryKey: true
	},
	name: {
		type: Sequelize.STRING
	},
	symbol: {
		type: Sequelize.STRING
	},
	price: {
		type: Sequelize.FLOAT
	}
})

module.exports = Currency

