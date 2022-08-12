import React from 'react';
import './Navbar.css';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar__links">
        <a href="#">Categorias</a>
        <a href="#">Ofertas</a>
        <a href="#">Nosotros</a>

        <div className="navbar__cart">
          <a href="/cart"><CartWidget /></a>
        </div>
      </div>
    </div>
  )
}

export default NavBar