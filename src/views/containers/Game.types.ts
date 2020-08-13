/* eslint-disable @typescript-eslint/no-explicit-any */
import { SessionIdType } from '../../HTTP/game/game.types';
import { GamePlayPayload, GameStateRedux } from '../../state/game';

export interface GameProps {
	board: string[];
	gamePlay: any;
	startGame: (payload: SessionIdType) => string | number | boolean | Promise<any> | null | undefined | void;
	updateGame: (payload: GamePlayPayload) => string | number | boolean | Promise<any> | null | undefined | void;
}

export interface StateInfo {
	board: string[];
	gamePlay: GameStateRedux;
}

export interface GameState {
	board?: string[];
	player: string;
	playerReducer?: GameStateRedux;
}
