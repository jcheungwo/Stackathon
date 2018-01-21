const Sequelize = require('sequelize')
const db = require('../db')

const UserWallet = db.define('wallet', {
	coins: {
		type: Sequelize.ARRAY(Sequelize.STRING),
		allowNull: false,
		defaultValue: ['btc']
	},
	coinsAmount: {
		type: Sequelize.ARRAY(Sequelize.FLOAT),
		allowNull: false,
		defaultValue: [1]
	}
})

module.exports = UserWallet;
