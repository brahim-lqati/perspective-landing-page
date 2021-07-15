import React from "react";
import styles from "./style.module.css";
import logo from "./PERSPECTIVE.svg";

function Footer() {
  return (
    <footer>
      <div className={styles.wrapper}>
        <div className={styles.company}>
          <img src={logo} alt="Perspective" />
          <p className={styles.companyText}>
            Embrace Your Vision <span className={styles.dot}>.</span> <br />
            It’s our ambition to Help visiualy impeared people intgrate school
            better <span className="dot">.</span>
          </p>
          <div className={styles.smallTitle}>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-facebook-square"></i>
            <i className="fab fa-twitter"></i>
          </div>
        </div>
        <section className={styles.section}>
          <h5 className={styles.smallTitle}>
            For businesses<span className={styles.dot}>.</span>
          </h5>
          <div className={styles.links}>
            <a href="#">Perspective Glasses</a>
            <a href="#">Perspective Glasses</a>
            <a href="#">Contact Us</a>
          </div>
        </section>
        <section>
          <h5 className={styles.smallTitle}>
            For Schools<span className={styles.dot}>.</span>
          </h5>
          <div className={styles.links}>
            <a href="#">Perspective Glasses</a>
            <a href="#">Perspective Glasses</a>
            <a href="#">Blog</a>
            <a href="#">Contact Us</a>
          </div>
        </section>
        <section className={styles.section}>
          <h5 className={styles.smallTitle}>
            For Individuals<span className={styles.dot}>.</span>
          </h5>
          <div className={styles.links}>
            <a href="#">Perspective Glasses</a>
            <a href="#">Perspective Glasses</a>
            <a href="#">Blog</a>
            <a href="#">Contact Us</a>
          </div>
        </section>
      </div>
      <hr className={styles.hr}/>
      <h6 className={styles.copyright}>©2021 Perspective. All rights reserved.</h6>
    </footer>
  );
}

export default Footer;
