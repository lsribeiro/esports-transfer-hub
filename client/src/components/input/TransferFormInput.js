import React from 'react';
import { Form, Dropdown } from 'semantic-ui-react';

import { countryList, statusList, gameList } from '../../utils/dropdownLists';
import { logosList } from '../../utils/logosList';

class TransferFormInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			country: '',
			player_name: '',
			from_team: '',
			to_team: '',
			status: 0,
			game: '',
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleDropdownChange = this.handleDropdownChange.bind(this);
		this.dropdown = this.dropdown.bind(this);
	}

	//TODO: Slow
	handleChange(e) {
		this.setState({[e.target.name]: e.target.value}, () => this.props.formChange(this.state));
	}

	handleDropdownChange(e, data) {
		this.setState({[data.name]: data.value}, () => this.props.formChange(this.state));
	}

	dropdown(e){
		let options = [];

		if(e.name === "country") {
			options = countryList;
		} else if(e.name === "from_team" || e.name === "to_team") {
			options = logosList;
		} else if(e.name === "status") {
			options = statusList;
		} else if(e.name === "game") {
			options = gameList;
		}

		return(
			<Dropdown
				labeled
				search
				options={options}
				selection
				onChange={this.handleDropdownChange}
				name={e.name}
				value={e.value}
			/>
		);
	}

	render() {
		return(
			<Form>
				<Form.Group>
					<Form.Input name="country" label='Country' control={this.dropdown}/>
					<Form.Input name="player_name" label='Player' onChange={this.handleChange}/>
					<Form.Input name="from_team" label='From' control={this.dropdown}/>
					<Form.Input name="to_team" label='To' control={this.dropdown}/>
					<Form.Input name="status" label='Status' control={this.dropdown}/>
					<Form.Input name="game" label='Game' control={this.dropdown}/>
				</Form.Group>
			</Form>
		);
	}
}

export default TransferFormInput;
