import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyles';
import { productData, productDataTwo } from './components/Products/data';

import Banner from './components/Banner';
import Products from './components/Products';
import Feature from './components/Feature';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Banner />
      <Products heading={'Choose your favorite'} data={productData} />
      <Feature />
      <Products heading={'Sweet Treats for you'} data={productDataTwo} />
      <Footer />
    </Router>
  );
}

export default App;
