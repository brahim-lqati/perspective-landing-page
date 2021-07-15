import React from "react";
import styles from "./style.module.css";

function Caption() {
  return (
    <main className={styles.main}>
      <div className={styles.caption}>
        <h1>
          Embrace Your Vision<span class="dot">.</span>
        </h1>
        <h2>
          Perspective will not only help people with impaired vision to read and
          write but also to become autonomous, independent and above all to
          embrace their uniqueness.
        </h2>
        <div className={styles.buttons}>
          <a className={styles.btnPrimary} href="#">
            Get More information
          </a>
          <a className={styles.btnWhite} href="#">
            Contact Us
          </a>
        </div>
      </div>
    </main>
  );
}

export default Caption;