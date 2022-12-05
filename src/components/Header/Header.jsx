import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import style from './Header.module.scss';

const Header = () => {
  return (
    <nav className={style.app__navbar}>
      <div className={style.logo}>
        <img src={logo} alt="" />
      </div>
      <ul className={style.links}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/order">Orders</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
