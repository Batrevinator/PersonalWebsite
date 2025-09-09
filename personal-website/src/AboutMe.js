import React from 'react';
import styles from './AboutMe.module.css';
import { Row } from 'reactstrap';


const wrapTLetters = (text) => {
  return text.replace(/(t|T)/g, (match) => `<span class="letter-t">${match}</span>`);
};

const AboutMe = () => {
  return (
    <div className={styles.container}>
      <div className={styles.profileSection}>
        <img
          src="/Profile.jpg"
          alt="Your Name"
          className={styles.profileImage}
        />
        <h1 dangerouslySetInnerHTML={{ __html: wrapTLetters("Trevor Borden") }} />
        <p
          className={styles.title}
          dangerouslySetInnerHTML={{
            __html: wrapTLetters("Embedded Software Engineer | Full Stack Engineer"),
          }}
        />
        <a target = "_blank" href = "Borden_Trevor_Resume.pdf" lassName={styles.title}>
            My Resume 
        </a>
      </div>


      <div className={styles.bio}>
        <h2 dangerouslySetInnerHTML={{ __html: wrapTLetters("About Me") }} />
        <p
          dangerouslySetInnerHTML={{
            __html: wrapTLetters(
              "Hi! I am a software engineer with a broad spectrum of experience in embedded software and full stack development. I am a recent graduate from Rochester Institute of Technology and am seeking new opportunities to grow as a software engineer."
            ),
          }}
        />
      </div>

  <div className={styles.skills}>
  <h2 dangerouslySetInnerHTML={{ __html: wrapTLetters("Skills") }} />

    <div className={styles.skillsGrid}>
        <div>
        <h3 className={styles.subheading} dangerouslySetInnerHTML={{ __html: wrapTLetters("Languages") }} />
        <ul>
            {["C/C++", "Python", "JavaScript", "TypeScript", "PHP", "MySQL"].map((skill, index) => (
            <li key={`lang-${index}`} dangerouslySetInnerHTML={{ __html: wrapTLetters(skill) }} />
            ))}
        </ul>

        <h3 className={styles.subheading} dangerouslySetInnerHTML={{ __html: wrapTLetters("Frameworks & Tools") }} />
        <ul>
            {["React(strap)", "Flask", "MongoDB", "OracleDB", "Google Test"].map((skill, index) => (
            <li key={`tools-${index}`} dangerouslySetInnerHTML={{ __html: wrapTLetters(skill) }} />
            ))}
        </ul>
        </div>

        <div>
        <h3 className={styles.subheading} dangerouslySetInnerHTML={{ __html: wrapTLetters("Systems & Platforms") }} />
        <ul>
            {["RTOS", "Linux", "Windows", "Mac"].map((skill, index) => (
            <li key={`systems-${index}`} dangerouslySetInnerHTML={{ __html: wrapTLetters(skill) }} />
            ))}
        </ul>

        <h3 className={styles.subheading} dangerouslySetInnerHTML={{ __html: wrapTLetters("Practices") }} />
        <ul>
            {["Agile & Scrum", "CI/CD", "Software Architecture", "Unit & Integration Testing", "Version Control (Git, GitHub, Bitbucket, Jira)"].map((skill, index) => (
            <li key={`practices-${index}`} dangerouslySetInnerHTML={{ __html: wrapTLetters(skill) }} />
            ))}
        </ul>
        </div>
    </div>
    </div>
    </div>
  );
};

export default AboutMe;
