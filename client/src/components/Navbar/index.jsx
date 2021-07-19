import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import styles from "./style.module.css";
import { Nav, Navbar } from "react-bootstrap";
import React, {useState} from "react";
function Navigation() {
  const [scroll, setScroll] = useState(false);
  const changeBackground = () => {
    window.scrollY >= 80 ? setScroll(true) : setScroll(false);
  }
  window.addEventListener('scroll', changeBackground);

  return (
    <Navbar className={scroll ?styles.navActive  : styles.nav } collapseOnSelect expand="lg" sticky="top">
      <Navbar.Brand href="#home">
        <img
          className={styles.logo}
          src={scroll ? 'logo/perception_white.svg' : 'logo/perception.svg'}
          alt="perception"
        />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className={styles.links}>
        <Nav>
          <a className={scroll ? [styles.link, styles.test].join(" ") : styles.link} href="#">
            Home
          </a>
          <a className={scroll ? [styles.link, styles.test].join(" ") : styles.link} href="#mission">
            Mission
          </a>
          <a className={scroll ? [styles.link, styles.test].join(" ") : styles.link} href="#products">
            Products
          </a>
          <a className={scroll ? [styles.link, styles.test].join(" ") : styles.link} href="#team">
            Team
          </a>
          <a className={scroll ? [styles.link, styles.test].join(" ") : styles.link} href="#partners">
            Paterns
          </a>
          <a className={scroll ? [styles.link, styles.test].join(" ") : styles.link} href="/contact">
            Contact Us
          </a>
          <a className={scroll ? [styles.btnbuy, styles.btnbuyActive].join(" ") : styles.btnbuy} href="#">
            Buy
          </a>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
