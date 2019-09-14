import React from 'react';
import { Form } from 'semantic-ui-react';

class SourceFormInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			author: '',
			origin: '',
			url: ''
		};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.setState({[e.target.name]: e.target.value}, () => this.props.formChange(this.state, this.props.id));
	}

	render() {
		return(
			<Form>
				<Form.Group>
					<Form.Input label='Title' name='title' onChange={this.handleChange}/>
					<Form.Input label='Author' name='author' onChange={this.handleChange}/>
					<Form.Input label='Origin' name='origin' onChange={this.handleChange}/>
					<Form.Input label='Url' name='url' onChange={this.handleChange}/>
				</Form.Group>
			</Form>
		);
	}
}

export default SourceFormInput;
