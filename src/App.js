import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import CardContainer from './components/CardContainer/CardContainer';

function App() {
  return (
    <div>
      <Nav />
      <Header />
      <CardContainer />
    </div>
  );
}

export default App;
