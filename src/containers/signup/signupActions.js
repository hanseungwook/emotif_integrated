import fetch from 'isomorphic-fetch';

export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';


//*****************************  SIGNUP  *******************************//

function requestSignup(creds) {
	return {
		type: SIGNUP_REQUEST,
		isFetching: true,
		isAuthenticated: false,
		creds
	};
}

function receiveSignup(user) {
	return {
		type: SIGNUP_SUCCESS,
		isFetching: false,
		isAuthenticated: true,
		id_token: user.id_token
	};
}

function signupError(message) {
	return {
		type: SIGNUP_FAILURE,
		isFetching: false,
		isAuthenticated: false,
		message
	};
}

export function signupUser(creds) {

	let config = {
		method: 'POST',
		headers: {
			'X-Parse-Application-Id': 'emotifAppId',
			'X-Parse-REST-API-Key': 'emotifMasterKey',
		'Content-Type': 'application/x-www-form-urlencoded'
		},
		body: JSON.stringify({
			email: `${creds.email}`,
			password: `${creds.password}`,
			username: `${creds.email}`,
			userType: 'value',
			stripeId: 'value'
		})
	};

	return dispatch => {

		dispatch(requestSignup(creds));

		return fetch('http://emotif-parse-dev.us-east-1.elasticbeanstalk.com/parse/classes/_User', config)
		.then(response =>
			response.json().then(user => ({ user, response }))
		).then(({ user, response }) =>  {
			// ERROR
			if (!response.ok) {
				dispatch(signupError(user.message));
				return Promise.reject(user);
			// SUCCESS
			} else {
				localStorage.setItem('id_token', user.id_token);
				dispatch(receiveSignup(user));
			}
		}).catch(err => console.log("Error: ", err));
	};
}




