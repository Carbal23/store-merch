import React from 'react';
import Products from '../components/products/Products';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Store merch - Productos</title>
      </Helmet>
      <Products />
    </>
  );
};

export default Home;
