import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'; 

function NavBar() {
  return (
    <nav className="NavBar">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? 'active-link' : 'link')}
      >
        Vending Machine
      </NavLink>
      <NavLink
        to="/chips"
        className={({ isActive }) => (isActive ? 'active-link' : 'link')}
      >
        Chips
      </NavLink>
      <NavLink
        to="/soda"
        className={({ isActive }) => (isActive ? 'active-link' : 'link')}
      >
        Soda
      </NavLink>
      <NavLink
        to="/candy"
        className={({ isActive }) => (isActive ? 'active-link' : 'link')}
      >
        Candy
      </NavLink>
    </nav>
  );
}

export default NavBar;
