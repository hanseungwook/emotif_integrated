import fetch from 'isomorphic-fetch';

export const WAITLIST_SUCCESS = 'WAITLIST_SUCCESS';
export const WAITLIST_FAILURE = 'WAITLIST_FAILURE';
export const CHANGE_PANE 			= 'CHANGE_PANE';

export function switchPane(id) {
	return{
		type: CHANGE_PANE,
		id
	}
}


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

	console.log("joining waitlist");

	let config = {
		method: 'POST',
		headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
		body: `email=${creds.email}`
	};

	return dispatch => {

		return fetch('http://34.197.16.2:8080/api/waitlistSignup', config)
		// return fetch('http://localhost:3004/waitlist', config)
		.then(response =>
			response.json().then(user => ({ user, response }))
		).then(({ user, response }) =>  {
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
