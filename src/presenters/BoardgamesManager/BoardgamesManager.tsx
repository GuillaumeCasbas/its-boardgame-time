import React from 'react';
import { Boardgame } from '../../domain/models';
import useBoardgames from '../hooks/useBoardgames';

type FormState = Omit<Boardgame, 'id'>;
const INITIAL_BOARDGAME: FormState = {
  title: '',
  minPlayers: 1,
  maxPlayers: 1,
};

type ListProps = { boardgames: Boardgame[], removeItem: (id: string) => void };
const List = ({ boardgames, removeItem }: ListProps) => {
  if (boardgames.length === 0) {
    return <div>The list is empty. Please use the form below to add boardgames</div>;
  }

  return (
    <div>
      {boardgames.map((bg) => (
        <div key={bg.id}>
          <h3>{bg.title}</h3>
          <button type="button" onClick={() => removeItem(bg.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

const BoardgamesManager = () => {
  const [boardgame, setBoardgame] = React.useState<FormState>({
    title: '',
    minPlayers: 1,
    maxPlayers: 1,
  });

  const { boardgames, add, remove } = useBoardgames();

  const handleChange = (
    val: React.ChangeEvent<HTMLInputElement>,
    field: keyof Boardgame,
  ) => {
    const { value } = val.target;
    setBoardgame({
      ...boardgame,
      [field]: field === 'title' ? value : Number(value),
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (boardgame.title.trim().length > 0) {
      add({
        title: boardgame.title,
        minPlayers: boardgame.minPlayers,
        maxPlayers: boardgame.maxPlayers,
      });
      setBoardgame(INITIAL_BOARDGAME);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">
          Title
          <input id="title" value={boardgame.title} onChange={(e) => handleChange(e, 'title')} />
        </label>
        <label htmlFor="min_players">
          Minimum players
          <input id="min_players" type="number" value={boardgame.minPlayers} onChange={(e) => handleChange(e, 'minPlayers')} />
        </label>
        <label htmlFor="max_players">
          Maximum players
          <input id="max_players" type="number" value={boardgame.maxPlayers} onChange={(e) => handleChange(e, 'maxPlayers')} />
        </label>
        <button type="submit">Add</button>
      </form>
      <List boardgames={boardgames} removeItem={remove} />
    </div>
  );
};

export default BoardgamesManager;
