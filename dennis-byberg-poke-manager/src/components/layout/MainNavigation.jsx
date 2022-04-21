import React from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Poké Manager</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home Page</Link>
          </li>
          <li>
            <Link to="/search">Search Pokemons</Link>
          </li>
          <li>
            <Link to="/team">My Team</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainNavigation;
