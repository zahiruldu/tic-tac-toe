import React, { Component, ReactElement } from 'react';
import './Game.css';
import { connect } from 'react-redux';

import Board from '../components/Board';
import { GameProps, GameState } from './Game.types';
import Generator from '../../services/generator';
import { isWinner, isUnWinnable } from '../../services/winner';
import initiateNewGame from '../../state/game/game.dispatchers';
import { GamePlayPayload } from '../../state/game';
import { GamePlayInfo } from '../../HTTP/game/game.types';

class Game extends Component<GameProps, GameState> {
	// eslint-disable-next-line react/state-in-constructor
	state = {
		player: '',
	};

	componentDidMount() {
		const { gamePlay } = this.props;

		const sessId = gamePlay?.data?.sessionId;

		if (sessId === undefined) {
			this.satrtNewgame();
			this.setState({ player: 'x' });
		} else {
			const lastPlayer = gamePlay?.data?.lastPlayer;
			const newPlayer = lastPlayer === 'x' ? 'o' : 'x';
			this.setState({ player: newPlayer });
		}
	}

	satrtNewgame = (): void => {
		const sessionId = Generator.randomId();
		const { startGame } = this.props;
		startGame(sessionId);
	};

	play = async (playBox: any): Promise<void> => {
		const position = playBox.value;
		const { player } = this.state;
		const { updateGame, gamePlay, board } = this.props;

		const {
			data: { sessionId },
		} = gamePlay;

		const obj: GamePlayInfo = {
			player,
			position,
		};

		const payload: GamePlayPayload = {
			sessionId,
			data: obj,
		};

		// If already played the box
		const isValueExist = board[position];
		if (!isValueExist) {
			updateGame(payload);
			const newPlayer = player === 'x' ? 'o' : 'x';
			this.setState({ player: newPlayer });
		}
	};

	render(): ReactElement {
		const { board } = this.props;
		const { player } = this.state;
		const lastPlayer = player === 'x' ? 'o' : 'x';
		const winner = isWinner(board, lastPlayer);
		const unWiningGame = isUnWinnable(board, ['x', 'o']);

		return (
			<div>
				{unWiningGame ? (
					<div className='congrats'>
						None can win!
						<hr />
						<button type='button' onClick={this.satrtNewgame}>
							Start New again
						</button>
					</div>
				) : (
					''
				)}
				{winner ? (
					<div className='congrats'>
						Congratulation! <strong>{lastPlayer}</strong> Won!
						<hr />
						<button type='button' onClick={this.satrtNewgame}>
							Start New
						</button>
					</div>
				) : (
					<span>
						<h2>Current Player: {player}</h2>
						<Board board={board} play={this.play} />
					</span>
				)}
				<div>
					Action Logs
					<pre>{JSON.stringify(board, null, 2)}</pre>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state: GameState) => {
	const { playerReducer } = state;

	return {
		board: playerReducer?.data?.board || [],
		gamePlay: playerReducer,
	};
};

const mapDispatchToProps = {
	startGame: initiateNewGame.initiateNewGame,
	updateGame: initiateNewGame.updateGame,
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
