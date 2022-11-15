import React, { useState } from "react";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => setIsActive((cur) => !cur);

  return (
    <header className="primary-header">
      <div className="container">
        <a href="#">
          <img src="images/logo.svg" alt="logo" />
        </a>
        <nav className="primary-navigation">
          <ul aria-label="primary" role="list" className="nav-list">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Skills</a>
            </li>
            <li>
              <a href="#">Blogs</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>

        <button className="button">Get Started</button>
      </div>
    </header>
  );
};

export default Header;
