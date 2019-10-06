import { LOG_IN, LOG_OUT, GET_USER } from '../actions/authActions';

const initialState = {
	loggedIn: false,
	user: {
		id: '',
		email: '',
	}
}

export default function authReducer(state=initialState, action) {
	switch (action.type) {
		case LOG_IN:
			return {
				loggedIn: true,
				user: action.data
			}
		case LOG_OUT:
			return state;
		case GET_USER:
			return {
				loggedIn: true,
				user: {
					id: action.data._id,
					email: action.data.email
				}
			}
		default:
			return state;
	}
}
