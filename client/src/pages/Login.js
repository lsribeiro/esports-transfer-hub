import React from 'react';

import './Login.css';

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	handleChange(e) {
		this.setState({[e.target.name]: e.target.value});
	}

	onSubmit(e) {
		e.preventDefault();
		fetch('/api/auth', {
			method: 'POST',
			body: JSON.stringify(this.state),
			headers: {
				'Content-type': 'application/json'
			}
		})
		.then(res => {
			if(res.status === 200) {
				this.props.history.push('/');
			} else {
				const error = new Error(res.error);
				throw error;
			}
		})
		.catch(err => {
			console.log(err); //TODO: Fix client error handling
		});
	}

	render() {
		return(
			<form onSubmit={this.onSubmit}>
  				<div className="container">
    				<label><b>Username</b></label>
    				<input type="email" placeholder="Enter Email" name="email" value={ this.state.email } onChange={ this.handleChange } required />

    				<label><b>Password</b></label>
    				<input type="password" placeholder="Enter Password" name="password" value={ this.state.password } onChange={ this.handleChange } required />

    				<button type="submit">Login</button>
  				</div>
			</form>
		);
	}
}

export default Login;
