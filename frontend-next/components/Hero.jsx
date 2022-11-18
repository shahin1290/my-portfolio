import React from "react";

const Hero = () => {
  return (
    <section className="hero overall-layout section__padding">
      <div className="hero__content">
        <h6 className="hero__content--mini-title">Welcome to</h6>

        <h1 className="hero__content--title">Phoxul Studio</h1>

        <p className="hero__content--para">
          I love to pause the wild, happy and real moments of life, just to hear
          their stories untold.
        </p>

        <div className="hero__content--links">
          <a className="hero__content--links__my-works" href="#">
            My Works
          </a>
          <a className="hero__content--links__contact" href="#">
            Contact
          </a>
        </div>
      </div>

      <div className="home__social">
        <a href="" className="home__social-icon">
          <i className="bx bxl-linkedin"></i>
        </a>
        <a href="" className="home__social-icon">
          <i className="bx bxl-behance"></i>
        </a>
        <a href="" className="home__social-icon">
          <i className="bx bxl-github"></i>
        </a>
      </div>
    </section>
  );
};

export default Hero;
