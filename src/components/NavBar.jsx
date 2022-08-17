import React from 'react';
import { NavLink } from "react-router-dom"
import '../styles/Navbar.css';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar__links">
        <NavLink to="/categoria/categoria1">Categoria 1</NavLink>
        <NavLink to="/categoria/categoria2">Categoria 2</NavLink>

        <div className="navbar__cart">
          <a href="/cart"><CartWidget /></a>
        </div>
      </div>
    </div>
  )
}

export default NavBar