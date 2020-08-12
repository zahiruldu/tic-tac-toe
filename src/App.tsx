/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Provider } from 'react-redux';

import configureStore from './state/store';

import Game from './views/containers/Game';

const initialState = {};

const store = configureStore(initialState);

const App: React.FC = () => {
	return (
		<Provider store={store}>
			<Game />
		</Provider>
	);
};

export default App;
