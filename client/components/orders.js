import React, { Component } from 'react';
import { connect } from 'react-redux';

class Orders extends Component {
	render() {
		return (
			<div>
			</div>
		)
	}
}

const mapStateToProps = function(state) {
	return {}
}

const mapDispatchToProps = function(dispatch) {

}

export default connect(mapStateToProps, mapDispatchToProps)(Orders)
