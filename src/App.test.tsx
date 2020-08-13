import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('<App> Testing', () => {
	test('Render App Component', () => {
		const component = render(<App />);
		expect(component).toBeTruthy();
	});
});
