import React from 'react';
import './Home.css';

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
			<div>
				<h1>Esports Transfer Hub</h1>
				{transfers.length ? (
					<table>
						<thead>
							<th>Player</th>
							<th>From</th>
							<th>To</th>
							<th>Status</th>
						</thead>
						<tbody>
							{ transfers.map((item) => {
								return(
								<tr>
									<td>{item.player.name}</td>
									<td>{item.from_team.name}</td>
									<td>{item.to_team.name}</td>
									<td>{item.status}</td>
								</tr>
								);
							}) }
						</tbody>
					</table>
				) : (
					<h1>Empty List</h1>
				)}
			</div>
		);
	}
}

export default Home;
