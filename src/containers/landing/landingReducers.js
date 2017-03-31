import { WAITLIST_SUCCESS, WAITLIST_FAILURE, CHANGE_PANE } from './landingActions';

const landingReducer = ( state = { paneId:1, isFetching: false,
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
		case CHANGE_PANE:
			return Object.assign({}, state, {
				paneId: action.id
			});
		default:
			return state;
	}
};

export default landingReducer;
