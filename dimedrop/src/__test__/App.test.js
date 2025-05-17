import { render, screen } from '@testing-library/react';
import App from '../App';
import React from 'react';

test('title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to DimeDrop/i);
  expect(linkElement).toBeInTheDocument();
});
