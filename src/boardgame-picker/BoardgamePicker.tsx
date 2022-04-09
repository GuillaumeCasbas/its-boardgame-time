import React from 'react';
import { useTranslation } from 'react-i18next';
import { useBoardgames } from '../hook/use-boardgames';
import { Boardgame } from '../types';

const BoardgamePicker = () => {
  const { t } = useTranslation();
  const GamePipcker = useBoardgames();
  const [numberOfPlayers, setNumberOfPlayers] = React.useState<string>('2');
  const [boardgame, setBoardgame] = React.useState<Boardgame | null>(null);

  const handleOnChange
  : React.ChangeEventHandler<HTMLSelectElement> = (evt) => setNumberOfPlayers(evt.target.value);

  const handleSubmit: React.FormEventHandler = (evt) => {
    evt.preventDefault();

    setBoardgame(GamePipcker!.getByNumberOfPlayers(parseInt(numberOfPlayers, 10)));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="playerNumber">
          {t('Number of players')}
          <select id="playerNumber" value={numberOfPlayers} onChange={handleOnChange}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </label>
        <button type="submit">Choose me a boardgame</button>
      </form>
      {boardgame && (
        <h1>{boardgame.title}</h1>
      )}
    </>
  );
};

export default BoardgamePicker;
