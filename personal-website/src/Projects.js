import React from "react";
import styles from "./Projects.module.css";

const wrapTLetters = (text) => {
  return text.replace(/(t|T)/g, (match) => `<span class="letter-t">${match}</span>`);
};

const projects = [
  {
    title: "BrainJuice",
    period: "08/2025 - Current",
    image: "/coffee.png",
    description:
      "BrainJuice is a classic ecommerce store I have been building for the purpose of selling coffee and coffee related products. I started it as a project with the hopes of growing and improving my skills as a full stack developer. The code is now largely complete and I am working to devlop branding and imagery for the site and products.",
    tools: ["React", "JavaScript", "Python", "Flask", "PostgreSQL", "Version Control"],
  },
  {
    title: "Vistara",
    period: "01/2024 - Current",
    image: "/Homes.jpeg",
    description:
      "Vistara is an automated rental property management system I began working on during one of my Co-ops. I found the \"classic\" rental experience to be tedious and felt I could find ways to improve it. There is now a working prototype of automated payment management. I have since brought it to RIT to be proposed as a senior project for the 2025-2026 school year. Here I hope the increased developer count will propell the project forward to a working product.",
    tools: ["React", "JavaScript", "Python", "Flask", "MySQL", "Version Control"],
  },
  {
    title: "Electric Vehicle Telemetry System",
    period: "09/2024 - 05/2025",
    image: "/PrimaryEvtPic.png",
    description:
      "As Lead Database Engineer for RIT’s Electric Vehicle Team, I managed and developed SQL and NoSQL databases for telemetry data, built ETL pipelines, and designed full stack tools to visualize performance insights. The project took around 8 months to complete and I am happy to say we are now recording race data for valuable insighs into the bike's behavior.",
    tools: ["C/C++", "Python", "MySQL", "MongoDB", "Flask", "React", "Git", "Agile & Scrum"],
  },
  {
    title: "EZNotate",
    period: "08/2024 - 05/2025",
    image: "/chessPic.jpg",
    description:
      "EZNotate was my senior project at RIT. I and a team of 4 others worked together to develop an application that would use computer vision to analyize a new form of chess notation to translate it into standard chess notation. On the team I worked as the database and API developer, creating the DB schema and the pipelines used to communicate with the backend logic of the app. I am proud to say that my team and I won the Senior Project Excellence Award at the end of our hard work.",
    tools: ["Python", "MariaDB", "SQL", "EER Diagramming", "Data Engineering", "Version Control", "CI/CD"],
  },
];

const Projects = () => {
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

export default Projects;
