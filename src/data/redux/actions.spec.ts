import { Boardgame } from "../../domain/models";
import {
  addBoardGame,
  removeBoardgame,
  ActionTypes,
} from './actions';

describe('redux actions', () => {
  it('returns the correct addBoardgame action', () => {
    const boardgame: Boardgame = { id: 'foo', title: 'bar', minPlayers: 2, maxPlayers: 3 };
    const data = addBoardGame(boardgame);

    expect(data).toMatchObject({ type: ActionTypes.ADD_BOARDGAME, boardgame });
  });

  it('returns the correct removeBoardgame action', () => {
    const boardgameId: string = 'foo';
    const data = removeBoardgame(boardgameId);

    expect(data).toMatchObject({ type: ActionTypes.REMOVE_BOARDGAME, boardgameId });
  });
});
