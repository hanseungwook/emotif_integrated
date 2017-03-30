import fetch from 'isomorphic-fetch';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

export const WAITLIST_SUCCESS = 'WAITLIST_SUCCESS';
export const WAITLIST_FAILURE = 'WAITLIST_FAILURE';


//*****************************  WAITLIST  *******************************//

function waitlistSuccess() {
	return {
		type: WAITLIST_SUCCESS
	};
}

function waitlistError(message) {
	return {
		type: WAITLIST_FAILURE,
		message
	};
}

export function joinWaitlist(creds) {

  let api_endpoint = 'http://34.197.16.2:8080/api/';
  let waitlist_endpoint = api_endpoint + 'waitlistSignup';

	console.log("joining waitlist");
	let config = {
		method: 'POST',
		headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
		body: `email=${creds.email}`
	};
	return dispatch => {
		return
    fetch(waitlist_endpoint, config)
		.then(response =>
			response.json().then(user => ({ user, response }))
		)
    .then(({ user, response }) =>  {
			// ERROR
			if (!response.ok) {
				console.log("waitlist error");
				dispatch(waitlistError(user.message));
				return Promise.reject(user);
			// SUCCESS
			} else {
				console.log("confirmed waitlist");
				dispatch(waitlistSuccess());
			}
		}).catch(err => console.log("Error: ", err));
	};
}
