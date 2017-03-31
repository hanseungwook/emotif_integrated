import fetch from 'isomorphic-fetch';

export const QUOTE_REQUEST = 'QUOTE_REQUEST';
export const QUOTE_SUCCESS = 'QUOTE_SUCCESS';
export const QUOTE_FAILURE = 'QUOTE_FAILURE';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

function requestQuote() {
	return {
		type: QUOTE_REQUEST
	};
}

function receiveQuote(quotes) {
	return {
		type: QUOTE_SUCCESS,
		authenticated: true,
		quotes
	};
}

function quoteError(error) {
	return {
		type: QUOTE_FAILURE,
		error
	};
}

export function callApi(endpoint, authenticated) {

	let token = localStorage.getItem('id_token') || null;
	let config = {};

	return dispatch => {
		dispatch(requestQuote());

		if(authenticated) {
			if(token) {
				config = {
					headers: { 'Authorization': `Bearer ${token}` }
				};
			}
			else {
				throw "No token saved!";
			}
		}

		return fetch('http://localhost:6001/api/' + endpoint, config)
			.then(response =>
				response.text().then(text => ({ text, response }))
			)
			.then(({ text, response }) => {
				if (!response.ok) {
					dispatch(quoteError(text));
					return Promise.reject(text);
				}
				dispatch(receiveQuote(text));
			})
			.catch(err => console.log(err));
	};
}

//***************************  LOGOUT  *******************************//



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
