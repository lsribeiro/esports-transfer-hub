import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
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
		authenticate().then((isAuthenticated) => {
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
			<MDBContainer>
				<MDBRow center>
					<MDBCol lg="6" md="8" sm="10">
						<form onSubmit={this.onSubmit}>
							<p className="h5 text-center mb-4">Sign in</p>
							<div className="grey-text">
								<MDBInput
									label="Type your email"
									icon="envelope"
									name="email"
									type="email"
									value={this.state.email}
									onChange={this.handleChange}
									required
									validate
								/>
								<MDBInput
									label="Type your password"
									icon="lock"
									name="password"
									type="password"
									value={this.state.password}
									onChange={this.handleChange}
									required
									validate
								/>
							</div>
							<div className="text-center">
								<MDBBtn type="submit">Login</MDBBtn>
							</div>
						</form>
					</MDBCol>
				</MDBRow>
			</MDBContainer>
		);
	}
}

export default Login;
