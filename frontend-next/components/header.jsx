import React from "react";

const Header = () => {
  return (
    <header className="header">
      <nav className="flex flex-jc-sb flex-ai-c">
        <a href="/" className="header__logo">
          <img src="images/logo.svg" alt="logo" />
        </a>

        <a href="#" className="header__menu hide-for-desktop">
          <span></span>
          <span></span>
          <span></span>
        </a>

        <div className="header__links hide-for-mobile">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Blog</a>
          <a href="#">Careers</a>
        </div>

        <a href="#" className="button header__cta hide-for-mobile">
          Request Invite
        </a>
      </nav>
    </header>
  );
};

export default Header;
