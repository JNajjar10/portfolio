import React from 'react';
import 'typeface-roboto';
// import NavBar from './components/NavBar/NavBar.js';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import Education from './components/Education/Education';
import About from './components/About/About';

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Education/>
    </div>
  );
}

export default App;
