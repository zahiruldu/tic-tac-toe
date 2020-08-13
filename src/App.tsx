/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './state/store';

import Game from './views/containers/Game';

// const initialState = {};

// const store = configureStore(initialState);

const App: React.FC = () => {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<Game />
			</PersistGate>
		</Provider>
	);
};

export default App;
