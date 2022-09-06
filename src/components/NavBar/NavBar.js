import React from "react";
import styles from "./navBar.module.css";
import CarWidget from "../CarWidget/CarWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <nav className={styles.navbar}>
        <Link to="/">
          <div className={styles.logo}>KeybStore</div>
        </Link>
        <ul className={styles.navLinks}>
          <div className={styles.menu}>
            <li>
              <Link to="/category/65">65%</Link>
            </li>
            <li>
              <Link to="/category/Alice">Alice Layout</Link>
            </li>
            <li>
              <Link to="/category/Split">Split Keyboards</Link>
            </li>
          </div>
        </ul>
        <CarWidget />
      </nav>
    </header>
  );
};

export default NavBar;
