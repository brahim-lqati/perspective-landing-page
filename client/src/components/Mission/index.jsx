import React from "react";
import styles from "./style.module.css";

function Mission() {
  return (
    <div id="mission" className={styles.mission}>
      <h2 className={styles.sectionTitle}>What is our mission</h2>
      <hr className={styles.hr} />
      <div className={styles.wrapper}>
        <h2 className={styles.moto}>
          It’s our ambition to Help visiualy impaired people integrate school
          better<span className={styles.dot}>.</span>
        </h2>
        <p className={styles.pText}>
          Our ambitions is to harness the power of AI to create hardware and
          software that is user-friendly, engaging and inclusive for people that
          are visually impaired so they can get the best education possible like
          everyone else.
        </p>
      </div>
    </div>
  );
}

export default Mission;
