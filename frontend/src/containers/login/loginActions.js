import fetch from 'isomorphic-fetch';
import URLSearchParams from 'url-search-params';

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
		id_token: user.id_token
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

    const searchParams = new URLSearchParams();
    searchParams.set('password', creds.password);
    searchParams.set('username', creds.email);


	let config = {
		method: 'GET',
		headers: {
			'X-Parse-Application-Id': 'emotifAppId',
			'X-Parse-REST-API-Key': 'emotifRestKey',
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		body: searchParams
	};

	return dispatch => {
		dispatch(requestLogin(creds));
		return fetch('http://emotif-parse-dev.us-east-1.elasticbeanstalk.com/parse/classes/_User', config)
		.then(response =>
			response.json().then(user => ({ user, response }))
		).then(({ user, response }) =>  {
			// ERROR
			if (!response.ok) {
				dispatch(loginError(user.message));
				return Promise.reject(user);
			// SUCCESS
			} else {
				localStorage.setItem('id_token', user.id_token);
				dispatch(receiveLogin(user));
			}
		}).catch(err => console.log("Error: ", err));
	};
}





