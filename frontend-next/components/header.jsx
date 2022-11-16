import React, { useState } from "react";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => setIsActive((cur) => !cur);

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">
          Delivery
        </a>
        <div className={`nav__menu ${isActive && "show-menu"}`} id="nav-menu">
          <ul
            aria-label="primary"
            role="list"
            className="nav__list"
            onClick={handleClick}
          >
            <li className="nav__item">
              <a href="#" className="nav__link">
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                About
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                Blogs
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="nav__toggle" id="nav-toggle" onClick={handleClick}>
          <i className="bx bx-grid-alt"></i>
        </div>

        <a href="#" className="button button__header">
          Order Now
        </a>
      </nav>
    </header>
  );
};

export default Header;
