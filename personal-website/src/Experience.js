import React from "react";
import styles from "./Experience.module.css";

const wrapTLetters = (text) => {
  return text.replace(/(t|T)/g, (match) => `<span class="letter-t">${match}</span>`);
};

const projects = [
  {
    title: "Electric Vehicle Team",
    period: "01/2022 - 05/2025",
    image: "/EVTPic.png",
    description:
        "As a member of EVT I wore many hats. Starting as an embedded engineer on the firmware team I developed software that runs on the vehicles to this day. The majority of my work was on the Battery Management System where I expanded the system's communication capacity allowing us to collect more telemetry data, faster keeping our data fresh, and as accurate as possible. Following my successes as a junior engineer I was elevated to a new position: Lead Database Engineer. The team had never used any formal database system for our data. In this role I developed both relational and non-relational databases to fit our unique data requirements. Following this, my team began to grow and we turned our attention to dat aquisition and modeling. In 8 months we developed an application which pipeline's bike telemetry data into our database. Future endeavors will include data visualization and analysis.",
    tools: ["React", "JavaScript", "Python", "Flask", "MongoDB", "C/C++", "Embedded Software", "Web Development", "Data Management", "Leadership", "Version Control"],
  },
  {
    title: "Keurig Dr Pepper",
    period: "01/2024 - 06/2024",
    image: "/KDPLogo.png",
    description:
      "At Keurig I was a member of the New Product Development team. My work on the team was primarily focused on creating new software platforms that would work regardless of OS and/or hardware on the brewers. This would allow for much easier creation of new coffee brewers as we could \"Build-a-bear\" together a brewer using exisiting software. In this role I worked on many aspects of the brewer software including IoT communications, software testing, and various developer tools for testing brewers faster and easier.",
    tools: ["C/C++", "ThreadX", "Embedded Software", "IoT", "Google Test", "Software Architecture"],
  },
  {
    title: "GlobalFoundries",
    period: "06/2023 - 08/2023",
    image: "/GFLogo.png",
    description:
      "GlobalFoundries was a very unique internship experience. I was assigned to the Fault Detection Team which was comprised primarily of Chemical Engineers who were not familiar with software concepts. On the team I was the only acting software engineer and I was tasked with the creation of various data driven web applications. Having never really worked on web projects before this it was a rather daunting task to have no experienced engineers to help when I got stuck. Despite this I managed to create multiple software tools to help detect and alert users to manufacturing tool failures.",
    tools: ["Javascript", "PHP", "OracleDB", "Requirement Gathering", "Collaborative Communication" ],
  },
  {
    title: "Transonic Systems",
    period: "01/2023 - 06/2023",
    image: "/TransonicLogo.jpg",
    description:
      "Transonic Systems was my first internship experience. Transonic Systems is a relatively small company which produces medial recording equipment for use during open body surgeries. When I joined the rather small software team was in the process of a major refactoring project. Most systems were in desparate need of an overhaul owing to the poor work done by the software contractors who built the system. On the team I played a part in the system refactor and there is not much of that system I did not touch in my work. Fortunately, by the end of my internship we had made most of the major refactoring changes necessary and the project was completed ahead of schedule.",
    tools: ["C/C++", "Software Architecture Design", "Embedded Software", "Logging and Persistance Systems", "Data Structures", "Version Control"],
  },
];

const Experience = () => {
  return (
    <div className={styles.container}>
      <h1 dangerouslySetInnerHTML={{ __html: wrapTLetters("Projects") }} />

      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <img
              src={project.image}
              alt={project.title}
              className={styles.projectImage}
            />

            <h2 dangerouslySetInnerHTML={{ __html: wrapTLetters(project.title) }} />

            <p
              className={styles.projectPeriod}
              dangerouslySetInnerHTML={{ __html: wrapTLetters(project.period) }}
            />

            <p
              dangerouslySetInnerHTML={{
                __html: wrapTLetters(project.description),
              }}
            />

            <div className={styles.toolsSection}>
              <h3 dangerouslySetInnerHTML={{ __html: wrapTLetters("Tools & Skills") }} />
              <ul>
                {project.tools.map((tool, i) => (
                  <li
                    key={i}
                    dangerouslySetInnerHTML={{ __html: wrapTLetters(tool) }}
                  />
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
