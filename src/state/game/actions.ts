/* eslint-disable @typescript-eslint/no-explicit-any */
import { UPDATE_GAME, CREATE_GAME } from './actionTypes';
import { ActionReturnType } from '../store.types';
import { GamePayload, ApiError } from './game.types';

// Actions for Create Game
export const createGameActions = {
	createGameRequestStart: (): ActionReturnType => ({
		type: CREATE_GAME.REQUEST_START,
	}),
	createGameRequestSuccess: (payload: GamePayload): ActionReturnType<any> => ({
		type: CREATE_GAME.REQUEST_SUCCESS,
		payload,
	}),
	createGameRequestFail: (payload: ApiError): ActionReturnType<any> => ({
		type: CREATE_GAME.REQUEST_FAIL,
		payload,
	}),
};

// Actions for Update Game
export const updateGameActions = {
	updateGameRequestStart: (): ActionReturnType => ({
		type: UPDATE_GAME.REQUEST_START,
	}),
	updateGameRequestSuccess: (payload: GamePayload): ActionReturnType<any> => ({
		type: UPDATE_GAME.REQUEST_SUCCESS,
		payload,
	}),
	updateGameRequestFail: (payload: ApiError): ActionReturnType<any> => ({
		type: UPDATE_GAME.REQUEST_FAIL,
		payload,
	}),
};
