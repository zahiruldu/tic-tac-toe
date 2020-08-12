import apiEndpoints from '../apiEndpoints';

/* eslint-disable @typescript-eslint/no-explicit-any */

const endpoints = Object.freeze({
	ALL: apiEndpoints.GAME.ALL,
	CREATE: apiEndpoints.GAME.CREATE,
	UPDATE: (id: string | number) => apiEndpoints.GAME.UPDATE(id),
	GAME_INFO: (id: string | number) => apiEndpoints.GAME.GAME_INFO(id),
	DELETE: (id: string | number) => apiEndpoints.GAME.DELETE(id),
});

export default endpoints;
