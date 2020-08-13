// eslint-disable-next-line import/no-cycle
import { State } from '../store.types';
import { SessionIdType, GamePlayInfo } from '../../HTTP/game/game.types';

export type ApiError = {
	msg: string;
	code: string;
};

export type GamePayload = {
	_id: string;
	board: string[];
	status: string;
	sessionId: SessionIdType;
	lastPlayer: string;
};

export type GamePlayPayload = {
	sessionId: SessionIdType;
	data: GamePlayInfo;
};

export interface GameStateRedux extends State {
	data?: GamePayload;
	errorState?: {
		success: boolean;
		message: string;
		errors: ApiError | ApiError[];
	};
}
