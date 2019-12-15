import React from 'react';
import 'typeface-roboto';
// import NavBar from './components/NavBar/NavBar.js';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import Education from './components/Education/Education';

function App() {
  return (
    <div className="App">
      <Header/>
      <Education/>
    </div>
  );
}

export default App;
