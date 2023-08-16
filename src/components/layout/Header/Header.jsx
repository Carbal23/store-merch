import React, { useContext } from 'react';
import '../../../styles/components/header.css';
import { Link } from 'react-router-dom';
import AppContext from '../../../context/AppContext';

const Header = () => {
  const { state } = useContext(AppContext);
  const { cart } = state;

  return (
    <div className="header">
      <h1 className="header-title">
        <Link to="/">Conf Merch</Link>
      </h1>
      <div className="header-checkout">
        <Link to="/checkout">
          <i className="fa-solid fa-basket-shopping"></i>
        </Link>
        {cart.length > 0 && <div className='header-alert'>{cart.length}</div>}
      </div>
    </div>
  );
};

export default Header;
