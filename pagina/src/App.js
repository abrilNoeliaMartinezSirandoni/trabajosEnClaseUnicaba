/*
import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App; */
// App.js
import React from 'react';
import MovieInfo from './MovieInfo'; // Asegúrate de que la ruta sea correcta

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f0f0f0', padding: '20px', width: '80%', margin: 'auto' }}>
      <MovieInfo />
    </div>
  );
}

export default App;

