import React from "react";
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

import styles from "./style.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Team = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div>
      <Slider {...settings}>
        <div className={styles.card}>
          <div className={styles.desc}>
            <div className={styles.name}>
              Brahim <span className={styles.lname}>Elqati</span>
            </div>
            <div className={styles.team}>Developement Team</div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Team;
