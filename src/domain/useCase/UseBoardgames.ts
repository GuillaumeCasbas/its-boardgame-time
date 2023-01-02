import { Boardgame } from '../models';
import { AddBoardgame } from './AddBoardgame';
import { RemoveBoardgame } from './RemoveBoardgame';

type UseBoardgame = () => ({
  boardgames: Boardgame[],
  add: AddBoardgame,
  remove: RemoveBoardgame,
});

export default UseBoardgame;
