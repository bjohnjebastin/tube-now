import React, { useState as useStateMock } from 'react'
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {

	beforeEach(() => {
	});

	test('renders the title', () => {
		render(<App />);
		const titleElement = screen.getByText('Service updates');
		expect(titleElement).toBeInTheDocument();
	});

	test('renders the refresh informative text', () => {
		render(<App />);
		const titleElement = screen.getByText('updates every 10 seconds');
		expect(titleElement).toBeInTheDocument();
	});
	
	test('renders error message if failure to load data', () => {
		render(<App />);
		const errorElement = screen.getByText('Error loading data. Will try to load again automatically after 10 seconds.');
		expect(errorElement).toBeInTheDocument();
	});
});
