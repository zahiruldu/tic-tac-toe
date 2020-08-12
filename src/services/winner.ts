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

const isWinner = (board: string[], player: string): boolean => {
	return winningPatterns.some((pattern) =>
		pattern.every((index) => {
			return board[index] === player;
		})
	);
};

export default isWinner;
