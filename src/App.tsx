import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import React from 'react';
import GlobalStyle from './styles/global';

export function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes />
      </Router>
    </>
  )
}
