import React from 'react';
import { Container, Button } from 'semantic-ui-react'
import TransferFormInput from './input/TransferFormInput';
import SourceFormInput from './input/SourceFormInput';

class TransferForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			transfer: {
				player: {
					country: '',
					name: ''
				},
				from_team: {
					logo: '',
					name: ''
				},
				to_team: {
					logo: '',
					name: ''
				},
				status: 0,
				sources: [],
				game: ''
			},

			sourceList: [{
				title: '',
				author: '',
				origin: '',
				url: '',
			}],
			sourceCount: 1
		};
		this.handleSourceForm = this.handleSourceForm.bind(this);
		this.handleTransferForm = this.handleTransferForm.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleNewSource = this.handleNewSource.bind(this);
	}

	handleSourceForm(sources, id) {
		console.log(sources);
		console.log(id);

		let list = this.state.sourceList;
		list[id] = sources;

		this.setState({sourceList: list });
	}

	handleTransferForm(t) {
		let transfer = {
			player: {
				country: t.country,
				name: t.player_name
			},
			from_team: {
				logo: t.from_team,
				name: t.from_team
			},
			to_team: {
				logo: t.to_team,
				name: t.to_team
			},
			status: t.status,
			game: t.game
		};

		this.setState({ transfer: transfer });
	}

	async handleSubmit() {
		let newTransfer = this.state.transfer;
		newTransfer.sources = this.state.sourceList;
		console.log(JSON.stringify(newTransfer));

		await fetch('/api/transfers',
			{
				method: 'post',
				body: JSON.stringify(newTransfer),
				headers: {
					'Content-Type': 'application/json'
				}
			})
			.then(res => res.json())
			.then(data => console.log('Created transfer'));
	}

	handleNewSource() {
		console.log('Adding new source');	
		console.log(this.state.sourceList);
		this.setState({
			sourceList: [...this.state.sourceList, {title:'', author:'', origin:'', url:''}],
			sourceCount: this.state.sourceCount+1
		});
	}

	render() {
		let sourceInputs = []
		for(let i = 0; i < this.state.sourceCount; i++) {
			sourceInputs.push(<SourceFormInput key={i} id={i} formChange={this.handleSourceForm}/>);
		}
		return(
			<Container>
				<TransferFormInput formChange={this.handleTransferForm}/>
				{sourceInputs}		
				<Button onClick={this.handleNewSource} basic color='blue'>
					Source
				</Button>
				<br/>
				<br/>
				<Button onClick={this.handleSubmit} basic color='green'>
      				Add Transfer
    			</Button>
			</Container>
		);
	}
}

export default TransferForm;
