// eslint-disable-next-line import/no-cycle
import { ActionTypeGroup } from '../store.types';

export const UPDATE_GAME: ActionTypeGroup = {
	REQUEST_START: 'UPDATE_GAME_REQUEST_START',
	REQUEST_SUCCESS: 'UPDATE_GAME_REQUEST_SUCCESS',
	REQUEST_FAIL: 'UPDATE_GAME_REQUEST_FAIL',
};

export const CREATE_GAME: ActionTypeGroup = {
	REQUEST_START: 'CREATE_GAME_REQUEST_START',
	REQUEST_SUCCESS: 'CREATE_GAME_REQUEST_SUCCESS',
	REQUEST_FAIL: 'CREATE_GAME_REQUEST_FAIL',
};
