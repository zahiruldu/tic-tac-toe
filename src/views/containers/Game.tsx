import React, { Component, ReactElement } from 'react';
import './Game.css';
import { connect } from 'react-redux';

import Board from '../components/Board';
import { GameProps, GameState } from './Game.types';
import Generator from '../../services/generator';
import isWinner from '../../services/winner';
import initiateNewGame from '../../state/game/game.dispatchers';
import { GamePlayPayload } from '../../state/game';
import { GamePlayInfo } from '../../HTTP/game/game.types';

class Game extends Component<GameProps, GameState> {
	// eslint-disable-next-line react/state-in-constructor
	state = {
		player: 'x',
		sessionId: '',
	};

	componentDidMount() {
		const sessionId = Generator.randomId();
		const { startGame } = this.props;

		startGame(sessionId);

		this.setState({ sessionId });
	}

	play = async (data: any): Promise<void> => {
		const position = data.value;
		const { player, sessionId } = this.state;
		const { updateGame } = this.props;

		const obj: GamePlayInfo = {
			player,
			position,
		};

		const payload: GamePlayPayload = {
			sessionId,
			data: obj,
		};

		updateGame(payload);

		const newPlayer = player === 'x' ? 'o' : 'x';
		this.setState({ player: newPlayer });
	};

	render(): ReactElement {
		const { board } = this.props;
		const { player } = this.state;
		const lastPlayer = player === 'x' ? 'o' : 'x';
		const winner = isWinner(board, lastPlayer);

		return (
			<div>
				{winner ? (
					<div className='congrats'>
						Congratulation! <strong>{lastPlayer}</strong> Won!
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
