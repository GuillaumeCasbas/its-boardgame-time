import { Boardgame } from '../../domain/models';

export enum ActionTypes {
  ADD_BOARDGAME = 'add_boardgame',
  REMOVE_BOARDGAME = 'remove_boardgame',
}

export const addBoardGame = (boardgame: Boardgame) => ({
  type: ActionTypes.ADD_BOARDGAME,
  boardgame,
});

export const removeBoardgame = (boardgameId: Boardgame['id']) => ({
  type: ActionTypes.REMOVE_BOARDGAME,
  boardgameId,
});
