import React from "react";
import styles from './navBar.module.css';
import CarWidget from "../CarWidget/CarWidget";

const NavBar = () => {
  return (
    <header>
      <nav className={styles.navbar}>
        <div className={styles.logo}>KeybStore</div>
        <ul className={styles.navLinks}>
          <div className={styles.menu}>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Products</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
            <CarWidget/>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
