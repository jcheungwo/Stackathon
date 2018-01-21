import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUserInfo } from '../store/user'
import { fetchCurrencyInfo } from '../store/currency'

class UserInfo extends Component {
	
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		this.props.getUserInfo(this.props.userId);
	}

	render() {
		const user = this.props.user
		let coinsWithPrice = []
		if (user.wallet) {
			for (var i = 0; i < user.wallet.coins.length; i++) {
				coinsWithPrice.push([user.wallet.coins[i], user.wallet.coinsAmount[i]])
			}
			console.log(coinsWithPrice)
		}
		return (
			<div>
				{
				}
			</div>
		)
	}
}

const mapStateToProps = function(state) {
	return {
		user: state.user
	}
}

const mapDispatchToProps = function(dispatch) {
	return {
		getUserInfo (userId) {
			dispatch(fetchUserInfo(userId));
		},
		getCurrencyInfo (currency) {
			dispatch(fetchCurrencyInfo(currency))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo)
