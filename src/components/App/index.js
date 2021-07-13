import React from 'react';
import Presentation from '../Presentation';
import Header from '../Header';
import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Presentation />
  </div>
);

// == Export
export default App;
