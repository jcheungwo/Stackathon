import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { fetchUserInfo } from '../store/user'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

class UserInfo extends Component {

	constructor() {
		super()
		this.state = {currencyInfo: []}
	}

	componentDidMount() {
		this.props.getUserInfo(this.props.userId)
	}

	getCurrentPrices = (coins) => {
		let currentCurrencyInfo = []
		coins.map((coin) => {
			axios.get(`/api/currency/${coin.toUpperCase()}`)
			.then((res) => res.data)
			.then(coinInfo => {
				currentCurrencyInfo.push(coinInfo)
				if (currentCurrencyInfo.length === coins.length && currentCurrencyInfo[0].symbol === coins[0]) this.setState({currencyInfo: currentCurrencyInfo})
				else if (currentCurrencyInfo.length === coins.length) {
					this.setState({currencyInfo: []})
				}
			})
			.catch(err => console.log(err))
		})
	}

	render() {
		const user = this.props.user
		const currencyInfo = this.state.currencyInfo
		let coinIndex = 0
		if (user.wallet && this.state.currencyInfo.length === 0)
			this.getCurrentPrices(user.wallet.coins)
		return (
			<div>
				<h1 style={{textAlign: "center"}}>Your Wallet</h1>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHeaderColumn>Coin Name</TableHeaderColumn>
							<TableHeaderColumn>Coin Symbol</TableHeaderColumn>
							<TableHeaderColumn>Volume of Coin</TableHeaderColumn>
							<TableHeaderColumn>Current Price (in BTC)</TableHeaderColumn>
							<TableHeaderColumn>Total</TableHeaderColumn>
						</TableRow>
					</TableHeader>
					<TableBody>
						{currencyInfo && currencyInfo.map((coin) =>
							<TableRow key={coin.symbol}>
						        <TableRowColumn>{coin.name}</TableRowColumn>
						        <TableRowColumn>{coin.symbol}</TableRowColumn>
						        <TableRowColumn>{user.wallet.coinsAmount[coinIndex]}</TableRowColumn>
						        <TableRowColumn>{coin.price}</TableRowColumn>
						        <TableRowColumn>{(coin.price * user.wallet.coinsAmount[coinIndex++]).toFixed(8)}</TableRowColumn>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>
		)
	}
}

const mapStateToProps = function(state) {
	return {
		user: state.user,
		wallet: state.user.wallet
	}
}

const mapDispatchToProps = function(dispatch) {
	return {
		getUserInfo (userId) {
			dispatch(fetchUserInfo(userId));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo)
