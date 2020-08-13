import React from 'react';
import { render } from '@testing-library/react';
import Board from './Board';

describe('<Board> Testing', () => {
	test('Should render the Board component', async () => {
		const board = ['', '', '', '', '', '', '', '', ''];
		const component = render(<Board board={board} play={jest.fn()} />);

		expect(component).toBeTruthy();
	});

	test('Should render 9 boxes in the board', async () => {
		const board = ['', '', '', '', '', '', '', '', ''];
		render(<Board board={board} play={jest.fn()} />);
		const boxes = document.getElementsByClassName('playbox');

		expect(boxes.length).toEqual(9);
	});
});
