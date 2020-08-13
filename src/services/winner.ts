/*
Winning Logic in crosses
crosses
 ['X',' ',' '] 
 [' ','X',' '] 
 [' ',' ','X'] 
                
 [' ',' ','X'] 
 [' ','X',' '] 
 ['X',' ',' '] 
*/

const winningPatterns = [
	[0, 4, 8],
	[2, 4, 6],
];

export const isWinner = (board: string[], player: string): boolean => {
	return winningPatterns.some((pattern) =>
		pattern.every((index) => {
			return board[index] === player;
		})
	);
};

export const isAllPlayed = (board: string[]): boolean => {
	const result = board.filter((data) => {
		return data === '';
	});
	return result.length === 0;
};

export const isUnWinnable = (board: string[], players: string[]): boolean => {
	const isPlayed = isAllPlayed(board);
	const isAnyWon = players.some((player) => {
		return isWinner(board, player);
	});

	if (isPlayed && !isAnyWon) {
		return true;
	}
	return false;
};
