import React from "react";
import styles from "./style.module.css";
import orange from "./logo-orange.jpg";
import Card from "../Card";
import Title from "../Title";

function Partners() {
  return (
    <div id="partners" className={styles.card}>
      <Title title="Our Amazing Partners" />
      <div className={styles.list}>
        <img className={styles.logo} src={orange} alt="Orange logo" />
        <img className={styles.logo} src={orange} alt="Orange logo" />
        <img className={styles.logo} src={orange} alt="Orange logo" />
        <img className={styles.logo} src={orange} alt="Orange logo" />
        <img className={styles.logo} src={orange} alt="Orange logo" />
        <img className={styles.logo} src={orange} alt="Orange logo" />
      </div>
    </div>
  );
}

export default Partners;
