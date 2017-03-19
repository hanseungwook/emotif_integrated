import {
	QUOTE_REQUEST, QUOTE_SUCCESS, QUOTE_FAILURE,
	LOGOUT_SUCCESS, LOGOUT_FAILURE
} from './dashboardActions';

const data = (state = { isFetching: false, quotes: '', authenticated: false }, action) => {
	switch (action.type) {
	case QUOTE_REQUEST:
		return Object.assign({}, state, {
			isFetching: true
		});
	case QUOTE_SUCCESS:
		return Object.assign({}, state, {
			isFetching: false,
			quotes: action.quotes,
			authenticated: action.authenticated || false
		});
	case QUOTE_FAILURE:
		return Object.assign({}, state, {
			isFetching: false
		});
	case LOGOUT_SUCCESS:
		return Object.assign({}, state, {
			isFetching: false,
			authenticated: false
		});
	case LOGOUT_FAILURE:
		return Object.assign({}, state, {
			isFetching: false,
			authenticated: action.authenticated || false
		});
	default:
		return state;
	}
};

export default data;