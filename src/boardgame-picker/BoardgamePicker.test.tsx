import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import BoardgamePicker from './BoardgamePicker';
import { BoardgamesProvider } from '../hook/use-boardgames';
import { Boardgame } from '../types';

const playerNumberSelect = () => screen.getByLabelText('Number of players');
const submitButton = () => screen.getByRole('button', { name: 'Choose me a boardgame' });

const setup = (availableBoardgames: Boardgame[] = []) => render(
  <BoardgamesProvider boardgames={availableBoardgames}>
    <BoardgamePicker />
  </BoardgamesProvider>,
);

describe('<BoardgamePicker />', () => {
  it('sets the number of players to 2 by default', () => {
    setup();

    expect(playerNumberSelect()).toHaveValue('2');
  });

  it('displays a two player boardgame title when the form is submitted', () => {
    const boardgames: Boardgame[] = [
      {
        id: '1', title: 'Foo', minPlayers: 1, maxPlayers: 1,
      },
      {
        id: '2', title: 'Bar', minPlayers: 2, maxPlayers: 3,
      },
      {
        id: '3', title: 'Fizz', minPlayers: 2, maxPlayers: 3,
      },
    ];
    const twoPlayersGames = ['Bar', 'Fizz'];
    setup(boardgames);

    fireEvent.click(submitButton());

    expect(twoPlayersGames).toContain(screen.getByRole('heading').textContent);
  });

  it('displays a five player boardgame title when the form is submitted', () => {
    const boardgames: Boardgame[] = [
      {
        id: '1', title: 'Foo', minPlayers: 1, maxPlayers: 5,
      },
      {
        id: '2', title: 'Bar', minPlayers: 2, maxPlayers: 3,
      },
      {
        id: '3', title: 'Fizz', minPlayers: 2, maxPlayers: 3,
      },
    ];
    const fivePlayersGames = ['Foo'];
    setup(boardgames);

    fireEvent.change(playerNumberSelect(), { target: { value: 5 } });
    fireEvent.click(submitButton());

    expect(fivePlayersGames).toContain(screen.getByRole('heading').textContent);
  });
});
