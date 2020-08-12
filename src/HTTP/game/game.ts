/* eslint-disable @typescript-eslint/no-explicit-any */
// Library imports
import { AxiosResponse } from 'axios';

// File imports
import http from '../../plugins/axios';
import endpoints from './endpoints';
import { GamePlayInfo, SessionIdType } from './game.types';

class GameApi {
	static getAll(): Promise<AxiosResponse<any>> {
		return http.get(endpoints.ALL);
	}

	static create(sessionId: SessionIdType): Promise<AxiosResponse<any>> {
		return http.post(endpoints.CREATE, { sessionId });
	}

	static info(sessionId: SessionIdType): Promise<AxiosResponse<any>> {
		return http.get(endpoints.GAME_INFO(sessionId));
	}

	static update(sessionId: SessionIdType, data: GamePlayInfo): Promise<AxiosResponse<any>> {
		return http.put(endpoints.UPDATE(sessionId), data);
	}

	static delete(sessionId: SessionIdType): Promise<AxiosResponse<any>> {
		return http.delete(endpoints.DELETE(sessionId));
	}
}

export default GameApi;
