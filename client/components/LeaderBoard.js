import React, { Component } from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableFooter,
  TableRowColumn,
} from 'material-ui/Table';

export default class LeaderBoard extends Component {

	render() {
		return (
			<div align="center">
				<Table style={{width: '90%', borderRadius: 25}}>
					<TableHeader adjustForCheckbox={false} displaySelectAll={false}>
						<TableRow>
							<TableHeaderColumn colSpan="3" style={{textAlign: 'center', margin: 0, fontSize: '25px', backgroundColor:'#4EB1BA', color: '#E9E9E9'}}>
								Monthly Top 25
							</TableHeaderColumn>
						</TableRow>
						<TableRow style={{textAlign: 'center', margin: 0, backgroundColor:'#4EB1BA', color: '#E9E9E9'}}>
							<TableHeaderColumn style={{textAlign: 'center', color: '#222930', margin: 0, fontSize: '20px'}}>Rank</TableHeaderColumn>
							<TableHeaderColumn style={{textAlign: 'center', color: '#222930', margin: 0, fontSize: '20px'}}>Username</TableHeaderColumn>
							<TableHeaderColumn style={{textAlign: 'center', color: '#222930', margin: 0, fontSize: '20px'}}>Total Value of Wallet</TableHeaderColumn>
						</TableRow>
					</TableHeader>
					<TableBody displayRowCheckbox={false}>
							<TableRow selectable={false} key={1} style={{backgroundColor:'#4EB1BA', color: '#E9E9E9'}}>
						        <TableRowColumn style={{textAlign: 'center', margin: 0, fontSize: '20px'}}>1</TableRowColumn>
						        <TableRowColumn style={{textAlign: 'center', margin: 0, fontSize: '20px'}}>CryptoWhale1337</TableRowColumn>
						        <TableRowColumn style={{textAlign: 'center', margin: 0, fontSize: '20px'}}>23.2713212 BTC</TableRowColumn>
							</TableRow>
							<TableRow selectable={false} key={2} style={{backgroundColor:'#4EB1BA', color: '#E9E9E9'}}>
						        <TableRowColumn style={{textAlign: 'center', margin: 0, fontSize: '20px'}}>2</TableRowColumn>
						        <TableRowColumn style={{textAlign: 'center', margin: 0, fontSize: '20px'}}>MisterFOMO</TableRowColumn>
						        <TableRowColumn style={{textAlign: 'center', margin: 0, fontSize: '20px'}}>23.2602101 BTC</TableRowColumn>
							</TableRow>
							<TableRow selectable={false} key={3} style={{backgroundColor:'#4EB1BA', color: '#E9E9E9'}}>
						        <TableRowColumn style={{textAlign: 'center', margin: 0, fontSize: '20px'}}>3</TableRowColumn>
						        <TableRowColumn style={{textAlign: 'center', margin: 0, fontSize: '20px'}}>BitconnectIsLegit</TableRowColumn>
						        <TableRowColumn style={{textAlign: 'center', margin: 0, fontSize: '20px'}}>22.3646211 BTC</TableRowColumn>
							</TableRow>
							<TableRow selectable={false} key={4} style={{backgroundColor:'#4EB1BA', color: '#E9E9E9'}}>
						        <TableRowColumn style={{textAlign: 'center', margin: 0, fontSize: '20px'}}>4</TableRowColumn>
						        <TableRowColumn style={{textAlign: 'center', margin: 0, fontSize: '20px'}}>HODL123</TableRowColumn>
						        <TableRowColumn style={{textAlign: 'center', margin: 0, fontSize: '20px'}}>20.1715289 BTC</TableRowColumn>
							</TableRow>
							<TableRow selectable={false} key={5} style={{backgroundColor:'#4EB1BA', color: '#E9E9E9'}}>
						        <TableRowColumn style={{textAlign: 'center', margin: 0, fontSize: '20px'}}>5</TableRowColumn>
						        <TableRowColumn style={{textAlign: 'center', margin: 0, fontSize: '20px'}}>FUDmyster</TableRowColumn>
						        <TableRowColumn style={{textAlign: 'center', margin: 0, fontSize: '20px'}}>19.8713212 BTC</TableRowColumn>
							</TableRow>
							<TableRow selectable={false} key={6} style={{backgroundColor:'#4EB1BA', color: '#E9E9E9'}}>
						        <TableRowColumn style={{textAlign: 'center', margin: 0, fontSize: '20px'}}>6</TableRowColumn>
						        <TableRowColumn style={{textAlign: 'center', margin: 0, fontSize: '20px'}}>ICOsOnly</TableRowColumn>
						        <TableRowColumn style={{textAlign: 'center', margin: 0, fontSize: '20px'}}>16.5531217 BTC</TableRowColumn>
							</TableRow>
							<TableRow selectable={false} key={7} style={{backgroundColor:'#4EB1BA', color: '#E9E9E9'}}>
						        <TableRowColumn style={{textAlign: 'center', margin: 0, fontSize: '20px'}}>7</TableRowColumn>
						        <TableRowColumn style={{textAlign: 'center', margin: 0, fontSize: '20px'}}>TrianglesBro</TableRowColumn>
						        <TableRowColumn style={{textAlign: 'center', margin: 0, fontSize: '20px'}}>16.2613257 BTC</TableRowColumn>
							</TableRow>
							<TableRow selectable={false} key={8} style={{backgroundColor:'#4EB1BA', color: '#E9E9E9'}}>
						        <TableRowColumn style={{textAlign: 'center', margin: 0, fontSize: '20px'}}>8</TableRowColumn>
						        <TableRowColumn style={{textAlign: 'center', margin: 0, fontSize: '20px'}}>WheresMyLambo</TableRowColumn>
						        <TableRowColumn style={{textAlign: 'center', margin: 0, fontSize: '20px'}}>16.1213415 BTC</TableRowColumn>
							</TableRow>
							<TableRow selectable={false} key={9} style={{backgroundColor:'#4EB1BA', color: '#E9E9E9'}}>
						        <TableRowColumn style={{textAlign: 'center', margin: 0, fontSize: '20px'}}>9</TableRowColumn>
						        <TableRowColumn style={{textAlign: 'center', margin: 0, fontSize: '20px'}}>WeWillMoon</TableRowColumn>
						        <TableRowColumn style={{textAlign: 'center', margin: 0, fontSize: '20px'}}>14.2713212 BTC</TableRowColumn>
							</TableRow>
							<TableRow selectable={false} key={10} style={{backgroundColor:'#4EB1BA', color: '#E9E9E9'}}>
						        <TableRowColumn style={{textAlign: 'center', margin: 0, fontSize: '20px'}}>10</TableRowColumn>
						        <TableRowColumn style={{textAlign: 'center', margin: 0, fontSize: '20px'}}>BitcoinPurist</TableRowColumn>
						        <TableRowColumn style={{textAlign: 'center', margin: 0, fontSize: '20px'}}>14.1111327 BTC</TableRowColumn>
							</TableRow>
							<TableRow selectable={false} key={11} style={{backgroundColor:'#4EB1BA', color: '#E9E9E9'}}>
						        <TableRowColumn style={{textAlign: 'center', margin: 0, fontSize: '20px'}}>11</TableRowColumn>
						        <TableRowColumn style={{textAlign: 'center', margin: 0, fontSize: '20px'}}>TetherBetterThanMoney</TableRowColumn>
						        <TableRowColumn style={{textAlign: 'center', margin: 0, fontSize: '20px'}}>13.3433816 BTC</TableRowColumn>
							</TableRow>
							<TableRow selectable={false} key={12} style={{backgroundColor:'#4EB1BA', color: '#E9E9E9'}}>
						        <TableRowColumn style={{textAlign: 'center', margin: 0, fontSize: '20px'}}>12</TableRowColumn>
						        <TableRowColumn style={{textAlign: 'center', margin: 0, fontSize: '20px'}}>OneHardForker</TableRowColumn>
						        <TableRowColumn style={{textAlign: 'center', margin: 0, fontSize: '20px'}}>12.9360113 BTC</TableRowColumn>
							</TableRow>
							<TableRow selectable={false} key={13} style={{backgroundColor:'#4EB1BA', color: '#E9E9E9'}}>
						        <TableRowColumn style={{textAlign: 'center', margin: 0, fontSize: '20px'}}>13</TableRowColumn>
						        <TableRowColumn style={{textAlign: 'center', margin: 0, fontSize: '20px'}}>PumpAndDump</TableRowColumn>
						        <TableRowColumn style={{textAlign: 'center', margin: 0, fontSize: '20px'}}>12.8544718 BTC</TableRowColumn>
							</TableRow>
							<TableRow selectable={false} key={14} style={{backgroundColor:'#4EB1BA', color: '#E9E9E9'}}>
						        <TableRowColumn style={{textAlign: 'center', margin: 0, fontSize: '20px'}}>14</TableRowColumn>
						        <TableRowColumn style={{textAlign: 'center', margin: 0, fontSize: '20px'}}>ThisSiteIsReal</TableRowColumn>
						        <TableRowColumn style={{textAlign: 'center', margin: 0, fontSize: '20px'}}>12.0775754 BTC</TableRowColumn>
							</TableRow>
							<TableRow selectable={false} key={15} style={{backgroundColor:'#4EB1BA', color: '#E9E9E9'}}>
						        <TableRowColumn style={{textAlign: 'center', margin: 0, fontSize: '20px'}}>15</TableRowColumn>
						        <TableRowColumn style={{textAlign: 'center', margin: 0, fontSize: '20px'}}>HodorHodls</TableRowColumn>
						        <TableRowColumn style={{textAlign: 'center', margin: 0, fontSize: '20px'}}>11.4818953 BTC</TableRowColumn>
							</TableRow>
							<TableRow selectable={false} key={16} style={{backgroundColor:'#4EB1BA', color: '#E9E9E9'}}>
						        <TableRowColumn style={{textAlign: 'center', margin: 0, fontSize: '20px'}}>16</TableRowColumn>
						        <TableRowColumn style={{textAlign: 'center', margin: 0, fontSize: '20px'}}>Miner707</TableRowColumn>
						        <TableRowColumn style={{textAlign: 'center', margin: 0, fontSize: '20px'}}>11.0730534 BTC</TableRowColumn>
							</TableRow>
							<TableRow selectable={false} key={17} style={{backgroundColor:'#4EB1BA', color: '#E9E9E9'}}>
						        <TableRowColumn style={{textAlign: 'center', margin: 0, fontSize: '20px'}}>17</TableRowColumn>
						        <TableRowColumn style={{textAlign: 'center', margin: 0, fontSize: '20px'}}>Doge</TableRowColumn>
						        <TableRowColumn style={{textAlign: 'center', margin: 0, fontSize: '20px'}}>10.7929002 BTC</TableRowColumn>
							</TableRow>
							<TableRow selectable={false} key={18} style={{backgroundColor:'#4EB1BA', color: '#E9E9E9'}}>
						        <TableRowColumn style={{textAlign: 'center', margin: 0, fontSize: '20px'}}>18</TableRowColumn>
						        <TableRowColumn style={{textAlign: 'center', margin: 0, fontSize: '20px'}}>DPCrypto</TableRowColumn>
						        <TableRowColumn style={{textAlign: 'center', margin: 0, fontSize: '20px'}}>10.5470605 BTC</TableRowColumn>
							</TableRow>
							<TableRow selectable={false} key={19} style={{backgroundColor:'#4EB1BA', color: '#E9E9E9'}}>
						        <TableRowColumn style={{textAlign: 'center', margin: 0, fontSize: '20px'}}>19</TableRowColumn>
						        <TableRowColumn style={{textAlign: 'center', margin: 0, fontSize: '20px'}}>DogeCoin4Lyfe</TableRowColumn>
						        <TableRowColumn style={{textAlign: 'center', margin: 0, fontSize: '20px'}}>9.9581397 BTC</TableRowColumn>
							</TableRow>
							<TableRow selectable={false} key={20} style={{backgroundColor:'#4EB1BA', color: '#E9E9E9'}}>
						        <TableRowColumn style={{textAlign: 'center', margin: 0, fontSize: '20px'}}>20</TableRowColumn>
						        <TableRowColumn style={{textAlign: 'center', margin: 0, fontSize: '20px'}}>AltCoinFiend</TableRowColumn>
						        <TableRowColumn style={{textAlign: 'center', margin: 0, fontSize: '20px'}}>9.8449373 BTC</TableRowColumn>
							</TableRow>
							<TableRow selectable={false} key={21} style={{backgroundColor:'#4EB1BA', color: '#E9E9E9'}}>
						        <TableRowColumn style={{textAlign: 'center', margin: 0, fontSize: '20px'}}>21</TableRowColumn>
						        <TableRowColumn style={{textAlign: 'center', margin: 0, fontSize: '20px'}}>BullyingTheBear</TableRowColumn>
						        <TableRowColumn style={{textAlign: 'center', margin: 0, fontSize: '20px'}}>8.5535272 BTC</TableRowColumn>
							</TableRow>
							<TableRow selectable={false} key={22} style={{backgroundColor:'#4EB1BA', color: '#E9E9E9'}}>
						        <TableRowColumn style={{textAlign: 'center', margin: 0, fontSize: '20px'}}>22</TableRowColumn>
						        <TableRowColumn style={{textAlign: 'center', margin: 0, fontSize: '20px'}}>WhalingAway</TableRowColumn>
						        <TableRowColumn style={{textAlign: 'center', margin: 0, fontSize: '20px'}}>8.2588156 BTC</TableRowColumn>
							</TableRow>
							<TableRow selectable={false} key={23} style={{backgroundColor:'#4EB1BA', color: '#E9E9E9'}}>
						        <TableRowColumn style={{textAlign: 'center', margin: 0, fontSize: '20px'}}>23</TableRowColumn>
						        <TableRowColumn style={{textAlign: 'center', margin: 0, fontSize: '20px'}}>GreenCandleSticks</TableRowColumn>
						        <TableRowColumn style={{textAlign: 'center', margin: 0, fontSize: '20px'}}>7.9154331 BTC</TableRowColumn>
							</TableRow>
							<TableRow selectable={false} key={24} style={{backgroundColor:'#4EB1BA', color: '#E9E9E9'}}>
						        <TableRowColumn style={{textAlign: 'center', margin: 0, fontSize: '20px'}}>24</TableRowColumn>
						        <TableRowColumn style={{textAlign: 'center', margin: 0, fontSize: '20px'}}>JohnMcAfee</TableRowColumn>
						        <TableRowColumn style={{textAlign: 'center', margin: 0, fontSize: '20px'}}>6.3276916 BTC</TableRowColumn>
							</TableRow>
							<TableRow selectable={false} key={25} style={{backgroundColor:'#4EB1BA', color: '#E9E9E9'}}>
						        <TableRowColumn style={{textAlign: 'center', margin: 0, fontSize: '20px'}}>25</TableRowColumn>
						        <TableRowColumn style={{textAlign: 'center', margin: 0, fontSize: '20px'}}>AllInOnCrypto</TableRowColumn>
						        <TableRowColumn style={{textAlign: 'center', margin: 0, fontSize: '20px'}}>5.2269044 BTC</TableRowColumn>
							</TableRow>
							
					</TableBody>
				</Table>
			</div>
		)
	}
}
