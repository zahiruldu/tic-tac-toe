import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './reducersCombine';

const configureStore = (state = {}) => {
	const middleware = [thunk, logger];
	const store = createStore(rootReducer, state, applyMiddleware(...middleware));

	return store;
};

export default configureStore;
