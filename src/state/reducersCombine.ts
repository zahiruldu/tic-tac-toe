/* eslint-disable @typescript-eslint/no-explicit-any */
// Library imports
import { combineReducers, Reducer, CombinedState } from 'redux';

// File imports
// eslint-disable-next-line import/no-cycle
import playerReducer from './game/reducers';

const rootReducer: Reducer<CombinedState<any>> = combineReducers({
	playerReducer,
});

export default rootReducer;
