import React from "react";

const Skills = () => {
  return (
    <section class="skills" id="skills">
      <div className="skills__list">
        {[
          "node",
          "react",
          "redux",
          "html",
          "css",
          "figma",
          "git",
          "typescript",
          "javascript",
          "sass",
        ].map((skill) => (
          <div className="skills__list--item" key={skill}>
            <div className="">
              <img src={`images/skills/${skill}.png`} alt={skill} />
            </div>
            <p className="">{skill}</p>
          </div>
        ))}
      </div>
      <div className="skills__experience">
        {[
          {
            year: 2022,
            works: [{ name: "Senior Product Designer", company: "Amazon" }],
          },
          {
            year: 2022,
            works: [{ name: "Senior Product Designer", company: "Amazon" }],
          },
        ].map((experience) => (
          <div className="app__skills-exp-item" key={experience.year}>
            <div className="app__skills-exp-year">
              <p className="bold-text">{experience.year}</p>
            </div>
            <div className="app__skills-exp-works">
              {experience.works.map((work) => (
                <>
                  <div className="app__skills-exp-work" key={work.name}>
                    <h4 className="bold-text">{work.name}</h4>
                    <p className="p-text">{work.company}</p>
                  </div>
                </>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
