import React from "react";
import styles from "./Pages.module.css";

const Contact = () => {
  return (
    <div className={styles.contactPage}>
      <div>
        <h1>Where can you contact me?</h1>
        <br />
        <p>
          See my LinkedIn account: <a href="https://www.linkedin.com/in/maci-abesadze-496445230/" target="_blank">Linkedin</a>
        </p>
        <p>
          See my Facebook account: <a href="https://www.facebook.com/maci.abesadze.1" target="_blank">Facebook</a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
