import React, { ReactElement } from 'react';

import './Board.css';
import { BoardTypeProps } from './Board.types';

const Board: React.FC<BoardTypeProps> = (props: BoardTypeProps): ReactElement => {
	const { board, play } = props;

	return (
		<div className='container'>
			{board.map((row: string, indx: number) => {
				return (
					// eslint-disable-next-line
					<div className='item' key={indx} onClick={() => play({ value: indx })}>
						<span className='playbox'>{row}</span>
					</div>
				);
			})}
		</div>
	);
};

export default Board;
