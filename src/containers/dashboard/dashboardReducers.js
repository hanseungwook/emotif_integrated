import {
	QUOTE_REQUEST, QUOTE_SUCCESS, QUOTE_FAILURE
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
	default:
		return state;
	}
};

export default data;
