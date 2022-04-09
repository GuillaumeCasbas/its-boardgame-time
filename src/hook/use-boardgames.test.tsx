import React from 'react';
import { render, screen } from '@testing-library/react';

import { Boardgame } from '../types';

import { BoardgamesProvider, useBoardgames } from './use-boardgames';

const list: Boardgame[] = [
  {
    id: '1',
    title: 'foo',
    minPlayers: 1,
    maxPlayers: 2,
  },
  {
    id: '2',
    title: 'bar',
    minPlayers: 1,
    maxPlayers: 2,
  },
];

describe('use-boardgame hook', () => {
  it('passes the the provided boardgame list to its children', () => {
    const DummyComponent = () => {
      const boardgameList = useBoardgames();

      return (
        <ul>
          {boardgameList?.getAll().map((item) => (
            <li key={item.id}>
              {item.title}
            </li>
          ))}
        </ul>
      );
    };

    render(
      <BoardgamesProvider boardgames={list}>
        <DummyComponent />
      </BoardgamesProvider>,
    );

    const items = screen.getAllByRole('listitem');
    expect(items).toHaveLength(2);
    expect(items.at(0)).toHaveTextContent('foo');
    expect(items.at(1)).toHaveTextContent('bar');
  });

  describe('getByNumberOfPlayers', () => {
    type GetByNumberCompProps = { numberOfPlayers: number };
    const GetByNumberComp = ({ numberOfPlayers }: GetByNumberCompProps) => {
      const boardgameList = useBoardgames();

      const game = boardgameList?.getByNumberOfPlayers(numberOfPlayers);

      return <div>{game?.title}</div>;
    };

    const setup = (
      { numberOfPlayers, gameboardList }: GetByNumberCompProps & { gameboardList: Boardgame[] },
    ) => render(
      <BoardgamesProvider boardgames={gameboardList}>
        <GetByNumberComp numberOfPlayers={numberOfPlayers} />
      </BoardgamesProvider>,
    );
    type TestTuple = [string, Boardgame[], number];
    it.each<TestTuple>([
      [
        'equals the min number of players (1)',
        [
          {
            id: '1', title: 'Nope', minPlayers: 5, maxPlayers: 5,
          },
          {
            id: '2', title: 'Correct', minPlayers: 2, maxPlayers: 3,
          },
        ],
        2,
      ],
      [
        'equals the min number of players (2)',
        [
          {
            id: '1', title: 'Correct', minPlayers: 5, maxPlayers: 5,
          },
          {
            id: '2', title: 'Nope', minPlayers: 2, maxPlayers: 3,
          },
        ],
        5,
      ],
      [
        'equals the max number of players (1)',
        [
          {
            id: '1', title: 'Correct', minPlayers: 1, maxPlayers: 2,
          },
          {
            id: '2', title: 'Nope', minPlayers: 3, maxPlayers: 3,
          },
        ],
        2,
      ],
      [
        'is between max and min number of players',
        [
          {
            id: '1', title: 'Correct', minPlayers: 1, maxPlayers: 3,
          },
          {
            id: '2', title: 'Nope', minPlayers: 3, maxPlayers: 5,
          },
        ],
        2,
      ],
    ])('returns the corrects games when the parameter %s', (_title, gameboardList, numberOfPlayers) => {
      setup({ gameboardList, numberOfPlayers });

      expect(screen.getByText('Correct')).toBeVisible();
    });
  });
});
