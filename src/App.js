import React from 'react';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary';
import BodyContainer from './components/BodyContainer/BodyContainer';

// function App() {
const App = () => {
  return (
    <div>
      <ErrorBoundary>
        <BodyContainer />
      </ErrorBoundary>
    </div>
  );
}

export default App;
