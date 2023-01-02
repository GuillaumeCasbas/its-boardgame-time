/* eslint-disable @typescript-eslint/default-param-last */
import { AnyAction, Reducer } from 'redux';
import { Boardgame } from '../../domain/models';
import { ActionTypes } from './actions';

export const boardgameReducer: Reducer<Boardgame[]> = (
  state: Boardgame[] = [],
  action: AnyAction,
): Boardgame[] => {
  switch (action.type) {
    case ActionTypes.ADD_BOARDGAME:
      return [
        ...state,
        action.boardgame,
      ];
    case ActionTypes.REMOVE_BOARDGAME:
      return state.filter((item) => item.id !== action.boardgameId);
    default:
      return state;
  }
};

export default {};
