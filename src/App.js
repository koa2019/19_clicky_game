import React from 'react';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary';
import CardContainer from './components/CardContainer/CardContainer';

// function App() {
const App = () => {
  return (
    <div>
      <ErrorBoundary>
        <CardContainer />
      </ErrorBoundary>
    </div>
  );
}

export default App;
