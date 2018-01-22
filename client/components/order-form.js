import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'react-redux';
import {postOrder} from '../store/order';
import SearchBar from 'material-ui-search-bar'

class OrderForm extends Component {
	constructor() {
		super()
		this.state = {
			currentCurrency: {},
			volume: undefined
		}
	}

	render() {
		let volume
		return (
			<div style={{display: 'flex', justifyContent: 'space-between', width: '90%'}} align="center">
				<SearchBar
					style={{width: '15%'}}
					onRequestSearch={()=> {return}}
					onChange={(event) => this.props.handleChange.call(this, event)}
					hintText="Enter Symbol"
				/>
				<span style={{fontSize:25}}>CoinPrice: {this.state.currentCurrency.price}</span>
				<form onSubmit={(event) => this.props.handleOrderSubmit.call(this, event)} style={{}}>
					<input
						value={volume}
						type="number"
						step={.00000001}
						name="coinAmount"
						placeholder="Enter Amount"
						style={{height:35, fontSize:25, width:175}}
						onChange={(event) => this.props.handleVolumeChange.call(this, event)}
					/>
					<select name="orderSelection" style={{height:35, fontSize:25, margin:12}}>
						<option value={'Buy'} key={1}>Buy</option>
						<option value={'Sell'} key={2}>Sell</option>
					</select>
					<button type="submit" style={{margin:0, height:35, fontSize:25}} value={volume}>Confirm Order</button>
				</form>
			</div>
		)
	}
}

const mapStateToProps = function(state) {
	return {}
}

const mapDispatchToProps = function(dispatch) {
	return {
		handleOrderSubmit (event) {
			event.preventDefault();
			const user = this.props.user
			const newOrder = {
				symbol: this.state.currentCurrency.symbol,
				type: event.target.orderSelection.value,
				coinAmount: Number(this.state.volume),
				price: this.state.currentCurrency.price,
				userId: user.id
			}
			const walletBTC = user.wallet.coinsAmount[user.wallet.coins.indexOf('BTC')]
			const walletOther = user.wallet.coinsAmount[user.wallet.coins.indexOf(newOrder.symbol)]
			if (newOrder.symbol === 'BTC') alert('CANNOT TRADE BTC FOR BTC')
			else if (newOrder.type === 'Buy' && (!walletBTC || newOrder.coinAmount * newOrder.price > walletBTC)) alert('NOT ENOUGH FUNDS!')
			else if (newOrder.type === 'Sell' && (!walletOther || newOrder.coinAmount > walletOther)) alert('NOT ENOUGH FUNDS!')
			else {
				dispatch(postOrder(newOrder, user.wallet))
				window.location.replace('/home')
			}
		},
		handleChange(event) {
			axios.get(`/api/currency/${event}`)
			.then(res => res.data)
			.then((currency) => currency ? this.setState({currentCurrency: currency}) : this.setState({currentCurrency: {price: 'DNE'}}))
			.catch(err => console.log(err))
		},
		handleVolumeChange(event) {
			this.setState({volume: event.target.value})
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm)
