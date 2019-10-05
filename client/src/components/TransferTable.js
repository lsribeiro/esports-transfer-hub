import React from 'react';

import './TransferTable.css';

function getStatus(status) {
	let newStatus;
	switch (status) {
		case 1:
			newStatus = 'Confirmed';
			break;
		case -1:
			newStatus = 'Failed';
			break;
		
		default:
			newStatus = 'Rumour';
	}

	return newStatus;
}

export default function TransferTable(props) {
	return(
		<table>
			<thead>
				<tr>
					<th>Player</th>
					<th>From</th>
					<th>To</th>
					<th>Status</th>
					<th>Sources</th>
				</tr>
			</thead>
			<tbody>
				{
					props.transferList.map((t, i) => {
						return(
							<tr key={ i }>
				 				<td>{ t.player.name }</td>
				 				<td>{ t.from_team.name }</td>
				 				<td>{ t.to_team.name }</td>
				 				<td>{ getStatus(t.status) }</td>
				 				<td><button>Sources</button></td>
							</tr>
						)
					})
				}
			</tbody>
		</table>
	);
}
