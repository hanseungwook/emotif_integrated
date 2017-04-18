import Parse from 'parse';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';


//*****************************  LOGIN  *******************************//

function requestLogin(creds) {
	return {
		type: LOGIN_REQUEST,
		isFetching: true,
		isAuthenticated: false,
		creds
	};
}

function receiveLogin(user) {
	return {
		type: LOGIN_SUCCESS,
		isFetching: false,
		isAuthenticated: true,
		id_token: user.getAccessToken()
	};
}

function loginError(message) {
	return {
		type: LOGIN_FAILURE,
		isFetching: false,
		isAuthenticated: false,
		message
	};
}

export function loginUser(creds) {
	return dispatch => {
		dispatch(requestLogin(creds));
		Parse.User.logIn(creds.email, creds.password, {
			success: function(user) {
					localStorage.setItem('id_token', user.getSessionToken());
					dispatch(receiveLogin(user));

			},
			error: function(user, error) {
				// Show the error message somewhere and let the user try again.
				console.log("Error: " + error.code + " " + error.message);
				dispatch(loginError("error"));
			}
		});
	};
}
