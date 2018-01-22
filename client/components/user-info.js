import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import OrderForm from './order-form'
import { fetchUserInfo } from '../store/user'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableFooter,
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

	render() {
		const user = this.props.user
		const currencyInfo = this.state.currencyInfo
		let coinIndex = 0
		if (user.wallet && this.state.currencyInfo.length === 0) this.props.getCurrentPrices.call(this, user.wallet.coins)
		let total = 0;
		currencyInfo.map((coin) => {
			total += coin.price * user.wallet.coinsAmount[coinIndex++];
		})
		coinIndex = 0;
		return (
			<div align="center">
				<OrderForm user={user} getUserInfo={this.props.getUserInfo} />
				<span><br/></span>
				<Table style={{width: '90%', borderRadius: 25}}>
					<TableHeader adjustForCheckbox={false} displaySelectAll={false}>
						<TableRow>
							<TableHeaderColumn colSpan="5" style={{textAlign: 'center', margin: 0, fontSize: '25px', backgroundColor:'#4EB1BA', color: '#E9E9E9'}}>
								Wallet
							</TableHeaderColumn>
						</TableRow>
						<TableRow style={{textAlign: 'center', margin: 0, backgroundColor:'#4EB1BA', color: '#E9E9E9'}}>
							<TableHeaderColumn style={{textAlign: 'center', color: '#222930', margin: 0, fontSize: '20px'}}>Coin Name</TableHeaderColumn>
							<TableHeaderColumn style={{textAlign: 'center', color: '#222930', margin: 0, fontSize: '20px'}}>Coin Symbol</TableHeaderColumn>
							<TableHeaderColumn style={{textAlign: 'center', color: '#222930', margin: 0, fontSize: '20px'}}>Volume of Coin</TableHeaderColumn>
							<TableHeaderColumn style={{textAlign: 'center', color: '#222930', margin: 0, fontSize: '20px'}}>Current Price (in BTC)</TableHeaderColumn>
							<TableHeaderColumn style={{textAlign: 'center', color: '#222930', margin: 0, fontSize: '20px'}}>Total</TableHeaderColumn>
						</TableRow>
					</TableHeader>
					<TableBody displayRowCheckbox={false}>
						{currencyInfo && currencyInfo.map((coin) =>
							<TableRow selectable={false} key={coin.symbol} style={{backgroundColor:'#4EB1BA', color: '#E9E9E9'}}>
						        <TableRowColumn style={{textAlign: 'center', margin: 0, fontSize: '20px'}}>{coin.name}</TableRowColumn>
						        <TableRowColumn style={{textAlign: 'center', margin: 0, fontSize: '20px'}}>{coin.symbol}</TableRowColumn>
						        <TableRowColumn style={{textAlign: 'center', margin: 0, fontSize: '20px'}}>{user.wallet.coinsAmount[coinIndex].toFixed(8)}</TableRowColumn>
						        <TableRowColumn style={{textAlign: 'center', margin: 0, fontSize: '20px'}}>{coin.price}</TableRowColumn>
						        <TableRowColumn style={{textAlign: 'center', margin: 0, fontSize: '20px'}}>{(coin.price * user.wallet.coinsAmount[coinIndex++]).toFixed(8)}</TableRowColumn>
							</TableRow>
						)}
					</TableBody>
					<TableFooter adjustForCheckbox={false}>
						<TableRow>
							<TableHeaderColumn colSpan="5" style={{textAlign: 'center', margin: 0, fontSize: '20px', backgroundColor:'#4EB1BA', color: '#222930'}}>
									Total Wallet Value: {total.toFixed(8)} BTC
							</TableHeaderColumn>
						</TableRow>
					</TableFooter>
				</Table>
				<div>
					<span><br/></span>
				</div>
				<Table style={{align:"center",width:'90%'}}>
					<TableHeader adjustForCheckbox={false} displaySelectAll={false}>
						<TableRow>
							<TableHeaderColumn colSpan="6" style={{textAlign: 'center', margin: 0, fontSize: '25px', backgroundColor:'#4EB1BA', color: '#222930'}}>
								Past Orders
							</TableHeaderColumn>
						</TableRow>
						<TableRow style={{textAlign: 'center', margin: 0, backgroundColor:'#4EB1BA', color: '#E9E9E9'}}>
						<TableHeaderColumn style={{textAlign: 'center', color: '#E9E9E9', margin: 0, fontSize: '20px'}}>Date/Time of Order</TableHeaderColumn>
							<TableHeaderColumn style={{textAlign: 'center', color: '#E9E9E9', margin: 0, fontSize: '20px'}}>Symbol</TableHeaderColumn>
							<TableHeaderColumn style={{textAlign: 'center', color: '#E9E9E9', margin: 0, fontSize: '20px'}}>Type</TableHeaderColumn>
							<TableHeaderColumn style={{textAlign: 'center', color: '#E9E9E9', margin: 0, fontSize: '20px'}}>Volume</TableHeaderColumn>
							<TableHeaderColumn style={{textAlign: 'center', color: '#E9E9E9', margin: 0, fontSize: '20px'}}>Price</TableHeaderColumn>
							<TableHeaderColumn style={{textAlign: 'center', color: '#E9E9E9', margin: 0, fontSize: '20px'}}>Total BTC of Order</TableHeaderColumn>
						</TableRow>
					</TableHeader>
					<TableBody displayRowCheckbox={false}>
						{user.orders && user.orders.reverse().map((order) =>
							<TableRow selectable={false} key={order.id} style={{backgroundColor:'#4EB1BA', color: '#222930'}}>
								<TableRowColumn style={{textAlign: 'center', margin: 0, fontSize: '15px'}}>{order.createdAt.split('T')[0] + ' ' + order.createdAt.split('T')[1].slice(0, -5)}</TableRowColumn>
						        <TableRowColumn style={{textAlign: 'center', margin: 0, fontSize: '20px'}}>{order.symbol}</TableRowColumn>
						        <TableRowColumn style={{textAlign: 'center', margin: 0, fontSize: '20px'}}>{order.type}</TableRowColumn>
						        <TableRowColumn style={{textAlign: 'center', margin: 0, fontSize: '20px'}}>{order.coinAmount.toFixed(8)}</TableRowColumn>
						        <TableRowColumn style={{textAlign: 'center', margin: 0, fontSize: '20px'}}>{order.price}</TableRowColumn>
						        <TableRowColumn style={{textAlign: 'center', margin: 0, fontSize: '20px'}}>{(order.coinAmount * order.price).toFixed(8)}</TableRowColumn>
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
		},
		getCurrentPrices (coins){
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
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo)
