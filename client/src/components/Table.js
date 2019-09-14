import React from 'react';
import { Table, Flag, Image, Icon, Modal, Header, Button } from 'semantic-ui-react'

const logosPath = 'team-logos/';

//TODO: Choose better name for class
class TransferTable extends React.Component {
	render() {
		return(
			<Table singleLine>
				<Table.Header>
					<Table.Row textAlign="center">
						<Table.HeaderCell>Player</Table.HeaderCell>
						<Table.HeaderCell>From</Table.HeaderCell>
						<Table.HeaderCell></Table.HeaderCell>
						<Table.HeaderCell>To</Table.HeaderCell>
						<Table.HeaderCell>Status</Table.HeaderCell>
						<Table.HeaderCell>Sources</Table.HeaderCell>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{ this.props.list.map((item, i) => {
						let status = { color: '', name: '' };
						switch(item.status) {
							case 1:
								status.color = 'green'; status.name = 'check circle outline';
								break;
							case -1:
								status.color = 'red'; status.name = 'ban';
								break;
							default:
								status.color = 'yellow'; status.name = 'question circle outline';
								break;
						}
						const news = (<Icon name='newspaper outline' size='big' />);

						return(
							<Table.Row textAlign="center" key={i}>
								<Table.Cell>
									<Flag name={item.player.country} />
									{item.player.name}
								</Table.Cell>
								<Table.Cell>
									<Image src={logosPath + item.from_team.logo} size='mini' centered/>
								</Table.Cell>
								<Table.Cell>
									<Icon name='angle double right' size='big' />
								</Table.Cell>

								<Table.Cell>
									<Image src={logosPath + item.to_team.logo} size='mini' centered/>
								</Table.Cell>
								<Table.Cell>
									<Icon color={status.color} name={status.name} size='large' />
								</Table.Cell>
								<Table.Cell>
									<Modal trigger={news}>
    									<Modal.Header>News Sources</Modal.Header>
    									{
    										item.sources.map((s, i) => {
    											return(<Modal.Content key={i}>
      												<Modal.Description>
        												<Header>{s.title}</Header>
        												<p>By: {s.author}</p>
        												<p>At: {s.origin}</p>
        												<a href={s.url} target='_blank' rel="noopener noreferrer"><Button>Open</Button></a>
      												</Modal.Description>
    											</Modal.Content>)
    										})
    									}
  									</Modal>
								</Table.Cell>
							</Table.Row>
						);
					}) }
				</Table.Body>
			</Table>
		);
	}
}

export default TransferTable;
