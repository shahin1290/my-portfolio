import React, { useState } from "react";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => setIsActive((cur) => !cur);

  return (
    <header className="header overall-layout">
      <a className="header__logo" href="#">
        Phoxul
      </a>

      <ul className="header__nav">
        <a className="header__nav--link" href="#">
          Home
        </a>
        <a className="header__nav--link" href="#">
          About
        </a>
        <a className="header__nav--link" href="#">
          Services
        </a>
        <a className="header__nav--link" href="#">
          Works
        </a>
        <a className="header__nav--link" href="#">
          Gallery
        </a>
        <a className="header__nav--link" href="#">
          Blog
        </a>
        <a className="header__nav--link" href="#">
          Contact
        </a>
      </ul>
    </header>
  );
};

export default Header;
