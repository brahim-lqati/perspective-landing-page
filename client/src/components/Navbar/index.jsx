import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import styles from "./style.module.css";
import './style.css'
import { Nav, Navbar } from "react-bootstrap";

function Navigation() {
  return (
    <Navbar className={styles.nav} collapseOnSelect expand="lg">
      <Navbar.Brand href="#home">
        <img
          className={styles.logo}
          src={'logo/logoBlack.svg'}
          alt="perception"
        />
      </Navbar.Brand>
      <Navbar.Toggle className={styles.menuDark} />
      <Navbar.Collapse className={styles.links}>
        <Nav>
          <a className={styles.link} href="#">
            Home
          </a>
          <a className={styles.link} href="#mission">
            Mission
          </a>
          <a className={styles.link} href="#products">
            Products
          </a>
          <a className={styles.link} href="#team">
            Team
          </a>
          <a className={styles.link} href="#partners">
            Paterns
          </a>
          <a className={styles.link} href="/contact">
            Contact Us
          </a>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
