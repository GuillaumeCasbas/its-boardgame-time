import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, Route, Routes } from 'react-router-dom';
import BoardgamesRoute from './presenters/routes/BoardgamesRoute';

const Home = () => (
  <>
    <main />
    <nav>
      <Link to="/boardgames">Boardgames list</Link>
    </nav>
  </>
);

const App = () => {
  const { t } = useTranslation();

  return (
    <div className="App">
      <h1>{t('It\'s board game time !')}</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/boardgames" element={<BoardgamesRoute />} />
      </Routes>
    </div>
  );
};

export default App;
