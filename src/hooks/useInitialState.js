import React, { useEffect, useState } from 'react';
import initialState from '../initialState';
import axios from 'axios';

const API = 'http://localhost:1337/api/products';

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const response = await axios.get(API);
      console.log(response.data.data);
      const products = response.data.data;

      setState({
        ...state,
        products: products,
      });
    } catch (error) {
      console.error("se ha presentado un error", error);
    }
  };

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };

  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((item) => item.id !== payload.id),
    });
  };

  const addToBuyer = (payload) => {
    setState({
      ...state,
      buyer: [...state.buyer, payload],
    });
  };

  const addNewOrder = (payload) => {
    setState({
      ...state,
      orders: [...state.orders, payload],
    });
  };

  return {
    state,
    addToCart,
    removeFromCart,
    addToBuyer,
    addNewOrder,
  };
};

export default useInitialState;
