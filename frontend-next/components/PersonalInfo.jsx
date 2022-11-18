import React from "react";

const PersonalInfo = () => {
  return (
    <section class="personal-info overall-layout section__padding">
      <figure class="personal-info__img">
        <img src="images/perfil.jpg" alt="Personal Image" />
      </figure>
      <div class="personal-info__content">
        <h2 class="personal-info__content--title section__title">
          Hello, I'm Martin Dow, a professional photographer based in USA
        </h2>

        <p class="personal-info__content--para section__para">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Exercitationem reiciendis officiis quis quasi corporis possimus
          obcaecati alias esse! Animi voluptates reiciendis repudiandae
          assumenda! Ex, ab.
        </p>

        <ul class="personal-info__content--experience">
          <div>
            <i class="fa-solid fa-check"></i>
            <li class="section__para">Over 7 Years of Experience</li>
          </div>

          <div>
            <i class="fa-solid fa-check"></i>
            <li class="section__para">200+ Successfully Executed Projets</li>
          </div>

          <div>
            <i class="fa-solid fa-check"></i>
            <li class="section__para">Exceptional Work Quality</li>
          </div>
        </ul>
      </div>
    </section>
  );
};

export default PersonalInfo;
