import React from 'react';
import { Link } from 'react-router-dom';
import BoardgamesManager from '../BoardgamesManager';

const BoardgamesRoute = () => (
  <>
    <nav>
      <Link to="/">Home</Link>
    </nav>
    <main>
      <h2>Boardgames</h2>
      <BoardgamesManager />
    </main>
  </>
);

export default BoardgamesRoute;
