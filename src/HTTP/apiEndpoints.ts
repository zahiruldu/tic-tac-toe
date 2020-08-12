/* eslint-disable @typescript-eslint/explicit-function-return-type */

const apiEndpoints = Object.freeze({
	GAME: {
		ALL: '/games',
		CREATE: '/games',
		UPDATE: (id: string | number) => `/games/${id}`,
		GAME_INFO: (id: string | number) => `/games/${id}`,
		DELETE: (id: string | number) => `/games/${id}`,
	},
});

export default apiEndpoints;
