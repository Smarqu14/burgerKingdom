import React from 'react';
import Banner from './components/Banner';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyles';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Banner />
    </Router>
  );
}

export default App;
