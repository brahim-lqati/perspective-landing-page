import React from "react";
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./style.module.css";

const Team = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  };

  return (
    <div className={styles.teamContainer}>
      <h2 className={styles.sectionTitle}>Our Hard-wroking Team</h2>
      <hr className={styles.hr} />
      <Slider {...settings}>
        <div className={styles.card}>
          <img src="images/brahim.png" height="100%" width="100%" />
          <div className={styles.desc}>
            <div className={styles.name}>
              Brahim <span className={styles.lname}>Lqati</span>
            </div>
            <div className={styles.team}>Developement Team</div>
          </div>
        </div>
        <div className={styles.card}>
          <img src="images/mahmoud.png" height="100%" width="100%" />
          <div className={styles.desc}>
            <div className={styles.name}>
              Brahim <span className={styles.lname}>Lqati</span>
            </div>
            <div className={styles.team}>Developement Team</div>
          </div>
        </div>
        <div className={styles.card}>
          <img src="images/Maroua.png" height="100%" width="100%" />
          <div className={styles.desc}>
            <div className={styles.name}>
              Brahim <span className={styles.lname}>Lqati</span>
            </div>
            <div className={styles.team}>Developement Team</div>
          </div>
        </div>
        <div className={styles.card}>
          <img src="images/omar.png" height="100%" width="100%" />
          <div className={styles.desc}>
            <div className={styles.name}>
              Brahim <span className={styles.lname}>Lqati</span>
            </div>
            <div className={styles.team}>Developement Team</div>
          </div>
        </div>
        <div className={styles.card}>
          <img src="images/choukri.png" height="100%" width="100%" />
          <div className={styles.desc}>
            <div className={styles.name}>
              Brahim <span className={styles.lname}>Lqati</span>
            </div>
            <div className={styles.team}>Developement Team</div>
          </div>
        </div>
        <div className={styles.card}>
          <img src="images/ismail.png" height="100%" width="100%" />
          <div className={styles.desc}>
            <div className={styles.name}>
              Brahim <span className={styles.lname}>Lqati</span>
            </div>
            <div className={styles.team}>Developement Team</div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Team;
