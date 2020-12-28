import React from 'react';
import Banner from './components/Banner';
import Products from './components/Products';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyles';
import { productData } from './components/Products/data';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Banner />
      <Products heading={'Choose your favorite'} data={productData} />
    </Router>
  );
}

export default App;
