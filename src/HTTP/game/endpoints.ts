import apiEndpoints from '../apiEndpoints';
import { SessionIdType } from './game.types';

/* eslint-disable @typescript-eslint/no-explicit-any */

const endpoints = Object.freeze({
	ALL: apiEndpoints.GAME.ALL,
	CREATE: apiEndpoints.GAME.CREATE,
	UPDATE: (id: SessionIdType) => apiEndpoints.GAME.UPDATE(id),
	GAME_INFO: (id: SessionIdType) => apiEndpoints.GAME.GAME_INFO(id),
	DELETE: (id: SessionIdType) => apiEndpoints.GAME.DELETE(id),
});

export default endpoints;
