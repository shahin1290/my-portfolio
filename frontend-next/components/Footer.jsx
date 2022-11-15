import React from "react";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-100">
      <div className="conatiner">
        <div className="even-columns">
          <div>
            <a href="#">
              <img src="images/logo.svg" alt="logo" />
            </a>
            <ul role="list" aria-label="social links">
              <li>
                <a href="#" aria-label="facebook">
                  Home
                </a>
              </li>
              <li>
                <a href="#" aria-label="youtube">
                  About
                </a>
              </li>
              <li>
                <a href="#" aria-label="twitter">
                  About
                </a>
              </li>
              <li>
                <a href="#" aria-label="pinterest">
                  Skills
                </a>
              </li>
              <li>
                <a href="#" aria-label="instagram">
                  Blogs
                </a>
              </li>
              <li>
                <a href="#" aria-label="facebook">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <nav className="footer-nav">
              <ul aria-label="Footer" role="list">
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
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <form action="">
              <input type="email" />
              <button className="button"> Go</button>
            </form>
            <p> Copyright 2020. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
