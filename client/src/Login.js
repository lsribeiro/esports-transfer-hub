import React from 'react';
import { Grid, Form } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';

import './Login.css';

import authenticate from './utils/checkAuth.js';

class Login extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			email : '',
			password: '',
			loading: true,
			redirect: false
		};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.setState({[e.target.name]: e.target.value});
	}

	onSubmit = (event) => {
		event.preventDefault();
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
			console.log(err);
			alert('Error logging in'); //TODO: Replace this alert
		});
	}

	componentDidMount() {
		authenticate()
			.then((isAuthenticated) => {
				if(!isAuthenticated) {
					this.setState({ loading: false });
				} else {
					this.setState({ loading: false, redirect: true });
				}
			});
	}

	render() {
		const { loading, redirect } = this.state;
		if (loading) { return null; }
		if (redirect) { return <Redirect to="/edit" />; }

		return(
			//TODO: Improve form layout
			<Grid centered columns={3}>
				<Grid.Column>
					<Form onSubmit={this.onSubmit}>
						<p className="h5 text-center mb-4">Sign in</p>
						<Form.Input
							label="Type your email"
							icon="envelope"
							name="email"
							type="email"
							value={this.state.email}
							onChange={this.handleChange}
							required
						/>
						<Form.Input
							label="Type your password"
							icon="lock"
							name="password"
							type="password"
							value={this.state.password}
							onChange={this.handleChange}
							required
						/>
						<Form.Button>Login</Form.Button>
					</Form>
				</Grid.Column>
			</Grid>
		);
	}
}

export default Login;
