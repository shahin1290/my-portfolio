import React from "react";
import Hero from "./Hero";
import PersonalInfo from "./PersonalInfo";
import Skills from "./Skills";
import Work from "./Work";

const Home = () => {
  return (
    <main className="container">
      <Hero />

      <PersonalInfo />

      <Skills />

      <Work />

      {/* <section class="contact section" id="contact">
        <h2 class="section-title">Contact</h2>

        <div class="contact__container bd-grid">
          <form action="" class="contact__form">
            <input type="text" placeholder="Name" class="contact__input" />
            <input type="mail" placeholder="Email" class="contact__input" />
            <textarea
              name=""
              id=""
              cols="0"
              rows="10"
              class="contact__input"
            ></textarea>
            <input
              type="button"
              value="Enviar"
              class="contact__button button"
            />
          </form>
        </div>
      </section> */}
    </main>
  );
};

export default Home;
