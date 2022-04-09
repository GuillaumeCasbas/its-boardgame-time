import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

const playerNumberSelect = () => screen.getByLabelText('Number of players');

test('renders learn react link', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>,
  );

  expect(playerNumberSelect()).toBeInTheDocument();
});
