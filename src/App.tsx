import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import logo from './logo.svg';
import Gallery from './pages/gallery';

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
    <Routes>
      <Route path='/' element={<Gallery />} />
    </Routes>
  );
}