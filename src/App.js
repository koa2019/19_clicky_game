import React from 'react';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary';
import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import CardContainer from './components/CardContainer/CardContainer';

// function App() {
const App = () => {
  return (
    <div>

      <Nav />
      <Header />
      <ErrorBoundary>
        <CardContainer />
      </ErrorBoundary>
    </div>
  );
}

export default App;
