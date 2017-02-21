import fetch from 'isomorphic-fetch';

export const QUOTE_REQUEST = 'QUOTE_REQUEST';
export const QUOTE_SUCCESS = 'QUOTE_SUCCESS';
export const QUOTE_FAILURE = 'QUOTE_FAILURE';

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


