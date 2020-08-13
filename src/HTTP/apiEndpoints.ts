/* eslint-disable @typescript-eslint/explicit-function-return-type */

import { SessionIdType } from './game/game.types';

const apiEndpoints = Object.freeze({
	GAME: {
		ALL: '/games',
		CREATE: '/games',
		UPDATE: (id: SessionIdType) => `/games/${id}`,
		GAME_INFO: (id: SessionIdType) => `/games/${id}`,
		DELETE: (id: SessionIdType) => `/games/${id}`,
	},
});

export default apiEndpoints;
