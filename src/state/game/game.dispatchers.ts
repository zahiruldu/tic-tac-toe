/* eslint-disable @typescript-eslint/no-explicit-any */
// Library imports
import { Dispatch } from 'redux';

// File imports
import { createGameActions, updateGameActions } from './actions';

import GameApi from '../../HTTP/game/game';
import { GamePlayPayload } from './game.types';
import { SessionIdType } from '../../HTTP/game/game.types';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const initiateNewGame = (payload: SessionIdType) => async (dispatch: Dispatch): Promise<any> => {
	try {
		// Dispatch start action
		dispatch(createGameActions.createGameRequestStart());

		// Call API
		const response = await GameApi.create(payload);

		if (response.status === 200) {
			// Dispatch success action
			dispatch(createGameActions.createGameRequestSuccess(response?.data));
		}
	} catch (error) {
		// Dispatch fail action
		dispatch(createGameActions.createGameRequestFail(error));
	}
};

const updateGame = (payload: GamePlayPayload) => async (dispatch: Dispatch): Promise<any> => {
	try {
		// Dispatch start action
		dispatch(updateGameActions.updateGameRequestStart());

		// Call API

		const response = await GameApi.update(payload.sessionId, payload.data);

		if (response.status === 200) {
			// Dispatch success action
			dispatch(updateGameActions.updateGameRequestSuccess(response?.data));
		}
	} catch (error) {
		// Dispatch fail action
		dispatch(updateGameActions.updateGameRequestFail(error));
	}
};

export default {
	initiateNewGame,
	updateGame,
};
