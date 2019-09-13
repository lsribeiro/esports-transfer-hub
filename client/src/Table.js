import React from 'react';
import { Table } from 'semantic-ui-react'

//TODO: Choose better name for class
class TransferTable extends React.Component {
	render() {
		return(
			<Table singleLine>
				<Table.Header>
					<Table.Row textAlign="center">
						<Table.HeaderCell>Country</Table.HeaderCell>
						<Table.HeaderCell>Player</Table.HeaderCell>
						<Table.HeaderCell>From</Table.HeaderCell>
						<Table.HeaderCell>To</Table.HeaderCell>
						<Table.HeaderCell>Status</Table.HeaderCell>
						<Table.HeaderCell>Sources</Table.HeaderCell>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{ this.props.list.map((item, i) => {
						return(
							<Table.Row textAlign="center" key={i}>
								<Table.Cell>{item.player.country}</Table.Cell>
								<Table.Cell>{item.player.name}</Table.Cell>
								<Table.Cell>{item.from_team.name}</Table.Cell>
								<Table.Cell>{item.to_team.name}</Table.Cell>
								<Table.Cell>{item.status}</Table.Cell>
								<Table.Cell>BUTTON</Table.Cell>
							</Table.Row>
						);
					}) }
				</Table.Body>
			</Table>
		);
	}
}

export default TransferTable;
