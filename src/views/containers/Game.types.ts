import { SessionIdType } from '../../HTTP/game/game.types';
import { GamePlayPayload, GameStateRedux } from '../../state/game';

export interface GameProps {
	board: Array<string>;
	startGame: (payload: SessionIdType) => string | number | boolean | Promise<any> | null | undefined | void;
	updateGame: (payload: GamePlayPayload) => string | number | boolean | Promise<any> | null | undefined | void;
}

export interface StateInfo {
	board: Array<string>;
	gamePlay: any;
}

export interface GameState {
	board?: Array<string>;
	player: string;
	sessionId: string;
	playerReducer?: GameStateRedux;
}
