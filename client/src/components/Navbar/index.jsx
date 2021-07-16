import styles from "./style.module.css";
import logo from "./PERSPECTIVE.svg"

function Navbar() {
  return (
    <nav className={styles.nav}>
      <img className={styles.logo} src={logo} alt="perception" />
      <div className={styles.navbar} id="navbar">
        <a className={styles.link} href="#">
          Home
        </a>
        <a className={styles.link} href="#">
          Mission
        </a>
        <a className={styles.link} href="#">
          Products
        </a>
        <a className={styles.link} href="#">
          Paterns
        </a>
        <a className={styles.link} href="#">
          Team
        </a>
        <a className={styles.link} href="/contact">
          Contact Us
        </a>
        <a className={styles.btnbuy} href="#">
          Buy
        </a>
      </div>
    </nav>
  );
}

export default Navbar;