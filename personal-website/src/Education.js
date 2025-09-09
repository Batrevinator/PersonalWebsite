import React from "react";
import styles from "./Education.module.css";

const wrapTLetters = (text) => {
  return text.replace(/(t|T)/g, (match) => `<span class="letter-t">${match}</span>`);
};

const Education = () => {
  return (
    <div className={styles.container}>
      <h1 dangerouslySetInnerHTML={{ __html: wrapTLetters("Education") }} />

      <div className={styles.educationCard}>
        <img
          src="/RITSeal.png" // Replace with your RIT image path
          alt="Rochester Institute of Technology"
          className={styles.educationImage}
        />

        <div className={styles.infoSection}>
          <h2 dangerouslySetInnerHTML={{ __html: wrapTLetters("Where") }} />
          <p
            dangerouslySetInnerHTML={{
              __html: wrapTLetters("Rochester Institute of Technology"),
            }}
          />

          <h2 dangerouslySetInnerHTML={{ __html: wrapTLetters("What") }} />
          <p
            dangerouslySetInnerHTML={{
              __html: wrapTLetters("Bachelor of Science in Software Engineering"),
            }}
          />

          <h2 dangerouslySetInnerHTML={{ __html: wrapTLetters("When") }} />
          <p
            dangerouslySetInnerHTML={{
              __html: wrapTLetters("August 2021 - May 2025"),
            }}
          />

          <h2 dangerouslySetInnerHTML={{ __html: wrapTLetters("My Experience") }} />
          <p
            dangerouslySetInnerHTML={{
              __html: wrapTLetters(
                "My time at RIT was an invaluable experience and provided me with the tools and skills I needed to excell in software engineering. Here I worked on countless projects with diverce and capable development teams. I completed three incredible Co-op experiences where I gained real world experience in the software diciplines I am most interested in. I graduated Magna Cum Laude with a GPA of 3.78 (0.02 points away from Summa Cum Laude; I swear I am not bitter about it...)"
              ),
            }}
          />

          <h2 dangerouslySetInnerHTML={{ __html: wrapTLetters("Promenant Coursework") }} />
          <ul>
            {["Software Architecture", "Embedded Software for Computing Systems", "Web Engineering", "Machine Learning", "Principles of Data Management"].map(
              (course, i) => (
                <li
                  key={`course-${i}`}
                  dangerouslySetInnerHTML={{ __html: wrapTLetters(course) }}
                />
              )
            )}
          </ul>

          <h2 dangerouslySetInnerHTML={{ __html: wrapTLetters("Activities & Involvement") }} />
          <ul>
            {["Electric Vehicle Team", "Table Tennis Club", "Hackathons"].map(
              (activity, i) => (
                <li
                  key={`activity-${i}`}
                  dangerouslySetInnerHTML={{ __html: wrapTLetters(activity) }}
                />
              )
            )}
          </ul>

          <h2 dangerouslySetInnerHTML={{ __html: wrapTLetters("Honors & Awards") }} />
          <ul>
            {["Magna Cum Laude", "Dean’s List (Multiple Semesters)", "Senior Project Excellence Award"].map(
              (award, i) => (
                <li
                  key={`award-${i}`}
                  dangerouslySetInnerHTML={{ __html: wrapTLetters(award) }}
                />
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Education;
