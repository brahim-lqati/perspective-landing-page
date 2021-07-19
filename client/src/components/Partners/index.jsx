import React from "react";
import styles from "./style.module.css";
import orange from  "./logo-orange.jpg";

function Partners() {
    return (
    <div id="partners" className={styles.parteners}>
        <h2 className={styles.sectionTitle}>Our Amazing Partners</h2>
        <hr className={styles.hr} />
        <div className={styles.list}>
            <img className={styles.logo} src={orange} alt="Orange logo" />
            <img className={styles.logo} src={orange} alt="Orange logo" />
            <img className={styles.logo} src={orange} alt="Orange logo" />
            <img className={styles.logo} src={orange} alt="Orange logo" />
            <img className={styles.logo} src={orange} alt="Orange logo" />
            <img className={styles.logo} src={orange} alt="Orange logo" />
        </div>
    </div>
    )
}

export default Partners;