import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, Route, Routes } from 'react-router-dom';

function Home() {
  return (
    <>
      <main>
        <h2>🐓 Something great will happen here !</h2>
        <p>But not in guava !</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}

function About() {
  return (
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
}

function App() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <h1>{t('It\'s board game time !')}</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
