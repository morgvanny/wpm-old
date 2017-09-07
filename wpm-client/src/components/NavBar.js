import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/leaderboard">Leaderboard</NavLink>
      <NavLink to="/stats">Stats</NavLink>
    </div>
  );
};

export default NavBar;