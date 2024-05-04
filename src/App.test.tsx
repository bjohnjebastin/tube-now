import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {

	test('renders the title', () => {
		render(<App />);
		const titleElement = screen.getByText('Service updates');
		expect(titleElement).toBeInTheDocument();
	});

	
});
