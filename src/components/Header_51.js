import React from 'react';
import { Link } from 'react-router-dom';
import './Header_51.scss';
import { ReactComponent as Logo } from '../assets copy/crown.svg';
import { ReactComponent as ShopItem } from '../assets copy/shopping-bag.svg';

const header_51 = () => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo />
      </Link>
      <div className="options">
        <Link to="/shop_51" className="option">
          Shop
        </Link>
        <Link to="/contact_51" className="option">
          Contact
        </Link>
        <Link to="/signin_51" className="option">
          Sign In
        </Link>
        <div className="cart-icon" onclick="cartToggle()">
          <ShopItem className="shopping-icon" />
        </div>
      </div>
    </div>
  );
};

export default header_51;
