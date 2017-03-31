import { WAITLIST_SUCCESS, WAITLIST_FAILURE } from './landingActions';

const landingReducer = ( state = {isFetching: false,
	isAuthenticated: localStorage.getItem('id_token') ? true : false }, action) =>
{
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
		default:
			return state;
	}
};

export default landingReducer;
