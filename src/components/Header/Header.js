import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">KeybStore</div>
        <ul className="nav-links">
          <div className="menu">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Products</a>
            </li>
            <li>
              <a href="/">Cart</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
