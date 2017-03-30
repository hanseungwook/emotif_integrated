import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE,
		LOGOUT_SUCCESS,
		WAITLIST_SUCCESS, WAITLIST_FAILURE } from './loginActions';

const login = ( state = { isFetching: false, isAuthenticated: localStorage.getItem('id_token') ? true : false }, action) => {
	switch (action.type) {
	case WAITLIST_FAILURE:
		return Object.assign({}, state, {
			isFetching: false,
			isAuthenticated: false,
			errorMessage: action.message
		});
	case WAITLIST_SUCCESS:
		return Object.assign({}, state, {
			isFetching: false,
			isAuthenticated: false,
			errorMessage: ''
		});
	case LOGIN_REQUEST:
		return Object.assign({}, state, {
			isFetching: true,
			isAuthenticated: false,
			user: action.creds
		});
	case LOGIN_SUCCESS:
		return Object.assign({}, state, {
			isFetching: false,
			isAuthenticated: true,
			errorMessage: ''
		});
	case LOGIN_FAILURE:
		return Object.assign({}, state, {
			isFetching: false,
			isAuthenticated: false,
			errorMessage: action.message
		});
	case LOGOUT_SUCCESS:
		return Object.assign({}, state, {
			isFetching: true,
			isAuthenticated: false
		});
	default:
		return state;
	}
};

export default login;
