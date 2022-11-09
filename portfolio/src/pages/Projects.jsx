import React from "react";
import styles from "./Pages.module.css";

const Projects = () => {
  return (
    <div className={styles.projects}>
      <div>
        <h1>Where can you see my projects?</h1>
        <br />
        <p>
          See my GitHub account: <a href="https://github.com/maci03" target="_blank">GitHub</a>
        </p>
      </div>
    </div>
  );
};

export default Projects;
