import { ActionTypes } from '../../data/redux/actions';
import { useAppDispatch, useAppSelector } from '../../data/redux/store';
import { Boardgame, BoardgameInput } from '../../domain/models';
import UseBoardgames from '../../domain/useCase/UseBoardgames';

const useBoardgames: UseBoardgames = () => {
  const dispatch = useAppDispatch();

  return ({
    boardgames: useAppSelector((state) => state.boardgame),
    add: (boardgameInput: BoardgameInput) => dispatch({
      type: ActionTypes.ADD_BOARDGAME,
      boardgame: {
        id: new Date().toISOString(),
        ...boardgameInput,
      },
    }),
    remove: (boardgameId: Boardgame['id']) => dispatch({
      type: ActionTypes.REMOVE_BOARDGAME,
      boardgameId,
    }),
  });
};

export default useBoardgames;
