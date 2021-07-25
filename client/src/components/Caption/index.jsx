import React from "react";
import styles from "./style.module.css";
import MainImage from "../MainImage";

function Caption() {
  return (
    <main className={styles.main}>
      <div className={styles.caption}>
        <h1>
          Embrace Your Vision<span className={styles.dot}>.</span>
        </h1>
        <h2>
          Perspective will not only help people with impaired vision to read and
          write but also to become autonomous, independent and above all to
          embrace their uniqueness.
        </h2>
        <a className="btn btn-primary" href="#">Get More Information</a>
      </div>
      <MainImage className={styles.image} />
    </main>
  );
}

export default Caption;
