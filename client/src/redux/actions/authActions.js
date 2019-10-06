import authenticate from '../../utils/checkAuth.js';

export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const GET_USER = 'GET_USER';

function handleLogIn(data) {
	return {
		type: LOG_IN,
		data
	};
}

function handleUser(data) {
	return {
		type: GET_USER,
		data
	};
}

//TODO: dispatch errors

export function getUser() {
	return dispatch => {
		authenticate
			.then(user => dispatch(handleUser(user)))
			.catch(err => console.log(err));
	};
};
export function logIn(user) {
	return dispatch => {
		return fetch('/api/auth', {
			method: 'POST',
			headers: new Headers({
				"Content-type": "application/json"
			}),
			body: JSON.stringify(user)
		})
		.then(() => dispatch(handleLogIn(user))) //TODO: Logging in returns success message instead of user, fix it
		.catch(err => console.log(err))
	}
}
