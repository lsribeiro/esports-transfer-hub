import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { logIn } from '../redux/actions/authActions';

import LoginForm from '../components/LoginForm';

import './Login.css';

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit(data) {
		this.props.logIn(data);
	}

	render() {
		if(this.props.auth.loggedIn) {
			return <Redirect to='/' />
		}

		return(
			<LoginForm onSubmit={ this.onSubmit } />
		);
	}
}

Login = connect(state => {
	return {
		auth: state.auth
	};
}, { logIn })(Login);

export default Login;
