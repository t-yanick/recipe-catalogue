import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav className="nav">
    <h1 className="my-logo">
      <Link to="/">Catalogue of Recipes</Link>
    </h1>
    <ul className="navLinks">
      <Link className="navLists" to="/">
        <li>About Us</li>
      </Link>
      <Link className="navLists" to="/">
        <li>Recipes</li>
      </Link>
    </ul>
  </nav>
);

export default NavBar;