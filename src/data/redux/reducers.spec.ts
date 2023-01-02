import { Boardgame } from '../../domain/models';
import { ActionTypes } from './actions';
import * as reducers from './reducers';

describe('boardgame reducers', () => {
  it('adds the boardgame', () => {
    const boardgame: Boardgame = { id: '1', title: 'foo', maxPlayers: 3, minPlayers: 2 };
    const state: Boardgame[] = [
      { id: '2', title: 'bar', maxPlayers: 1, minPlayers: 1 },
    ];
    const data = reducers.boardgameReducer(
      state,
      { type: ActionTypes.ADD_BOARDGAME, boardgame },
    );

    expect(data).toStrictEqual([
      {
        id: '2', title: 'bar', maxPlayers: 1, minPlayers: 1,
      },
      boardgame,
    ]);
  });

  it('removes an existing boardgame', () => {
    const state: Boardgame[] = [
      { id: '2', title: 'bar', maxPlayers: 1, minPlayers: 1 },
    ];
    const data = reducers.boardgameReducer(
      state,
      { type: ActionTypes.REMOVE_BOARDGAME, boardgameId: '2' },
    );

    expect(data).toStrictEqual([]);
  })
});
