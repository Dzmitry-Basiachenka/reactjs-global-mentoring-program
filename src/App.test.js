import { render, screen } from '@testing-library/react';

import App from './App';

test('renders the main page', () => {
  render(<App />);

  expect(screen.getByText(/Counter/i)).toBeInTheDocument();
  expect(screen.getByText(/SearchForm/i)).toBeInTheDocument();
  expect(screen.getByText(/GenreSelect/i)).toBeInTheDocument();
});
