import fetch from 'isomorphic-fetch';

export const PRODUCT_REQUEST = 'PRODUCT_REQUEST';
export const PRODUCT_SUCCESS = 'PRODUCT_SUCCESS';
export const PRODUCT_FAILURE = 'PRODUCT_FAILURE';

function requestProducts() {
	return {
		type: PRODUCT_REQUEST
	};
}

function receiveProducts(products) {
	return {
		type: PRODUCT_SUCCESS,
		authenticated: true,
		products
	};
}

function productError(error) {
	return {
		type: PRODUCT_FAILURE,
		error
	};
}




export function callApi(endpoint, authenticated) {

	return dispatch => {
		dispatch(requestProducts());

		return fetch('http://localhost:1337/' + endpoint)
			.then(response =>
				response.text().then(text => ({ text, response }))
			)
			.then(({ text, response }) => {
				if (!response.ok) {
					dispatch(productError(text));
					return Promise.reject(text);
				}
				dispatch(receiveProducts(text));
			})
			.catch(err => console.log(err));
	};
}