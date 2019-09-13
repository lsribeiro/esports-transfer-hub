import React from 'react';
import { Grid } from 'semantic-ui-react'

import './Home.css';

import Tabs from './Tabs';
import Table from './Table';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			transfers: []
		};
	}

	componentDidMount() {
		this.getList();
	}

	getList = () => {
		fetch('/api/transfers')
			.then(res => res.json())
			.then(transfers => this.setState({ transfers }));
	}

	render() {
		const { transfers } = this.state;

		return(
			<React.Fragment>
				<Grid centered columns={3}>
					<Grid.Column>
						<Tabs/>
					</Grid.Column>
				</Grid>
				<Grid centered columns={2}>
					<Grid.Column>
						<Table list={transfers} />
					</Grid.Column>
				</Grid>
			</React.Fragment>
		);
	}
}

export default Home;
