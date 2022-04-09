import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, Route, Routes } from 'react-router-dom';
import BoardgamePicker from './boardgame-picker/BoardgamePicker';
import { BoardgamesProvider } from './hook/use-boardgames';

const Home = () => (
  <>
    <main>
      <BoardgamePicker />
    </main>
    <nav>
      <Link to="/about">About</Link>
    </nav>
  </>
);

const About = () => (
  <>
    <main>
      <h2>What about guava ?</h2>
      <p>Overdose 🤫</p>
    </main>
    <nav>
      <Link to="/">Home</Link>
    </nav>
  </>
);

const App = () => {
  const { t } = useTranslation();

  return (
    <BoardgamesProvider
      boardgames={[
        {
          id: '1', title: 'Villainous', minPlayers: 2, maxPlayers: 5,
        },
        {
          id: '2', title: 'Nemesis', minPlayers: 1, maxPlayers: 6,
        },
      ]}
    >
      <div className="App">
        <h1>{t('It\'s board game time !')}</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </div>
    </BoardgamesProvider>
  );
};

export default App;
