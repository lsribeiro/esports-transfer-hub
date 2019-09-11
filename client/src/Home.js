import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
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
			<MDBContainer>
				<MDBRow center>
					<MDBCol lg="8" md="10" sm="12">
						<Tabs/>
						<Table list={transfers} />
					</MDBCol>
				</MDBRow>
			</MDBContainer>
		);
	}
}

export default Home;
