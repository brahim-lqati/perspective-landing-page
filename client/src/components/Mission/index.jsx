import React from "react";
import styles from "./style.module.css";

function Mission() {
  return (
    <div className={styles.mission}>
      <h2 className={styles.sectionTitle}>What is our mission</h2>
      <hr className={styles.hr} />
      <div className={styles.wrapper}>
        <h2 className={styles.moto}>
          It’s our ambition to Help visiualy impeared people intgrate school
          better<span className={styles.dot}>.</span>
        </h2>
        <p className={styles.pText}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate
          in, molestias magnam error at, aut numquam harum eos facere autem
          sapiente? Modi vero molestias ad, molestias magnam error at, aut
          numquam harum eos facere autem.
        </p>
      </div>
    </div>
  );
}

export default Mission;
