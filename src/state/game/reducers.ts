// eslint-disable-next-line import/no-cycle
import { UPDATE_GAME, CREATE_GAME } from './actionTypes';

// eslint-disable-next-line import/no-cycle
import { GameStateRedux } from './game.types';

const initialState: GameStateRedux = {
	getActionState: {
		requesting: false,
		success: false,
		fail: false,
	},
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const playerReducer = (state: GameStateRedux = initialState, action: any) => {
	switch (action.type) {
		case CREATE_GAME.REQUEST_START:
			// eslint-disable-next-line no-param-reassign
			delete state.errorState;

			return {
				...state,
				getActionState: {
					requesting: true,
					success: false,
					fail: false,
				},
			};
		case CREATE_GAME.REQUEST_SUCCESS:
			return {
				...state,
				getActionState: {
					requesting: false,
					success: true,
					fail: false,
				},
				data: action.payload,
			};
		case CREATE_GAME.REQUEST_FAIL:
			return {
				...state,
				getActionState: {
					requesting: false,
					success: false,
					fail: true,
				},
				errorState: action.payload,
			};
		case UPDATE_GAME.REQUEST_START:
			return {
				...state,
				getActionState: {
					requesting: true,
					success: false,
					fail: false,
				},
			};
		case UPDATE_GAME.REQUEST_SUCCESS:
			return {
				...state,
				getActionState: {
					requesting: false,
					success: true,
					fail: false,
				},
				data: action.payload,
			};
		case UPDATE_GAME.REQUEST_FAIL:
			return {
				...state,
				getActionState: {
					requesting: false,
					success: false,
					fail: true,
				},
				errorState: action.payload,
			};

		default:
			return state;
	}
};

export default playerReducer;
