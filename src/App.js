import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import './styles/App.css';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
