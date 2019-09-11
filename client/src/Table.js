import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

class Table extends React.Component {
	render() {
		return(
			<MDBTable>
				<MDBTableHead>
					<tr>
						<th>Country</th>
						<th>Player</th>
						<th>From</th>
						<th>To</th>
						<th>Status</th>
						<th>Sources</th>
					</tr>
				</MDBTableHead>
				<MDBTableBody>
					{ this.props.list.map((item, i) => {
						return(
							<tr key={i}>
								<th>{item.player.country}</th>
								<th>{item.player.name}</th>
								<th>{item.from_team.name}</th>
								<th>{item.to_team.name}</th>
								<th>{item.status}</th>
								<th>BUTTON</th>
							</tr>
						);
					}) }
				</MDBTableBody>
			</MDBTable>
		);
	}
}

export default Table;
