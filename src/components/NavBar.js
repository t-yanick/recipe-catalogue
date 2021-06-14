import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav className="nav">
    <h1 className="my-logo mt-2">
      <Link to="/">Catalogue of Recipes</Link>
    </h1>
    <ul className="navLinks list-unstyled">
      <Link className="navLists" to="/">
        <li className="px-2">About Us</li>
      </Link>
      <Link className="navLists" to="/">
        <li className="px-2">Recipes</li>
      </Link>
    </ul>
  </nav>
);

export default NavBar;