import React from 'react';

import { Boardgame } from '../types';

type Props = { children: React.ReactElement, boardgames: Boardgame[] };

type BoardgamesContextType = {
  getAll: () => Boardgame[]
  getByNumberOfPlayers: (numberOfPlayers: number) => Boardgame
};

const boardgamesContext = React.createContext<BoardgamesContextType | null>(null);

export const useBoardgames = () => React.useContext(boardgamesContext);

const useProvideBoardgames = (initialList: Boardgame[]) => {
  const [list] = React.useState<Boardgame[]>(initialList);

  const getAll = () => list;

  const getByNumberOfPlayers = (numberOfPlayers: number): Boardgame => {
    const possibleGames = list.filter((game) => numberOfPlayers >= game.minPlayers
      && numberOfPlayers <= game.maxPlayers);

    return possibleGames[Math.floor(Math.random() * possibleGames.length)];
  };

  return { getAll, getByNumberOfPlayers };
};

export const BoardgamesProvider = ({ children, boardgames }: Props) => {
  const boardgameList = useProvideBoardgames(boardgames);
  return <boardgamesContext.Provider value={boardgameList}>{children}</boardgamesContext.Provider>;
};
