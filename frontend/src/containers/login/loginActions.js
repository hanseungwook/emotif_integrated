import Parse from 'parse';
import { browserHistory } from 'react-router';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

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
        if(validateEmail(creds.email)) {
    		Parse.User.logIn(creds.email, creds.password, {
    			success: function(user) {
    					localStorage.setItem('id_token', user.getSessionToken());
    					dispatch(receiveLogin(user));
                        browserHistory.push('/');
    			},
    			error: function(user, error) {
    				// Show the error message somewhere and let the user try again.
    				console.log("Error: " + error.code + " " + error.message);
    				dispatch(loginError(error.message));
    			}
    		});
        }
        else {
            dispatch(loginError("Invalid email format"));
        }
	};
}

function validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

//***************************** LOGOUT  *******************************//
function requestLogout() {
  return {
    type: LOGOUT_REQUEST,
    isFetching: true,
    isAuthenticated: true
  };
}

function receiveLogout() {
  return {
    type: LOGOUT_SUCCESS,
    isFetching: false,
    isAuthenticated: false
  };
}

// Logs the user out
export function logoutUser() {
  return dispatch => {
    dispatch(requestLogout());
    localStorage.removeItem('id_token');
    dispatch(receiveLogout());
  };
}
