import React from "react";

const Header = () => {
  return (
    <header className="header">
      <nav className="flex flex-jc-sb flex-ai-c">
        <a href="/" className="header__log">
          <img src="images/logo.svg" alt="logo" />
        </a>

        <a href="#" className="header__menu">
          <span></span>
          <span></span>
          <span></span>
        </a>
      </nav>
    </header>
  );
};

export default Header;
