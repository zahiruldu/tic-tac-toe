import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel1 from 'redux-persist/lib/stateReconciler/autoMergeLevel1';

import rootReducer from './reducersCombine';

const persistConfig = {
	key: 'root',
	stateReconciler: autoMergeLevel1, // Reconcile level
	storage,
	whitelist: [
		/**
		 * - Persist only those reducers
		 * - Reducer names here
		 */
		'playerReducer',
	],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk, logger];
export const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(...middleware)));

export const persistor = persistStore(store);
