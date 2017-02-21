// This file merely configures the store for hot reloading.

import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from '../containers';

import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

export default function configureStore(initialState) {

	const logger = createLogger();

	const store = createStore(rootReducer, initialState, compose(
		applyMiddleware(thunk, logger),
		window.devToolsExtension ? window.devToolsExtension() : f => f // add support for Redux dev tools
	));

	if (module.hot) {
		// Enable Webpack hot module replacement for reducers
		module.hot.accept('../containers', () => {
			const nextReducer = require('../containers').default; // eslint-disable-line global-require
			store.replaceReducer(nextReducer);
		});
	}

	return store;
}
