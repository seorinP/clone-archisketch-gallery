import React from 'react';
import { createGlobalStyle } from 'styled-components';
import logo from './logo.svg';
import './App.css';

createGlobalStyle`
  html {
    font-size: 50%;
  }
  body {
    margin: 0;
  }
`

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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