import React from 'react';
import { screen } from '@testing-library/react';

import { setup } from '../../test/testUtils';
import useBoardgames from './useBoardgames';

const Dummy = () => {
  const hook = useBoardgames();

  const onClick = () => hook.add({ title: 'Foo', minPlayers: 2, maxPlayers: 5 });

  return (
    <div>
      <button type="button" onClick={onClick}>
        addBoardgameButton
      </button>
      <ul>
        {hook.boardgames.map((boardgame) => (
          <li key={boardgame.id}>
            {boardgame.title}
            <button type="button" onClick={() => hook.remove(boardgame.id)}>
              removeItem
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

describe('useBoardgame hook', () => {
  it('adds, displays and delete boardgames correctly', async () => {
    const { view } = setup(<Dummy />);

    expect(screen.queryAllByRole('listitem')).toHaveLength(0);

    await view.click(screen.getByRole('button', { name: 'addBoardgameButton' }));

    expect(screen.queryAllByRole('listitem')).toHaveLength(1);
    expect(screen.getByText('Foo')).toBeVisible();

    await view.click(screen.getByRole('button', { name: 'removeItem' }));

    expect(screen.queryAllByRole('listitem')).toHaveLength(0);
  });
});
