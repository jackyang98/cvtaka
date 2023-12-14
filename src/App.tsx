import './App.css';
import HomePage from './Pages/Home/index.tsx';
import AboutPage from './Pages/About/index.tsx';
import React from 'react';

const App = () => {
  return (
    <div className="App">
      <HomePage />
      <AboutPage />
    </div>
  );
}

export default App;
