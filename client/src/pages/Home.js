import React from 'react';

import TransferTable from '../components/TransferTable';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			transferList:  []
		};
	}

	getTransferList() {
		fetch('/api/transfers')
			.then(res => res.json())
			.then(transferList => this.setState({ transferList }));
	}

	componentDidMount() {
		this.getTransferList();
	}

	render() {
		return (
			<TransferTable transferList={ this.state.transferList } />
		);
	}
}

export default Home;
